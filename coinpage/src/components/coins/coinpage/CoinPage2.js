import React, { Component } from 'react';
import { connect } from 'react-redux';

import CoinSelector from '../../../selectors/coin-page';
import CoinInputs from './CoinInputs';
import CoinResult from './CoinResult';

import RewardCalculator from '../../../utils/RewardsCalculator';

class CoinPage extends Component {

    state = {
        submit: false,
        inputValues: {

        }
    }
    
    getRewards = () => {
        return RewardCalculator({
            hashrate: this.state.inputValues.hashrate,
            nethash: this.props.coin.netHash,
            blockreward: this.props.coin.blockReward,
            blocktime: this.props.coin.blocktime,
            poolfee: this.state.inputValues.poolFee
            
        });
    }

    
    onSubmit = (values) => {
        this.setState({
            inputValues: {
                hashrate: values.hashrate,
                electricityCost: values.electricityCost,
                poolFee: values.poolFee,
                powerConsumption: values.powerConsumption
            }, 
            submit: true
        });
    }

    render = () => (
        <div>
            <p>Nombre: {this.props.coin.name}</p>
            <p >Difficultad: {this.props.coin.difficulty}</p>
            <p>Recompensa Bloque: {this.props.coin.blockReward}</p>
            <p>Tiempo entre bloques: {
                Math.floor(this.props.coin.blocktime / 60) + ' m ' + (this.props.coin.blocktime % 60) + ' s.'}
            </p>
            <p>Algoritmo: {this.props.coin.algorithm}</p>
            <p>NetHash: {this.props.coin.netHash}</p>
            
            <CoinInputs 
                algorith={this.props.coin.algorithm}
                inputValues={this.state.inputValues}
                onSubmit={this.onSubmit}
            />
            {this.state.submit && <CoinResult inputValues={this.state.inputValues} rewards={this.getRewards()}/>}
        </div>
    );
};

const mapStateToProps = (state, props) => {
    return {
        coin: CoinSelector(state.coins, props.match.params.name)
    };
};

export default connect(mapStateToProps)(CoinPage);
