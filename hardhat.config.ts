import * as dotenv from 'dotenv';

import { HardhatUserConfig } from 'hardhat/config';
import '@nomiclabs/hardhat-etherscan';
import '@nomiclabs/hardhat-waffle';
import '@typechain/hardhat';
import 'hardhat-gas-reporter';
import 'solidity-coverage';
import 'hardhat-deploy';
import '@nomiclabs/hardhat-ethers';

dotenv.config();

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

const config: HardhatUserConfig = {
  solidity: '0.8.4',
  defaultNetwork: 'celoTest',
  namedAccounts: {
    deployer: 0,
  },
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
