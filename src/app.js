import React, { Component } from 'react';
import '../styles/app.scss';
import { authorize, } from './lib/client';
import Header from './components/header';

class App extends Component {

    render() {
        return (
            <div>
                <Header />
                <p>Welp</p>
                <p>{process.env.API_KEY}</p>
                <button onClick={authorize}>Authorize Me</button>
            </div>
        );
    }

}

export default App;
