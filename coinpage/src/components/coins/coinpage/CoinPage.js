import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

import CoinInputs from './CoinInputs';
import CoinResult from './CoinResult';

import RewardCalculator from '../../../utils/RewardsCalculator';

class CoinPage extends Component {
    
    state = {
        submit: false,
        data: {
            name: undefined, 
            algorithm: undefined,
            blockreward: undefined,
            blocktime: undefined,
            blockexplorer: undefined
        },
        mining: {
            nethash: undefined,
            difficulty: undefined,
            blockcount: undefined,
            exchangeRate: undefined
        },
        inputValues: {

        }
    };
  
    componentWillMount () {
        document.title = `${this.props.match.params.name} profit calculator`;
        
        const that = this;
        axios.get(`http://localhost/api/mining/coin/${this.props.match.params.name}`)
            .then(function (response) {
                that.setState({...response.data});
                console.log(that.state.mining)
            });
    };

    componentDidMount(){
        
    }

    getRewards = () => {
        
        return RewardCalculator({
            hashrate: this.state.inputValues.hashrate,
            nethash: this.state.mining.nethash,
            blockreward: this.state.data.blockreward,
            blocktime: this.state.data.blocktime,
            poolfee: this.state.inputValues.poolfee
            
        });
    };

    createHashString = () => {
        const str = this.state.data.algorithm ? this.state.data.algorithm.toLowerCase() : undefined;

        switch(str) {
            case 'neoscrypt':
                return 'Kh/s';
                break;
            default: 
                return 'H/s';
                break;
        }
    }
    
    onSubmit = (values) => {
        this.setState({
            inputValues: {
                hashrate: values.hashrate,
                electricityCost: values.electricityCost,
                poolfee: values.poolFee,
                powerConsumption: values.powerConsumption
            }, 
            submit: true
        });
    };

    render = () => (
        <div>
            <img src={`/images/coins/icon/${this.props.match.params.name.toLowerCase()}.png`}/>
            <p>Nombre: {this.state.data.name}</p>
            <p >Difficultad: {this.state.mining.difficulty}</p>
            <p>Recompensa Bloque: {this.state.data.blockreward}</p>
            <p>Tiempo entre bloques: {
                Math.floor(this.state.data.blocktime / 60) + ' m ' + (this.state.data.blocktime % 60) + ' s.'}
            </p>
            <p>Algoritmo: {this.state.data.algorithm}</p>
            <p>NetHash: {this.state.mining.nethash}</p>
            <p><a href={this.state.data.blockexplorer} target="_blank">Block Explorer</a></p>
            <CoinInputs
                algorithm={this.state.data.algorithm}
                inputValues={this.state.inputValues}
                onSubmit={this.onSubmit}
                gethashstring={this.createHashString}
            />
            {this.state.submit && <CoinResult inputValues={this.state.inputValues} rewards={this.getRewards()} exchangeRate={this.state.mining.exchangeRate} />}
        </div>
    );
};

const mapStateToProps = (state, props) => {
    return {
        
    };
};

export default connect(mapStateToProps)(CoinPage);
