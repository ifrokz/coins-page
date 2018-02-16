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
                    gtx1080: mainInfo('GTX 1080 Ti'),
                    gtx1070ti: mainInfo('GTX 1080 Ti'),
                    gtx1070: mainInfo('GTX 1080 Ti'),
                    gtx1060_3gb: mainInfo('GTX 1080 Ti'),
                    gtx1060_6gb: mainInfo('GTX 1080 Ti'),
                    gtx1050ti: mainInfo('GTX 1080 Ti'),
                    gtx1050: mainInfo('GTX 1080 Ti'),
                    gtx980ti: mainInfo('GTX 1080 Ti'),
                    gtx980: mainInfo('GTX 1080 Ti'),
                    gtx970: mainInfo('GTX 1080 Ti'),
                    gtx780: mainInfo('GTX 1080 Ti'),
                    gtx750ti: mainInfo('GTX 1080 Ti')
                },
                amd: {

                }
            },
            values: {
                hashrate: 0,
                power: 0
            }
        }
    }

    inputGTX1080ti = (e) => {
        const value = e.target.value;
        
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

    render = () => (   
        <div>
            <div>
                <h2>NVIDIA</h2>
                <p>
                    GTX 1080 Ti <input onChange={this.inputGTX1080ti}/>
                    <input value={this.state.gpu.nvidia.gtx1080ti.values.hashrate} readOnly={true}/> Sol/s
                    <input value={this.state.gpu.nvidia.gtx1080ti.values.power} readOnly={true}/> W
                </p>
                {
                    Object.keys(this.state.gpu.nvidia).map( (obejectKey, index) => {
                        var value = this.state.gpu.nvidia[obejectKey];
                        console.log(value);
                    })
                }
            </div>
        </div>
    );
};

export default InputGPU;