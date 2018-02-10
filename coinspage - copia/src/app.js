import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './routers/AppRouter';
import { Provider } from 'react-redux';

import 'normalize.css/normalize.css';

import configureStore from './store/configureStore';


import { addCoin } from './actions/coins'
import coinData from './data/coinsData';
const store = configureStore();

const jsx = (
    <Provider store= {store}>
        <AppRouter />
    </Provider>
);

store.dispatch(addCoin(coinData[0]));
console.log(store.getState());

ReactDOM.render(jsx, document.getElementById('app'));
