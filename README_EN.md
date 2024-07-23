# IPFS Desktop Enhanced Edition
<div align="center">
  <a href="https://github.com/sumingcheng/ipfs-desktop/blob/main/README_EN.md">EN</a> | <a href="https://github.com/sumingcheng/ipfs-desktop/blob/main/README.md">CH</a>
</div>

------

IPFS Desktop Enhanced Edition is an enhanced version of the official IPFS Desktop client. This version has been restructured to include support for internal network deployment, `swarm.key` configuration, and automated configuration generation. It is designed to offer more flexible and secure IPFS network configuration options, suitable for scenarios requiring operation within a private network.

## Key Features

- **Internal Network Deployment Support**: Allows users to run IPFS independently within an internal network without the need to connect to the external public IPFS network.
- **`Swarm.key` Support**: Implements network privatization through the use of `swarm.key`, enhancing the security of data transmission.
- **Automatic Configuration Generation**: Simplifies the user configuration process by automatically creating the necessary configuration files, located in `src/lib/ipfs`.

## Architecture Diagram

[Include diagram here]

## System Requirements

- **Operating Systems**: Windows, macOS, Linux
- **Node.js**: Recommended version v18.16.1 or higher, minimum supported version v16.20.2
- **Electron**: v26.2.1

## Local Development

### Installation

**Clone the repository**:

```
git clone https://github.com/sumingcheng/ipfs-desktop.git
cd ipfs-desktop
```

**Install dependencies**:

```
yarn
```

**Build the application**:

```
npm run build
```

**Run the application**:

```
npm start
```

## Configuration and Setup

Upon running IPFS Desktop Enhanced Edition, the application will automatically generate `swarm.key` and configuration files in the specified directory and start an independent IPFS node.

### Generating `swarm.key`

**Selecting a Key Generation Tool**

Typically, a tool named `go-ipfs-swarm-key-gen` is used to generate this file. It is a simple Go program capable of generating a `swarm.key` file suitable for IPFS private networks. The following process is applicable for `win10` and generally similar on Linux.

**Installing the Key Generation Tool**

If you have already installed the Go language environment, you can install this tool using the `go get` command:

```
go get -u github.com/Kubuxu/go-ipfs-swarm-key-gen/ipfs-swarm-key-gen
```

**Generating the `swarm.key` File**

Generate the `swarm.key` file using the `ipfs-swarm-key-gen` tool:

```
ipfs-swarm-key-gen > swarm.key
```

This command will create a `swarm.key` file and save it in the current directory. This allows you to create a private IPFS network where only nodes with the key can communicate with each other, significantly enhancing the network's security and privacy. **The generated content is as follows**. The generated file should overwrite the `src/lib/ipfs/swarm.key` file:

```
/key/swarm/psk/1.0.0/
/base16/
a884f23b1b210dbd5d93da695eca9c1b29658c3e199be870feb1e2991cc9306d
```

### Updating IPFS Configuration Files

Navigate to `src/lib/ipfs/afterInstall.ts` and find the `updateConfigFile` function:

```js
function updateConfigFile(ipfsPath: string): void {
  try {
    const configPath = path.join(ipfsPath, 'config');
    if (fs.existsSync(configPath)) {
      const config = JSON.parse(fs.readFileSync(configPath, 'utf8'));
      // Update the Bootstrap node list
      config.Bootstrap = ['modify to your node'];
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

// Main function
function main(): void {
  const ipfsPath = getIpfsPath();

  // Initialize IPFS if not already initialized
  if (!fs.existsSync(ipfsPath)) {
    initIpfs(ipfsPath);
  }

  // Create or update the swarm.key file
  const swarmKeyContent = 'modify to your swarm.key';
  createOrUpdateSwarmKey(ipfsPath, swarmKeyContent);

  // Update the IPFS configuration file
  updateConfigFile(ipfsPath);
}
```

Complete these steps to repackage the client version desired, making it ready for use in a private network.

## Custom UI

You can modify the [ipfs-webui](https://github.com/ipfs/ipfs-webui) project and place the packaged product into the `assets/webui` folder for rebuild.

## How to Contribute

Contributions of all forms are welcome, including but not limited to new feature development, bug fixes, and documentation updates. Please follow these steps to contribute:

1. Fork the repository and create your branch: `git checkout -b my-new-feature`
2. Commit your changes: `git commit -am 'Add some feature'`
3. Push to the branch: `git push origin my-new-feature`
4. Submit a Pull Request

## License

This project is licensed under the MIT License. Please ensure you have read and accepted its terms before using it.

## Support and Issues

If you encounter any issues during use, feel free to submit your questions through GitHub Issues.
