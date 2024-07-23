import { spawn, ChildProcessWithoutNullStreams } from 'child_process';
import { errorLog, successLog, infoLog } from './colorLog';

class CommandRunner {
  private readonly executablePath: string;
  private externalProcess: ChildProcessWithoutNullStreams | null = null;
  private shutdownProcess: ChildProcessWithoutNullStreams | null = null;

  constructor(executablePath: string) {
    this.executablePath = executablePath;
    infoLog(`Executable path: ${executablePath}`);
  }

  // 运行子进程
  public run(): Promise<void> {
    return new Promise((resolve, reject) => {
      this.externalProcess = spawn(this.executablePath, ['daemon'], { shell: true });
      this.setupProcessListeners(this.externalProcess);

      this.externalProcess.on('error', (error) => {
        errorLog(`Execution error: ${error}`);
        reject(error);
      });

      this.externalProcess.on('exit', (code, signal) => {
        if (code === 0) {
          infoLog(`Process exited normally with code ${code}`);
          resolve();
        } else {
          errorLog(`Process exited abnormally with code ${code}, signal ${signal}`);
          reject(new Error(`Process exit code ${code}`));
        }
      });
    });
  }

  // 杀死子进程
  public kill(): void {
    try {
      this.shutdownProcess = spawn(this.executablePath, ['shutdown'], { shell: true });
      this.setupProcessListeners(this.shutdownProcess);

      this.shutdownProcess.on('close', (code) => {
        infoLog(`IPFS shutdown process closed with exit code ${code}`);
        this.terminateExternalProcess();
      });
    } catch (error: any) {
      errorLog(`Error during IPFS shutdown: ${error.message}`);
      this.terminateExternalProcess();
    }
  }

  // 终止外部进程
  private terminateExternalProcess(): void {
    if (this.externalProcess && !this.externalProcess.killed) {
      this.externalProcess.kill('SIGTERM');
      infoLog('External process has been terminated');
      this.externalProcess = null;
    }
  }


  // 设置子进程监听器
  private setupProcessListeners(process: ChildProcessWithoutNullStreams): void {
    process?.stdout?.on('data', (data) => {
      successLog(`stdout: ${data}`);
    });
    process?.stderr?.on('data', (data) => {
      errorLog(`stderr: ${data}`);
    });

    process?.on('close', (code) => {
      infoLog(`Child process has closed with exit code ${code}`);
    });
  }
}

export default CommandRunner;
