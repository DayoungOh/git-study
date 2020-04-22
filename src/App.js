import React from 'react';
import {BrowserRouter as Router} from "react-router-dom";
import { createBrowserHistory } from "history";

import AppRoute from "routes/AppRoute"
import './App.scss';

const history = createBrowserHistory();

function App() {
    return (
        <div className="App">
            <Router history={history}>
                <AppRoute />
            </Router>
        </div>
    );
}

export default App;
