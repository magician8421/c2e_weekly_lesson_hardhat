require("@nomicfoundation/hardhat-toolbox");
require("@nomicfoundation/hardhat-verify");
require("hardhat-gas-reporter");
require("@openzeppelin/hardhat-upgrades");
require("dotenv").config();

const { ProxyAgent, setGlobalDispatcher } = require("undici");
const proxyAgent = new ProxyAgent("http://127.0.0.1:7890");
setGlobalDispatcher(proxyAgent);

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.26",
  etherscan: {
    // Your API key for Etherscan
    // Obtain one at https://etherscan.io/
    apiKey: "FRQW8BE23PD7Y7RAH3EM9P3PIPXE3KRJTG",
  },
  gasReporter: {
    enabled: true, //是否打开gas reporter
  },
  networks: {
    //localhost
    sepolia: {
      url: "https://eth-sepolia.g.alchemy.com/v2/I3eHFhWUQaZueOZP5BPt3jdFLebK9aEe",
      accounts: [process.env.PRIVATE_KEY],
    },
    mainnet: {
      url: "https://eth-mainnet.g.alchemy.com/v2/I3eHFhWUQaZueOZP5BPt3jdFLebK9aEe",
      accounts: [process.env.PRIVATE_KEY],
    },

    hardhat: {
      // gas: "auto",
      // mining: {
      //   auto: false,
      //   interval: 0,
      // },
    },
  },
};
