


export default ({hashrate, nethash, blockreward, blocktime, poolfee}) => {
    let minute = (hashrate/nethash)*blockreward*(1/blocktime);
    minute = minute - (minute * (poolfee/100));
    const hour = minute * 60;
    const day = hour * 24;
    const week = day * 7;
    const month = day * 30;
    const year = day * 365;
    
    return {
        minute, 
        hour, 
        day,
        week,
        month, 
        year
    }
}