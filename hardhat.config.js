// https://eth-ropsten.alchemyapi.io/v2/2D_6oW6YMk6pN7NQDVO0JCV7OcLiNLIA

require('@nomiclabs/hardhat-waffle')

module.exports = {
  solidity: '0.8.0',
  networks: {
    ropsten: {
      url: 'https://eth-ropsten.alchemyapi.io/v2/2D_6oW6YMk6pN7NQDVO0JCV7OcLiNLIA',
      accounts: [ 'd8493a3ea6991213ce0c33f0d7847a28a62676c8268397315a1ff4b58c386184' ]
    }
  }
}