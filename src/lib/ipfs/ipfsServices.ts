import axios from 'axios';
import { successLog, infoLog, errorLog, warningLog } from '../colorLog';
import CommandRunner from '../commandRunner';
import afterInstall from './afterInstall';
import { getIPFSPath } from '../../utils';

const CR = new CommandRunner(
  getIPFSPath()
);

class ExternalAppManager {
  private static instance: ExternalAppManager;

  private constructor() {
  }

  public static getInstance(): ExternalAppManager {
    if (!ExternalAppManager.instance) {
      ExternalAppManager.instance = new ExternalAppManager();
    }
    return ExternalAppManager.instance;
  }

  // Start the external application
  public async start(): Promise<void> {
    try {
      const ipfsApiRunning = await this.checkIfIpfsApiIsRunning();

      if (!ipfsApiRunning) {
        await CR.run();
        infoLog('IPFS daemon started');
      } else {
        warningLog(`IPFS API running: ${ipfsApiRunning}`);
      }
    } catch (error) {
      errorLog('Failed to start external process: ' + error);
    }
  }

  public init(): void {
    try {
      afterInstall();
    } catch (error) {
      errorLog(`afterInstall: ${error}`);
    }
  }

  // Check if IPFS API is running
  private async checkIfIpfsApiIsRunning(): Promise<boolean> {
    try {
      const response = await axios.get('http://127.0.0.1:5001/api/v0/id');
      return response.status === 200;
    } catch (error) {
      return false;
    }
  }

  // Stop the external application
  public async stop(): Promise<void> {
    CR.kill();
    successLog('IPFS daemon shutdown command executed');
  }
}

export default ExternalAppManager;
