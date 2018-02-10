import NeoScrypt from '../../algos/NeoScrypt';
import data from '../../data/coinsData'
const testData = {
    hashrate: 1000, 
    nethash: 36240546, 
    blockreward: 7.5,
    blocktime: 2.5,
    poolfee: 0.5
}

test('should return the neoscrypt rewards correctly', () => {
    console.log(
        NeoScrypt({...testData})
    )
});