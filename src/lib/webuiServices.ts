import express from 'express';
import { Server as HttpServer } from 'http';

export class Server {
  private server: HttpServer | null = null; // HTTP服务器实例
  private readonly port: number; // 服务器监听的端口

  constructor(port: number) {
    this.port = port;
  }

  /**
   * 启动服务器
   * @returns {Promise<void>} 返回一个 Promise，在服务器成功启动时解决
   */
  public start(): Promise<void> {
    return new Promise((resolve, reject) => {
      const app = express();

      // 设置静态文件目录，例如: 'public' 或 'build'
      app.use(express.static('../../../../assets/webui/index.html'));

      // 尝试监听指定端口以启动服务器
      this.server = app.listen(this.port, () => {
        console.log(`ServerIsRunning： http://127.0.0.1:${this.port}`);
        resolve();
      });

      // 监听错误事件，如果发生错误则拒绝 Promise
      this.server.on('error', (error) => {
        console.error('服务器启动失败：', error);
        reject(error);
      });
    });
  }

  /**
   * 停止服务器
   * @returns {Promise<void>} 返回一个 Promise，在服务器成功停止时解决
   */
  public stop(): Promise<void> {
    return new Promise((resolve, reject) => {
      if (!this.server) {
        reject(new Error('服务器未启动。'));
        return;
      }

      // 关闭服务器并处理可能出现的错误
      this.server.close((err) => {
        if (err) {
          console.error('服务器停止时发生错误：', err);
          reject(err);
        } else {
          console.log('服务器已停止。');
          resolve();
        }
      });
    });
  }
}
