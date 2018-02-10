import React, { Component } from "react";
import { connect } from "react-redux";

import CoinsListSelector from '../../../selectors/coins-list';
import { Link } from "react-router-dom";

class CoinsListPage extends Component {
    render = (props) => (
        <div>
            <h2>Lista de monedas disponibles.</h2>
            {}
            {
        this.props.coins.map( (coin) => {
            return (
                <Link  key={coin.name} to={`/coins-list/${coin.name}`}>
                    <div>
                        <p>Name: {coin.name}</p>
                    </div>
                </Link>
            )
        })
            }
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        coins: CoinsListSelector(state.coins)
    }
};

export default connect(mapStateToProps)(CoinsListPage);