import React from 'react';
import {Link} from 'react-router-dom';

const FeatureInfo = (props) => (
    <div>
        <Link to={props.info.to}>\
            
            <h3>{props.info.title}</h3>
            <p>{props.info.text}</p>
        </Link>    
    </div>
);

export default FeatureInfo;