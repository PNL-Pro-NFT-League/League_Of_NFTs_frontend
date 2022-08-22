require( "@nomiclabs/hardhat-waffle" );
require( "@nomiclabs/hardhat-etherscan" );
require( 'dotenv' ).config();

const ALCHEMY_API_KEY = 'vNW5xpCAyF-MmnKHZtgfRBuYTiTKuv1J';
const MUMBAI_URL = '471e19c170100aefcaa1721a76ef86682752c8343c9373caebbc790482cc0787';

module.exports = {
  networks: {
    mumbai: {
      url: `https://polygon-mumbai.g.alchemy.com/v2/${ ALCHEMY_API_KEY }`,
      accounts: [ MUMBAI_URL ],
    },
  },
  solidity: {
    version: "0.8.0",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  },
  paths: {
    artifacts: '../src/artifacts',
  },
  etherscan: {
    apiKey: "GISP565ZCF7INGHJSJS76CSHH6YTCEKATV"
  }

}