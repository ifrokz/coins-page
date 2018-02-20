import React, { Component, isValidElement } from 'react';

import mainInfo from './data/mainInfo';
import stateValues from './data/stateValues';

class InputGPU extends Component {
    constructor(props){
        super(props);


        this.state = {
            gpu: [
                mainInfo('GTX 1080 Ti'),
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
            values: {
                algorithm: {...stateValues()}
            },
            filters: {
                gpu: {
                    type: 'nvidia'
                }
            }
        };
        console.log(this.state)
    }

    updateStateValues = (tempState) => {
        
        tempState.values.algorithm = {...stateValues()};

        tempState.gpu.forEach(element => {
            const amount = element.amount;

            Object.keys(element.algorithm).map(function(objectKey, index) {
                tempState.values.algorithm[objectKey].hashrate += element.algorithm[objectKey].hashrate * amount;
                tempState.values.algorithm[objectKey].power += element.algorithm[objectKey].power * amount;
            });
        });

        return tempState;
    }

    inputGPU = (e, name, type) => {
        console.log('El nombre para la funcion de imput es: ' + name);
        const value = e.target.value;

        if(this.isValidNumber(value)){

            let tempState = this.state;

            const id = tempState.gpu.indexOf(tempState.gpu.find( (e) => {
                return e.name.toLowerCase() === name.toLowerCase();
            }));

            tempState.gpu[id].amount = value;

            tempState.values = {
                ...this.updateStateValues(tempState).values
            };
            
            this.setState({tempState});
        };
    };

    
    isValidNumber(value){
        return value.match(/^\d{0,}((\.||\,)\d{0,2})?$/);   
    };

    createInputs(gpu) {
        return (
            <p key={gpu.name}>
                {gpu.name} <input key={gpu.name+' amount'} value={gpu.amount} onChange={(e) => this.inputGPU(e, gpu.name, gpu.type)} />
            </p>
        );
    };
    
    createAlgoOutputs = () => {
        const algos = this.state.values.algorithm;
        return Object.keys(algos).map(function(objectKey, index) {
            return (
                <div key={algos[objectKey].name}>
                    {algos[objectKey].name}:
                    <input value={algos[objectKey].hashrate}/>
                    <input value={algos[objectKey].power}/>
                </div>
            );
        });
    };

    render = () => (   
        <div>
            <div>
                { 
                    this.state.gpu.filter((gpu) => {
                        return this.state.filters.gpu.type.toLowerCase() === gpu.type.toLowerCase();
                    }).map( (gpu) => {
                        return this.createInputs(gpu);
                    })
                }
                {'Algos:'}
                {
                   this.createAlgoOutputs() 
                }
            </div>
        </div>
    );
};

export default InputGPU;