const Coin = require('./coins/GoByte');

module.exports = [
    new Coin({
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
        }
    })
];