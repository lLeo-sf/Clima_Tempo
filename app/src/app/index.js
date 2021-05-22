import React from 'react';
import Atual from './components/atual/atual';
import Historico from './components/historico/historico';
import './index.css';

const Home = (props) => {

    return (
        <div className={'container'}>
            <Atual />
            <Historico />
        </div>
    );
}

export default Home;

