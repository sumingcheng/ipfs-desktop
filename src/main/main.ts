/* eslint global-require: off, no-console: off, promise/always-return: off */

import path from 'path';
import { app, BrowserWindow, shell } from 'electron';
// import { autoUpdater } from 'electron-updater';
// import log from 'electron-log';
// import MenuBuilder from './menu';
import ExternalAppManager from '../lib/ipfs/ipfsServices';
// 静态服务
import serve from 'electron-serve';
import { infoLog, successLog, errorLog } from '../lib/colorLog';
import { setupTray } from './Tray';

// 创建服务实例
const ipfsService = ExternalAppManager.getInstance();
// 初始化 IPFS 服务
const initIPFS = () => {
  ipfsService.init();
  infoLog('ipfsService -> ipfs initiated');

  // 启动 IPFS 服务
  ipfsService.start();
  successLog('createWindow -> ipfsService started');
};

initIPFS();

// 设置 electron-serve
serve({
  scheme: 'webui',
  directory: app.isPackaged
    ? path.join(process.resourcesPath, './assets/webui')
    : path.join(__dirname, '../../assets/webui')
});
infoLog('serve -> electron-serve initiated');

// 资源路径
const RESOURCES_PATH = app.isPackaged
  ? path.join(process.resourcesPath, '/assets')
  : path.join(__dirname, '../../assets');
infoLog('createWindow -> RESOURCES_PATH initiated');
// 资源路径
export const getAssetPath = (...paths: string[]): string => {
  return path.join(RESOURCES_PATH, ...paths);
};

let mainWindow: BrowserWindow | null = null;


if (process.env.NODE_ENV === 'production') {
  const sourceMapSupport = require('source-map-support');
  sourceMapSupport.install();
}

const isDebug =
  process.env.NODE_ENV === 'development' || process.env.DEBUG_PROD === 'true';

if (isDebug) {
  require('electron-debug')();
}

const createWindow = () => {
  infoLog('createWindow -> createWindow initiated');

  mainWindow = new BrowserWindow({
    show: false,
    width: 1024,
    height: 728,
    minWidth: 1000,
    minHeight: 750,
    icon: getAssetPath('icon.png'),
    webPreferences: {
      preload: app.isPackaged
        ? path.join(__dirname, 'preload.js')
        : path.join(__dirname, '../../.erb/dll/preload.js'),
      webSecurity: false,                 // 关闭 web 安全性
      allowRunningInsecureContent: false  // 允许一个 https 页面运行 http url 里的资源
    }
  });

  const ses = mainWindow.webContents.session;
  ses.clearCache();  // 清除缓存

  // 加载页面
  mainWindow.loadURL('webui://-').catch(e => console.error('Failed to load URL:', e));
  successLog('createWindow -> mainWindow loadedURL');

  // 显示窗口时
  mainWindow.on('ready-to-show', () => {
    if (!mainWindow) {
      throw new Error('"mainWindow" is not defined');
    }

    if (process.env.START_MINIMIZED) {
      mainWindow.minimize();
    } else {
      mainWindow.show();
    }
  });

  // 关闭窗口时
  mainWindow.on('close', (e) => {
    try {
      ipfsService.stop();
      successLog('app -> ipfsService stopped successfully');
    } catch (error) {
      errorLog(`app -> error stopping ipfsService: ${error}`);
    }
  });

  // 关闭窗口后
  mainWindow.on('closed', () => {
    mainWindow = null;
  });

  // 不显示菜单栏
  mainWindow.setMenu(null);
  // const menuBuilder = new MenuBuilder(mainWindow);
  // menuBuilder.buildMenu();

  // 在用户的浏览器中打开 url
  mainWindow.webContents.setWindowOpenHandler((edata) => {
    shell.openExternal(edata.url);
    return { action: 'deny' };
  });

  // 开发者工具
  if (isDebug) {
    mainWindow.webContents.openDevTools();
  }
  // Remove this if your app does not use auto updates
  // eslint-disable-next-line
  // new AppUpdater();
};

// 事件监听
let tray: any;
app.on('ready', () => {
  tray = setupTray(mainWindow as any, app);
});

// 事件监听
app.on('window-all-closed', () => {
  // Respect the OSX convention of having the application in memory even
  // after all windows have been closed
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

// 窗口都已关闭并且应用程序将要退出时触发
app.on('will-quit', (event) => {

});

// 应用程序开始关闭所有窗口之前触发
app.on('before-quit', () => {
  try {
    ipfsService.stop(); // 异步停止IPFS服务
    successLog('app -> ipfsService stopped successfully');
  } catch (error) {
    errorLog(`app -> error stopping ipfsService: ${error}`);
  }
  if (tray && !tray.isDestroyed()) {
    tray.destroy(); // 销毁托盘图标
  }
});


app
  .whenReady()
  .then(() => {
    createWindow();
    app.on('activate', () => {
      // On macOS it's common to re-create a window in the app when the
      // dock icon is clicked and there are no other windows open.
      if (mainWindow === null) createWindow();
    });
  })
  .catch(console.log);

export default app;
