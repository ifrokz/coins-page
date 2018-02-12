export default ({hashrate, nethash, blockreward, blocktime, poolfee}) => {

    let hour = (((hashrate*1000)/nethash) * blockreward) * 60 / (blocktime/60);
    hour = hour - ( ( hour * poolfee ) / 100 );

    const day = hour * 24;
    const week = day * 7;
    const month = day * 30;
    const year = day * 365;
    
    return {
        hour, 
        day,
        week,
        month, 
        year
    }
}