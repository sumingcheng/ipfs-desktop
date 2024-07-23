import { Menu, Tray, BrowserWindow, nativeImage } from 'electron';
// 导入函数和变量
import { getAssetPath } from './main';
import { successLog } from '../lib/colorLog';
import ExternalAppManager from '../lib/ipfs/ipfsServices';

const ipfsService = ExternalAppManager.getInstance();

export const setupTray = (mainWindow: BrowserWindow, mainApp: any) => {
  let trayIcon = nativeImage.createFromPath(getAssetPath('icon.ico'));

  const tray = new Tray(trayIcon);
  const contextMenu = Menu.buildFromTemplate([
    {
      label: '打开 AIStore',
      click: () => mainWindow?.show()
    },
    { type: 'separator' },
    {
      label: '重启 IPFS 服务',
      click: async () => {
        // 重启 IPFS 服务
        await ipfsService.stop();
        await ipfsService.start();
        successLog('createWindow -> ipfsService restarted');
      }
    },
    { type: 'separator' },
    {
      label: '关闭',
      click: async () => {
        await ipfsService.stop();
        mainApp.quit();
      }
    }
  ]);

  tray.setToolTip('Tray Example');
  tray.setContextMenu(contextMenu);

  tray.on('double-click', () => mainWindow?.show());

  return tray;
};
