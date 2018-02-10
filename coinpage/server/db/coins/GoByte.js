const axios = require('axios');

module.exports = class Coin {
    constructor ({data, urls}) {
        this.nethash = undefined;
        this.difficulty = undefined;
        this.blockcount = undefined;

        this.data = data;
        this.urls = urls;
        
        this.loop();
    };

    loop () {
        const that = this;
        axios.all([
                axios.get(this.urls.nethash),
                axios.get(this.urls.difficulty),
                axios.get(this.urls.blockcount)
            ])
            .then(axios.spread(function (nethash, difficulty, blockcount) {
                that.nethash = nethash.data;
                that.difficulty = difficulty.data;
                that.blockcount = blockcount.data;
            }));
    };

    getData () {
        return {
            data: this.data,
            mining: {
                nethash: this.nethash,
                difficulty: this.difficulty,
                blockcount: this.blockcount
            }
        };
    };
};