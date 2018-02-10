import React, {Component} from 'react';
import axios from 'axios';

class TableRow extends Component {



    render = () => (
        <tr>
            <td>{this.props.data.timeText}</td>
            <td>{this.props.data.estimatedReward.toFixed(8)}</td>
            <td>exchangeRate</td>
            <td>revenueBTC</td>
            <td>{this.props.data.btc_usd_price}</td>
            <td>rewardDollar</td>
            <td>{parseFloat(this.props.data.electricityCost.toFixed(4))} $</td>
            <td>ProfitDollar</td>
        </tr>
    );
};

export default TableRow;