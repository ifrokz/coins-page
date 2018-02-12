import React, {Component} from 'react';
import axios from 'axios';

class TableRow extends Component {
    // constructor(props){
    //     super(props);

    //     console.log(props.data.exgangeRate)
    // }


    render = () => (
        <tr>
            <td>{this.props.data.timeText}</td>
            <td>{this.props.data.estimatedReward.toFixed(8)}</td>
            <td>{this.props.data.exgangeRate}</td>
            <td>{(this.props.data.exgangeRate * this.props.data.estimatedReward).toFixed(6)}</td>
            <td>{this.props.data.btc_usd_price}</td>
            <td>{((this.props.data.exgangeRate * this.props.data.estimatedReward) * this.props.data.btc_usd_price).toFixed(6)} $</td>
            <td>{parseFloat(this.props.data.electricityCost.toFixed(4))} $</td>
            <td>{(((this.props.data.exgangeRate * this.props.data.estimatedReward) * this.props.data.btc_usd_price) - this.props.data.electricityCost).toFixed(6)} $</td>
        </tr>
    );
};

export default TableRow;