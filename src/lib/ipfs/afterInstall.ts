import fs from 'fs';
import path from 'path';
import os from 'os';
import { execSync } from 'child_process';
import { infoLog, successLog, errorLog } from '../colorLog';
import { getIPFSPath } from '../../utils';

const PATH = getIPFSPath();

// 获取 IPFS 路径
function getIpfsPath(): string {
  return path.join(os.homedir(), '.ipfs');
}

// 初始化 IPFS
function initIpfs(ipfsPath: string): void {
  try {
    infoLog('Running ipfs init...');
    const options: any = { stdio: 'pipe', shell: true };

    // 捕获 stdout 和 stderr
    const output = execSync(`${PATH} init`, options);
    successLog(`IPFS init finished: ${output.toString()}`);
  } catch (error: any) {
    errorLog(`Error during IPFS init: ${error.message}`);
  }
}

// 创建或更新 swarm.key 文件
function createOrUpdateSwarmKey(ipfsPath: string, keyContent: string): void {
  try {
    const swarmKeyPath = path.join(ipfsPath, 'swarm.key');
    fs.writeFileSync(swarmKeyPath, keyContent);
    successLog(`swarm.key created/updated in ${ipfsPath}`);
  } catch (error) {
    errorLog(`Error creating/updating swarm.key: ${error}`);
  }
}

// 更新 IPFS 配置文件
function updateConfigFile(ipfsPath: string): void {
  try {
    const configPath = path.join
    (ipfsPath, 'config');
    if (fs.existsSync(configPath)) {
      const config = JSON.parse(fs.readFileSync(configPath, 'utf8'));
      // 更新 Bootstrap 节点列表
      config.Bootstrap = ['/ip4/123.125.194.107/tcp/4001/ipfs/12D3KooWB8xdzMhBsP9432HY8L2NuDdquBjrSeo8fHr1NDiL9Vbo'];
      config.Routing.Type = 'dhtclient';

      fs.writeFileSync(configPath, JSON.stringify(config, null, 2));
      successLog('Config file updated successfully');
    } else {
      errorLog('Config file not found');
    }
  } catch (error) {
    errorLog(`Error updating config file: ${error}`);
  }
}

// 主函数
function main(): void {
  const ipfsPath = getIpfsPath();

// 初始化 IPFS 如果尚未初始化
  if (!fs.existsSync(ipfsPath)) {
    initIpfs(ipfsPath);
  }

  // 创建或更新 swarm.key 文件
  const swarmKeyContent = '/key/swarm/psk/1.0.0/\n/base16/\n6d209e6cbf6fe0fc85bf7b57ff62e781c2f43f1254c3ae8e75f49e32478183c3';
  createOrUpdateSwarmKey(ipfsPath, swarmKeyContent);

// 更新 IPFS 配置文件
  updateConfigFile(ipfsPath);
}

export default main;
