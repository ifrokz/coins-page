

module.exports = class Data {    
    constructor() {
        this.state = {
            counter: 0
        }

        this.coins = require('../db/coins');
        
        this.InitCallCoinsLoop();
    };

    getCoinByName (name) {
        return this.coins.filter( (coin) => {
            return name.toLowerCase() === coin.data.name.toLowerCase() ;
        })[0].getData();
    };

    InitCallCoinsLoop(){
        this.coins.forEach(function (coin) {
            coin.loop();
        });
        setTimeout( () => {this.loop()},1000);
    };

    getAllCoinsData () {
        return this.coins.filter( (coin) => {
            return true;
        }).map((coin) => {
            return coin.getData();
        });
    };

    loop () {
        
        this.coins.forEach(function (coin) {
            coin.loop();
            //console.log(coin.getData());
        });

        setTimeout( () => {
            this.loop();
        }, 30*1000);
    };
};