export const AddCoin = (coin) => {
    return {
        type: 'ADD_COIN',
        coin: {
            ...coin
        }
    }
}
