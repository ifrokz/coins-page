
 module.exports = class coinsData  {
    constructor() {
        this.data = {
            gobyte: {
                diff: 'http://explorer.gobyte.network:5001/api/getdifficulty',
                nethash: 'http://explorer.gobyte.network:5001/api/getnetworkhashps',
                blockcount: 'http://explorer.gobyte.network:5001/api/getblockcount'
            },
            rapture: {
                diff: 'diff',
                nethash: 'nethash',
                blockcount: 'blockcount'
            }
        }
    }
   
    
}