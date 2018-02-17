import React, { Component, isValidElement } from 'react';

import mainInfo from './data/mainInfo';

class InputGPU extends Component {
    constructor(props){
        super(props);


        this.state = {
            gpu: {
                nvidia: [
                    {...mainInfo('GTX 1080 Ti'),
                        inputFunction: this.inputGPU
                    },
                    mainInfo('GTX 1080'),
                    mainInfo('GTX 1070 Ti'),
                    mainInfo('GTX 1070'),
                    mainInfo('GTX 1060 3GB'),
                    mainInfo('GTX 1060 6GB'),
                    mainInfo('GTX 1050 Ti'),
                    mainInfo('GTX 1050'),
                    mainInfo('GTX 980 Ti'),
                    mainInfo('GTX 980'),
                    mainInfo('GTX 970'),
                    mainInfo('GTX 780 Ti'),
                    mainInfo('GTX 750 Ti')
                ],
                amd: {

                }
            },
            values: {
                algorithm: [
                    {
                        name: 'equihash',
                        hashrate: 0,
                        power: 0
                    }
                ]
            },
            filters: {
                gpu: {
                    type: 'nvidia'
                }
            }
        };
        console.log(this.state)
    }

    inputGPU = (e, name, type) => {
        console.log('El nombre para la funcion de imput es: ' + name)
        const value = e.target.value;

        if(this.isValidNumber(value)){
            if(type === 'nvidia'){
                let tempState = this.state;

                const id = tempState.gpu.nvidia.indexOf(tempState.gpu.nvidia.find( (e) => {
                         return e.name.toLowerCase() === name.toLowerCase();
                }));

                tempState.gpu.nvidia[id].amount = value;
                const values = tempState.gpu.nvidia[id].values;
                const newValues = {
                    hashrate: tempState.gpu.nvidia[id].algorithm.equihash.hashrate * tempState.gpu.nvidia[id].amount,
                    power: tempState.gpu.nvidia[id].algorithm.equihash.power * tempState.gpu.nvidia[id].amount
                }
                tempState.gpu.nvidia[id].values = { 
                    values,
                    ...newValues
                }
                console.log(tempState.gpu.nvidia[id].values)
                this.setState({tempState});

            }else if(type === 'amd'){
                let amd = this.state.gpu.amd;
            }
        }
    }

    
    isValidNumber(value){
        return value.match(/^\d{0,}((\.||\,)\d{0,2})?$/);   
    }

    createInputs(gpu) {
        return (
            <p key={gpu.name}>
                {gpu.name} <input key={gpu.name+' amount'} onChange={(e) => this.inputGPU(e, gpu.name, gpu.type)} key='a'/>
                <input key={gpu.name+' hashrate'} value={gpu.values.hashrate} readOnly={true}/> Sol/s
                <input key={gpu.name+' power'} value={gpu.values.power} readOnly={true}/> W
            </p>
        );
    }
    render = () => (   
        <div>
            <div>
                
       
                { 
                    (
                        this.state.filters.gpu.type === 'nvidia' &&

                        this.state.gpu.nvidia.map( (gpu) => {
                            return this.createInputs(gpu);
                        })
                    ) 
                    || 
                    (
                        this.state.filters.gpu.type === 'amd' && 

                        'amd'
                    )
                    
                }
            </div>
        </div>
    );
};

export default InputGPU;