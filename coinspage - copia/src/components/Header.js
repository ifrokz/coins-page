import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
    <header>
        <h1>Coins Header</h1>
        <NavLink activeClassName='is-active' to='/' exact={true}>Home<p/></NavLink>
        <NavLink activeClassName='is-active' to='/coins-calculator'>Coins<p/></NavLink>
        <NavLink activeClassName='is-active' to='/crypto-calculator'>Crypto Calculator<p/></NavLink>
        <NavLink activeClassName='is-active' to='/master-node-roi-calculator'>Master Nodes Calculator<p/></NavLink>
        <NavLink activeClassName='is-active' to='/help'>Help<p/></NavLink> 
    </header>
);

export default Header;