export default (coins, name) => {
    return coins.filter( (coin) => {
        const sameName = coin.name.toLowerCase() === name.toLowerCase();
        return sameName;
    })[0]; // devuelve la primera moneda que coincida con el nombre pasado por parametro.
};