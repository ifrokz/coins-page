import React from 'react';

class HomePage extends React.Component {
    componentDidMount = () => {
        document.title = `Home Page.`;
    }   
    
    render = () => (
        <div>
            HomePage
        </div>
    );
};

export default HomePage;