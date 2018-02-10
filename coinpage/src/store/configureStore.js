import { createStore, combineReducers } from 'redux';
import coinsReducer from '../reducers/coins';
import languageReducer from '../reducers/language';

export default () => {
    const store = createStore(
    combineReducers({
        coins: coinsReducer,
        language: languageReducer
    }), 
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );
    
    return store;
}
