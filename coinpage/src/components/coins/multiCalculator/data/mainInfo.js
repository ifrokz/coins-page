import gtx1080ti from './1080ti';

const createGPU = (name, func) => {
    return {
        name: name,
        amount: 0,
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
            return createGPU(name, gtx1080ti);
        default:
            console.log('No se ha encontrado la informacion para la ' + name);
            break;
    }
}