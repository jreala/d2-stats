import React, { Component } from 'react';
import '../styles/app.scss';
import { authorize, } from './lib/authorize';
import routes from './config/routes';
import Header from './components/header';
import { Routes, Switchify } from './lib/routeHelper';

class App extends Component {

    render() {
        return (
            <div>
                <Header />
                {Switchify(Routes(routes))}
                <p>Welp</p>
                <p>{process.env.API_KEY}</p>
                {/* <button onClick={authorize}>Authorize Me</button> */}
            </div>
        );
    }

}

export default App;
