import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';

const Header = (props) => (
    <nav className="navbar navbar-inverse">
        <div className="container-fluid">
            <div className="navbar-header">
                <NavLink to='/' className="navbar-brand" activeClassName='active' >Mi web. LANG: {props.language}</NavLink>
            </div>
                <ul className="nav navbar-nav">
                <li >
                    <NavLink to="/" activeClassName="active" exact={true}>Home </NavLink>
                </li>
                <li>
                    <NavLink to="/coins-list" activeClassName='active' exact={true}>Coins </NavLink>
                </li>
                <li>
                    <NavLink to="/crypto-calculator" activeClassName='active' exact={true}>Crypto Calculator </NavLink>
                </li>
            </ul>
        </div>
    </nav>
);

const mapSatateToProps = (state, props) => {
    return {
        language: state.language
    };
};

export default connect(mapSatateToProps)(Header);
