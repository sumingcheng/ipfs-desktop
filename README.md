# IPFS Desktop Enhanced Edition

IPFS Desktop Enhanced Edition 是对官方 IPFS Desktop 的一个增强版本，重构了之前的客户端，特别添加了内网部署支持、`swarm.key` 配置和自动配置生成功能。此版本旨在提供更加灵活和安全的 IPFS 网络配置选项，适用于需要在私网中运行的场景。

## 主要特性

- **内网部署支持**：允许用户在内部网络中独立运行 IPFS，无需连接外部公共 IPFS 网络。
- **`swarm.key` 支持**：通过 `swarm.key` 实现网络的私有化，增加数据传输的安全性。
- **自动生成配置**：简化用户配置流程，自动创建必需的配置文件，配置文件目录`src/lib/ipfs`。

## 架构图



## 系统要求

- **操作系统**：Windows, macOS, Linux
- **Node.js**：建议使用 v18.16.1 或更高版本，最低支持 v16.20.2
- **Electron**：v26.2.1

## 本地开发

**克隆仓库**

```bash
git clone https://github.com/sumingcheng/ipfs-desktop.git
cd ipfs-desktop
```

**安装依赖**

```bash
yarn
```

**构建应用**

```bash
npm run build
```

**运行应用**

```bash
npm start
```

## 配置与构建

运行 IPFS Desktop Enhanced Edition 后，应用将自动在指定目录生成 `swarm.key` 和配置文件，并启动一个独立的 IPFS 节点。

### 生成 `swarm.key`

**选择密钥生成工具**

通常使用一个名为 `go-ipfs-swarm-key-gen` 的工具来生成这个文件。这是一个简单的 Go 程序，可以生成适用于 IPFS 私有网络的 `swarm.key` 文件。这里我使用的是`win10`，Linux上基本也是这个流程。

**安装密钥生成工具**

如果您已经安装了 Go 语言环境，可以直接使用 `go get` 命令安装此工具

```
go get -u github.com/Kubuxu/go-ipfs-swarm-key-gen/ipfs-swarm-key-gen
```

**生成 `swarm.key` 文件**

使用 `ipfs-swarm-key-gen` 工具生成 `swarm.key` 文件

```
ipfs-swarm-key-gen > swarm.key
```

命令会生成一个 `swarm.key` 文件，并将其保存到当前目录下。通过这种方式，您可以创建一个只有知道密钥的节点能够互相通信的 IPFS 私有网络，有效提高网络的安全性和隐私。**生成内容如下**。生成的文件覆盖`src/lib/ipfs/swarm.key`文件

```
/key/swarm/psk/1.0.0/
/base16/
a884f23b1b210dbd5d93da695eca9c1b29658c3e199be870feb1e2991cc9306d
```

### 更新 IPFS 配置文件

进入项目`src/lib/ipfs/afterInstall.ts`找到`updateConfigFile`函数

```js
function updateConfigFile(ipfsPath: string): void {
  try {
    const configPath = path.join
    (ipfsPath, 'config');
    if (fs.existsSync(configPath)) {
      const config = JSON.parse(fs.readFileSync(configPath, 'utf8'));
      // 更新 Bootstrap 节点列表
      config.Bootstrap = ['修改为你的节点'];
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
```

找到`swarmKeyContent`

```js
// 主函数
function main(): void {
  const ipfsPath = getIpfsPath();

// 初始化 IPFS 如果尚未初始化
  if (!fs.existsSync(ipfsPath)) {
    initIpfs(ipfsPath);
  }

  // 创建或更新 swarm.key 文件
  const swarmKeyContent = '修改为你的 swarm.key';
  createOrUpdateSwarmKey(ipfsPath, swarmKeyContent);

// 更新 IPFS 配置文件
  updateConfigFile(ipfsPath);
}
```

完成以上操作，重新打包你想要的客户端版本，该版本就可以直接在私网使用了。

## 自定义 UI

你可以通过修改[ipfs-webui](https://github.com/ipfs/ipfs-webui)这个项目，将打包后的产物放入`assets/webui`文件夹内，重新构建既可

## 如何贡献

欢迎所有形式的贡献，包括但不限于新功能开发、bug 修复和文档更新。请遵循以下步骤贡献

1. Fork 仓库并创建您的分支：`git checkout -b my-new-feature`
2. 提交您的更改：`git commit -am 'Add some feature'`
3. 推送到分支：`git push origin my-new-feature`
4. 提交 Pull Request

## 许可证

本项目使用 [MIT 许可证](LICENSE)。使用前请确保您已阅读并接受其条款。

## 支持和问题

如果您在使用过程中遇到问题，欢迎通过 GitHub Issues 提交您的问题。
