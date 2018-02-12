const axios = require('axios');

module.exports = class Coin {
    constructor ({data, urls}) {
        this.nethash = undefined;
        this.difficulty = undefined;
        this.blockcount = undefined;
        this.exchangeRate = undefined;

        this.data = data;
        this.urls = urls;
        
        this.loop();
    };

    loop () {
        const that = this;
        axios.all([
                axios.get(this.urls.nethash),
                axios.get(this.urls.difficulty),
                axios.get(this.urls.blockcount),
                axios.get(this.urls.exchangeRate)
            ])
            .then(axios.spread(function (nethash, difficulty, blockcount, exchangeRate) {
                that.nethash = nethash.data;
                that.difficulty = difficulty.data;
                that.blockcount = blockcount.data;
                that.exchangeRate = exchangeRate.data[0].price_btc;
            }));
    };

    getData () {
        return {
            data: this.data,
            mining: {
                nethash: this.nethash,
                difficulty: this.difficulty,
                blockcount: this.blockcount,
                exchangeRate: this.exchangeRate
            }
        };
    };
};