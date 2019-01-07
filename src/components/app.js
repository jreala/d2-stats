import React, { Component } from 'react';
import '../../styles/App.scss';
import { authorize, } from '../client';
import routes from '../config/routes';
import { Routes, Switchify, Links } from './routeHelper';

class App extends Component {

    render() {
        return (
            <div>
                <h1>Destiny 2 Stats</h1>
                {Links(routes)}
                {Switchify(Routes(routes))}
                <p>Welp</p>
                <p>{process.env.API_KEY}</p>
                <button onClick={authorize}>Authorize Me</button>
            </div>
        );
    }

}

export default App;
