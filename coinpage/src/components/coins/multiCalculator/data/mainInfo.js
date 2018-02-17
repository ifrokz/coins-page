import gtx1080ti from './1080ti';

const createGPU = (name, func, type) => {
    return {
        name: name,
        amount: 0,
        type: type,
        algorithm: func(), 
        values: {
            hashrate: 0,
            power: 0
        }
    };
}

export default  (name) => {
    switch(name){
        case 'GTX 1080 Ti': 
            return createGPU(name, gtx1080ti, 'nvidia');
        default:
            console.log('No se ha encontrado la informacion para la ' + name);
            break;
    }
}