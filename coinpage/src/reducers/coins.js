const defaultState = [];

export default (state = defaultState, action) => {
    switch(action.type) {
        case 'ADD_COIN':
            return [
                ...state,
                action.coin
            ]
        default: 
            return state;
    }
}