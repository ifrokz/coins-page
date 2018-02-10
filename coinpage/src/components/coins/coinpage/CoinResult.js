import React, {Component} from 'react';
import axios from 'axios';

import RewardCalculator from '../../../utils/RewardsCalculator';
import ResultsTable from './ResultsTable';


class CoinResult extends Component {
    state = {
        btc_usd_price: null
    }

    createPropsResultsTable = ({timeText, estimatedReward, electricityCost}) => {
        return {
            timeText: timeText, 
            estimatedReward: estimatedReward,
            electricityCost: electricityCost,
            btc_usd_price: this.state.btc_usd_price
        };
    };
    
    componentWillMount = () => {
        const that = this;
        axios.get('https://api.coinmarketcap.com/v1/ticker/bitcoin/')
          .then(function (response) {
            that.setState({btc_usd_price: response.data[0].price_usd});
          })
          .catch(function (error) {
            console.log(error);
          });
    };

    render = () => (
        <div>
        ___________________________________
        <table>
            <thead>
                <tr>
                    <th>Para</th>
                    <th>Recompensa estimada</th>
                    <th>Ratio de intercambio</th>
                    <th>Recompensa en BTC</th>
                    <th>Precio BTC</th>
                    <th>Recompensa en $</th>
                    <th>Coste de electricidad</th>
                    <th>Beneficio</th>
                </tr>
            </thead>
            <tbody>
                {   
                    <ResultsTable 
                        data={
                            this.createPropsResultsTable({
                                timeText: 'Hora',
                                estimatedReward: this.props.rewards.hour,
                                electricityCost: this.props.inputValues.electricityCost * (this.props.inputValues.powerConsumption/1000)
                            })
                        }
                    />
                }
                {   
                    <ResultsTable 
                        data={
                            this.createPropsResultsTable({
                                timeText: 'Dia',
                                estimatedReward: this.props.rewards.day,
                                electricityCost: this.props.inputValues.electricityCost * 24 * (this.props.inputValues.powerConsumption/1000)
                            })
                        }
                    />
                }                
                {   
                    <ResultsTable 
                        data={
                            this.createPropsResultsTable({
                                timeText: 'Semana',
                                estimatedReward: this.props.rewards.week,
                                electricityCost: this.props.inputValues.electricityCost * (24 * 7 ) * (this.props.inputValues.powerConsumption/1000)
                            })
                        }
                    />
                }                
                {   
                    <ResultsTable 
                        data={
                            this.createPropsResultsTable({
                                timeText: 'Mes',
                                estimatedReward: this.props.rewards.month,
                                electricityCost: this.props.inputValues.electricityCost * ( 24 * 30 ) * (this.props.inputValues.powerConsumption/1000)
                            })
                        }
                    />
                }
                {   
                    <ResultsTable 
                        data={
                            this.createPropsResultsTable({
                                timeText: 'Año',
                                estimatedReward: this.props.rewards.year,
                                electricityCost: this.props.inputValues.electricityCost * ( 24 * 365 ) * (this.props.inputValues.powerConsumption/1000)
                            })
                        }
                    />
                }
            </tbody>
        </table>
            {
               JSON.stringify(this.props.rewards) 
            }
        </div>
    );
};

export default CoinResult;