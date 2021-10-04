require("dotenv").config();

require("@nomiclabs/hardhat-etherscan");
require("@nomiclabs/hardhat-waffle");
require("hardhat-gas-reporter");

require("@metis.io/hardhat-mvm");

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {

  solidity: {
    version: "0.7.6",
  },

  ovm: {
    solcVersion: '0.7.6', // Currently, we only support 0.5.16, 0.6.12, and 0.7.6 of the Solidity compiler
    optimizer: true,
    runs: 20 
  },

  networks: {
    hardhat: {
      initialBaseFeePerGas: 0, // workaround from https://github.com/sc-forks/solidity-coverage/issues/652#issuecomment-896330136 . Remove when that issue is closed.
    },
    ropsten: {
      url: process.env.ROPSTEN_URL || "",
      accounts:
        process.env.PRIVATE_KEY !== undefined ? [process.env.PRIVATE_KEY] : [],
    },
    metis: {
      url: "https://rocketfuel.metis.io/?owner=435",
      accounts: ["b773c1f5b19f93a2df58ef2773837fa6d8663d85f39dee40cce03231f201470f"], 
      // Note that accounts is an array
      gasPrice: 15000000, // 0.015 Gwei
      ovm: true
    },
  },

  gasReporter: {
    enabled: process.env.REPORT_GAS !== undefined,
    currency: "USD",
  },

  etherscan: {
    apiKey: process.env.ETHERSCAN_API_KEY,
  },
};