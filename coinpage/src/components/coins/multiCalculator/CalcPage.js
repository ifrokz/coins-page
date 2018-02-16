import React from 'react';
import { connect } from 'react-redux';

import InputGPU from './InputGPU'

class CalcPage extends React.Component {
    render = () => (
        <div>
            <InputGPU/>
        </div>
    );
};

const mapStateToProps = (state, props) => {
    return {
        coins: state.coins
    };
};

export default connect(mapStateToProps)(CalcPage);

