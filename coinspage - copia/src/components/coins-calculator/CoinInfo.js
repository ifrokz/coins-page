import React from 'react';
import axios from 'axios';

class CoinInfo extends React.Component{
    state = {
        name: '',
        reward: 0,
        webpage: '',
        explorer: '',
        getDifficulty: '',
        getBlockCount: '',
        getNetHash: '',
        algorithm: '',
        netHash: 0,
        priceBTC: 0,
        priceDollar: 0
    }

    componentDidMount = () => {
        this.setState({...this.props.coinData});

        //axios.get(this.props.coinData.getDifficulty)
        axios.get(`http://localhost:3000/coins/calculator/fasdfle/gdsrgserger`)
        .then(res => {
            console.log(res.data);          
        })
        .catch(function (error) {
            console.log(error);
        });
       
        axios.get(`https://api.coinmarketcap.com/v1/ticker/${this.props.coinData.name}/`)
        .then(res => {
            this.setState({priceBTC: res.data[0].price_btc, priceDollar: res.data[0].price_usd})            
        });
    }

    setNetHash = (netHash) => {
        this.setState({netHash});
    }

    getImageSource = () => {
        return `../images/coins/${this.state.name}.png`;
    }

    render = () => {
        return (
            <div>
                <img src={this.getImageSource()}/>
                <h2>{this.state.name}</h2>
                <div>
                    <p>Algorithm: {this.state.algorithm}</p>
                    <p>Block reward: {this.state.reward}</p>
                    <p>Network hashrate: {`${this.state.netHash} H/s`}</p>
                    <p>Last block: {this.state.lastBlock}</p>
                    <p>Official Site: {this.state.webpage}</p>
                    <p>Explorer: {this.state.explorer}</p>
                    <p>Price: {this.state.priceBTC} / {this.state.priceDollar}</p>
                </div>
            </div>
        )
    }
}

export default CoinInfo;