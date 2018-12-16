import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import '../../styles/App.scss';

const Index = () => <p>Index</p>;
const About = () => <p>About</p>;

class App extends Component {

    AppRouter() {
        return (
            <Router>
                <div>
                    <nav>
                        <ul>
                            <li>
                                <Link to="/">Home</Link>
                            </li>
                            <li>
                                <Link to="/about/">About</Link>
                            </li>
                        </ul>
                    </nav>

                    <Route path="/" exact component={Index} />
                    <Route path="/about/" exact component={About} />
                </div>
            </Router>
        );
    }

    render() {
        return (
            <div>
                <h1>Destiny 2 Stats</h1>
                {this.AppRouter()}
                <p>Welp</p>
            </div>
        );
    }
}

export default App;
