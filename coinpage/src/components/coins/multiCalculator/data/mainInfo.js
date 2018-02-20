import gtx1080ti from './1080ti';
import gtx1080 from './1080';

const createGPU = (name, func, type) => {
    return {
        name: name,
        amount: 0,
        type: type,
        algorithm: func(), 
    };
}

export default  (name) => {
    switch(name){
        case 'GTX 1080 Ti': 
            return createGPU(name, gtx1080ti, 'nvidia');
        case 'GTX 1080': 
        case 'GTX 1070 Ti':
        case 'GTX 1070':
        case 'GTX 1060 3GB':
        case 'GTX 1060 6GB':
        case 'GTX 1050':
        case 'GTX 1050 Ti':
        case 'GTX 980':
        case 'GTX 980 Ti':
        case 'GTX 970':
        case 'GTX 780 Ti':
        case 'GTX 750 Ti':
            return createGPU(name, gtx1080, 'nvidia');
        default:
            console.log('No se ha encontrado la informacion para la ' + name);
            break;
    }
}