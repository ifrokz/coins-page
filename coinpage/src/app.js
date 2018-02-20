import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './routers/AppRouter';
import { Provider } from 'react-redux';

import 'normalize.css/normalize.css';

import configureStore from './store/configureStore';

import { AddCoin } from './actions/coins';
import { ChangeLanguage } from './actions/language';
import CoinsDataTest from '../test/data/coins';

const store = configureStore();

CoinsDataTest.map( (coin) => {
    store.dispatch(AddCoin(coin))
});
console.log(store.getState())
store.dispatch(ChangeLanguage('EN'));
console.log(store.getState());

const jsx = (
    <Provider store= {store}>
        <AppRouter />
    </Provider>
);

ReactDOM.render(jsx, document.getElementById('container'));
