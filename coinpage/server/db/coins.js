const GoByte = require('./coins/GoByte');
const CrowdCoin = GoByte;

module.exports = [
    new GoByte({
        data: {
            name: 'GoByte', 
            algorithm: 'NeoScrypt',
            blockreward: 7.5,
            blocktime: 150,
            blockexplorer: 'http://explorer.gobyte.network:5001'
        },
        urls: {
            nethash: 'http://explorer.gobyte.network:5001/api/getnetworkhashps',
            difficulty: 'http://explorer.gobyte.network:5001/api/getdifficulty',
            blockcount: 'http://explorer.gobyte.network:5001/api/getblockcount', 
            exchangeRate: 'https://api.coinmarketcap.com/v1/ticker/gobyte/'
        }
    }),
    new CrowdCoin({
        data: {
            name: 'CrowdCoin', 
            algorithm: 'NeoScrypt',
            blockreward: 10,
            blocktime: 120,
            blockexplorer: 'http://explorer.cryptopros.us/'
        },
        urls: {
            nethash: 'http://explorer.cryptopros.us/api/getnetworkhashps',
            difficulty: 'http://explorer.cryptopros.us/api/getdifficulty',
            blockcount: 'http://explorer.cryptopros.us/api/getblockcount', 
            exchangeRate: 'https://api.coinmarketcap.com/v1/ticker/crowdcoin/'
        }
    })
];