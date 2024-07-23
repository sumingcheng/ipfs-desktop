import { app } from 'electron';
import path from 'path';

export const getIPFSPath = () => {
  return app.isPackaged
    ? path.join(process.resourcesPath, '/src/utils/ipfs.exe')
    : path.join(__dirname, './ipfs.exe');
};
