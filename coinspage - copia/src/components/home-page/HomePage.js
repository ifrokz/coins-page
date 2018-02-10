import React from 'react';
import {Link} from 'react-router-dom';

import FeatureInfo from './FeatureInfo';

class HomePage extends React.Component {
    pages = [{
        to: '/coins-calculator',
        title: 'Coins',
        text: 'lore ipsum'
    },{
        to: '/crypto-calculator',
        title: 'Crypto Calculator',
        text: 'lore ipsum'
    },{
        to: '/master-node-roi-calculator',
        title: 'Master Node Calculator',
        text: 'lore ipsum'
    }];

    render = () => (
        <div>
            <h1>Pagina principal.</h1>

            <h2>Paginas de utilidades.</h2>

            {   
                this.pages.map( (info) => <FeatureInfo key={info.to} info={info}/>)
            }
            
        </div>
    );
};

export default HomePage;