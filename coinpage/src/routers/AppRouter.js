import React from 'react';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';

import Header from '../components/Header'

import CoinsListPage from '../components/coins/coinslistpage/CoinsListPage'
import CoinPage from '../components/coins/coinpage/CoinPage';

const AppRouter = () => (
    <BrowserRouter>
        <div>
            <Header />
            <Switch>
                <Route path="/" component={CoinsListPage} exact={true} />
                <Route path="/coins-list" component={CoinsListPage} exact={true}/>
                <Route path="/coins-list/:name" component={CoinPage}/>
            </Switch>
        </div>
    </BrowserRouter>
);


export default AppRouter;
