import React from 'react';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';

import Header from '../components/Header'

import HomePage from '../components/home/HomePage';
import CoinsListPage from '../components/coins/coinslistpage/CoinsListPage'
import CoinPage from '../components/coins/coinpage/CoinPage';
import CalcPage from '../components/coins/multiCalculator/CalcPage';

const AppRouter = () => (
    <BrowserRouter>
        <div>
            <Header />
            <Switch>
                <Route path="/" component={HomePage} exact={true} />
                <Route path="/coins-list" component={CoinsListPage} exact={true}/>
                <Route path="/coins-list/:name" component={CoinPage}/>
                <Route path="/crypto-calculator" component={CalcPage}/>
            </Switch>
        </div>
    </BrowserRouter>
);


export default AppRouter;
