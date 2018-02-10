const axios = require('axios');

module.exports = class coinsGet {
    GetDiff (url)  {
        return axios.get(url);
    }
      
    GetNethash  (url)  {
        return axios.get(url);
    }
    
    GetBlockCount  (url)  {
        return axios.get(url);
    }
    
    GetPrice  (url)  {
        return axios.get(url);
    }
}