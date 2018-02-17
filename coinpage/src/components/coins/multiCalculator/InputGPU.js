import React, { Component, isValidElement } from 'react';

import mainInfo from './data/mainInfo';

class InputGPU extends Component {
    constructor(props){
        super(props);


        this.state = {
            gpu: {
                nvidia: {
                    gtx1080ti: {...mainInfo('GTX 1080 Ti'),
                        inputFunction: this.inputGTX1080ti
                    },
                    gtx1080: mainInfo('GTX 1080'),
                    gtx1070ti: mainInfo('GTX 1070 Ti'),
                    gtx1070: mainInfo('GTX 1070'),
                    gtx1060_3gb: mainInfo('GTX 1060 3GB'),
                    gtx1060_6gb: mainInfo('GTX 1060 6GB'),
                    gtx1050ti: mainInfo('GTX 1050 Ti'),
                    gtx1050: mainInfo('GTX 1050'),
                    gtx980ti: mainInfo('GTX 980 Ti'),
                    gtx980: mainInfo('GTX 980'),
                    gtx970: mainInfo('GTX 970'),
                    gtx780: mainInfo('GTX 780 Ti'),
                    gtx750ti: mainInfo('GTX 750 Ti')
                },
                amd: {

                }
            },
            values: {
                hashrate: 0,
                power: 0
            },
            filters: {
                gpu: {
                    type: 'nvidia'
                }
            }
        };
    }

    inputGTX1080ti = (e, name) => {
        console.log('El nombre para la funcion de imput es: ' + name)
        const value = e.target.value;
        console.log(e.target.key)
        if(this.isValidNumber(value)){
            let gpu = this.state.gpu;
            gpu.nvidia.gtx1080ti.amount = value;

            gpu.nvidia.gtx1080ti.values.hashrate = value * gpu.nvidia.gtx1080ti.algorithm.equihash.hashrate;
            gpu.nvidia.gtx1080ti.values.power = value * gpu.nvidia.gtx1080ti.algorithm.equihash.power;
            this.setState({gpu});
        }
    }

    inputGPU = (e, name) => {
        console.log('El nombre para la funcion de imput es: ' + name)
        const value = e.target.value;
        console.log(e.target.key)
        if(this.isValidNumber(value)){
            let gpu = this.state.gpu;
            gpu.nvidia.gtx1080ti.amount = value;

            gpu.nvidia.gtx1080ti.values.hashrate = value * gpu.nvidia.gtx1080ti.algorithm.equihash.hashrate;
            gpu.nvidia.gtx1080ti.values.power = value * gpu.nvidia.gtx1080ti.algorithm.equihash.power;
            this.setState({gpu});
        }
    }
    
    inputNvidiaGPU = (e) => {
        const value = e.target.value;

        if(this.isValidNumber(value)){
            let gpu = this.state.gpu.nvidia;
        }
    }
    
    isValidNumber(value){
        return value.match(/^\d{0,}((\.||\,)\d{0,2})?$/);   
    }

    createInputs({name, inputFunction}) {
        console.log('Se ha creado el input para ' + name)
        return (
            <p key={name}>
                {name} <input key={name+' amount'} onChange={(e) => this.inputGPU(e, name)} key='a'/>
                <input key={name+' hashrate'} value={this.state.gpu.nvidia.gtx1080ti.values.hashrate} readOnly={true}/> Sol/s
                <input key={name+' power'} value={this.state.gpu.nvidia.gtx1080ti.values.power} readOnly={true}/> W
            </p>
        );
    }
    render = () => (   
        <div>
            <div>
                <h2>NVIDIA</h2>
       
                { 
                    (
                        this.state.filters.gpu.type === 'nvidia' &&
                        Object.keys(this.state.gpu.nvidia).map( (obejectKey, index) => {
                            
                            return this.createInputs({...this.state.gpu.nvidia[obejectKey]});
                        })
                    ) 
                    || 
                    (
                        this.state.filters.gpu.type === 'amd' && 
                        'hola'
                    )
                    
                }
            </div>
        </div>
    );
};

export default InputGPU;