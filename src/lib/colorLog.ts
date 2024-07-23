import chalk from 'chalk';
import path from 'path';
import fs from 'fs';
import { app } from 'electron';

let userDataPath, logFilePath: fs.PathOrFileDescriptor;
const clog = console.log;

if (process.env.NODE_ENV === 'production') {
  userDataPath = app.getPath('userData');
  logFilePath = path.join(userDataPath, 'electron-log.txt');
} else {
  logFilePath = path.join(__dirname, '../../electron-log.txt');
}

// 获取当前时间并格式化为 HH:MM:SS
const getCurrentTime = () => {
  const now = new Date();
  const hours = now.getHours().toString().padStart(2, '0');
  const minutes = now.getMinutes().toString().padStart(2, '0');
  const seconds = now.getSeconds().toString().padStart(2, '0');
  return `[${hours}:${minutes}:${seconds}]`;
};

// 追加日志信息到文件
function writeLog(message: string) {
  const timestamp = getCurrentTime();
  const formattedMessage = `${timestamp} - ${message}\n`;

  // 将日志信息追加到文件
  fs.appendFileSync(logFilePath, formattedMessage, { encoding: 'utf8' });
}

writeLog(`———————————————————————————————————————————————————————————`);
// 修改后的日志函数
export const errorLog = (message: string) => {
  const formattedMessage = `${getCurrentTime()} ${chalk.red(message)}`;
  clog(formattedMessage);
  writeLog(`ERROR: ${message}`);
};

export const successLog = (message: string) => {
  const formattedMessage = `${getCurrentTime()} ${chalk.green(message)}`;
  clog(formattedMessage);
  writeLog(`SUCCESS: ${message}`);
};

export const warningLog = (message: string) => {
  const formattedMessage = `${getCurrentTime()} ${chalk.yellow(message)}`;
  clog(formattedMessage);
  writeLog(`WARNING: ${message}`);
};

export const infoLog = (message: string) => {
  const formattedMessage = `${getCurrentTime()} ${chalk.bgWhite.black(message)}`;
  clog(formattedMessage);
  writeLog(`INFO: ${message}`);
};
