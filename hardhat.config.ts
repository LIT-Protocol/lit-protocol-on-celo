import * as dotenv from 'dotenv';

import { HardhatUserConfig, task } from 'hardhat/config';
import '@nomiclabs/hardhat-etherscan';
import '@nomiclabs/hardhat-waffle';
import '@typechain/hardhat';
import 'hardhat-gas-reporter';
import 'solidity-coverage';

dotenv.config();

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task('accounts', 'Prints the list of accounts', async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

const config: HardhatUserConfig = {
  solidity: '0.8.4',
  networks: {
    celoTest: {
      url: 'https://alfajores-forno.celo-testnet.org',
      accounts: [
        '0xeaff7b02c38787b7152ce25b2904bf9eb55cd0b4edb02bbf3b71753e17066faf',
      ],
    },
    hardhat: {
      allowUnlimitedContractSize: true,
    },
    mainnet: {
      url: 'https://mainnet.infura.io/v3/1b4fd85ec53748feae973ece5bc436bd',
      accounts: [
        '0xeaff7b02c38787b7152ce25b2904bf9eb55cd0b4edb02bbf3b71753e17066faf',
      ],
    },
  },
  gasReporter: {
    enabled: process.env.REPORT_GAS !== undefined,
    currency: 'USD',
  },
  etherscan: {
    apiKey: process.env.ETHERSCAN_API_KEY,
  },
};

export default config;
