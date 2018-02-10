import { createStore, combineReducers } from 'redux';
import coinsReducer from '../reducers/coins';
import algosReducer from '../reducers/algos';

export default () => {
    const store = createStore(
    combineReducers({
        coins: coinsReducer,
        algos: algosReducer
    }), 
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );
    
    return store;
}
