import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import Header from '../components/Header';
import Footer from '../components/Footer';

import HomePage from '../components/home-page/HomePage';
import NotFoundPage from '../components/NotFoundPage';

import CoinInfoPage from '../components/coins-calculator/CoinInfoPage';
import CalculatorPage from '../components/crypto-calculator/CalculatorPage';


const AppRouter = () => (
    <BrowserRouter>
        <div>
            <Header/>
            <Switch>
                <Route path="/" component={HomePage} exact={true}/>
                <Route path="/coins-calculator/" component={CoinInfoPage} exact={true}/>
                <Route path="/coins-calculator/:id" component={CoinInfoPage} exact={true}/>
                <Route path='/crypto-calculator/' component={CalculatorPage} exact={true} />
                <Route component={NotFoundPage}/>
            </Switch>
            <Footer/>
        </div>
    </BrowserRouter>
)
export default AppRouter;