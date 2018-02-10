import React, { Component } from 'react';


class CoinInputs extends Component {
    constructor (props) {
        super(props);

        console.log();
    }

    state = {
        hashrate: 1000,
        hashString: this.props.hashstring,
        electricityCost: 0.1,
        poolFee: 0.5,
        powerConsumption: 140,
        error: ''
    }

    inputHashrate = (e) => {
        const value = e.target.value;

        if (value.match(/^\d{0,}$/)) {
          this.setState(() => ({ hashrate: value }));
        };
    };

    inputElectricityCost = (e) => {
        const value = e.target.value;
        
        if(value.match(/^\d{0,}((\.|\,)\d{0,2})?$/)){
            this.setState(()=>({electricityCost: value}));
        };
    };

    inputPoolFee = (e) => {
        const value = e.target.value;
        
        if(value.match(/^\d{0,}((\.|\,)\d{0,2})?$/)){
            this.setState({poolFee: value});
        };
    };

    inputPowerComsuption = (e) => {
        const value = e.target.value;

        if (value.match(/^\d{0,}$/)) {
          this.setState(() => ({ powerConsumption: value }));
        };
    };

    onSubmit = (e) => { 
        e.preventDefault();
        if(!this.state.hashrate || !this.state.electricityCost || !this.state.poolFee || !this.state.powerConsumption) {
            this.setState({error: 'Por favor, rellena todos los campos.'})
        }else {
            this.setState({error: ''});
            this.props.onSubmit({
                ...this.state
            });
        };
    };

    render = () => (
        <div>
            <form onSubmit={this.onSubmit}>
                <p>
                    Poder de hasheo 
                    <input 
                        type='text'
                        placeholder='ex: 1000'
                        value={this.state.hashrate}
                        onChange={this.inputHashrate}
                    /> {this.props.gethashstring(this.props.algorithm)} 
                </p>
                <p>
                    Coste electricidad
                    <input
                        type='text'
                        placeholder='Ex: "0.1"'
                        value={this.state.electricityCost}
                        onChange={this.inputElectricityCost}
                    /> $ Kw/h
                </p>
                <p>
                    Consumo electrico
                    <input  
                        type='text'
                        placeholder='ex: 140'
                        value={this.state.powerConsumption}
                        onChange={this.inputPowerComsuption}
                    /> W
                </p>
                <p>
                    Comision de la pool
                    <input  
                        type='text'
                        placeholder='ex: 0.5'
                        value={this.state.poolFee}
                        onChange={this.inputPoolFee}
                    /> %
                </p>
                
                { 
                    this.state.error &&
                        <div className='alert alert-danger' role='alert'>
                            <span className='glyphicon glyphicon-exclamation-sign' aria-hidden="true"> </span> {this.state.error}
                        </div>
                }
                <button>Enviar</button>
            </form>
        </div>
    );
};

export default CoinInputs;