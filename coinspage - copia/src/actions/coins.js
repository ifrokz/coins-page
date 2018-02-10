
export const addCoin = (
    coin
) => ({
    type: 'ADD_COIN',
    coin: {
        ...coin
    }
});