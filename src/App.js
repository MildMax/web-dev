import './App.css';
import React from "react";

import './vendors/bootstrap/css/bootstrap.min.css';
import './vendors/bootstrap/bootstrap.min.css';
import './vendors/fontawesome/css/all.min.css';
import './tuiter.css';

import {Route,BrowserRouter} from "react-router-dom";
import HelloWorld from "./components/HelloWorld";
import Labs from "./components/Labs";
import Tuiter from "./components/Tuiter";

const App = () => {

    return (
        <BrowserRouter>
            <div className="container">
                <Route path="/hello" exact={true}>
                    <HelloWorld/>
                </Route>
                <Route path={["/", "/labs"]} exact={true}>
                    <Labs/>
                </Route>
                <Tuiter/>
            </div>
        </BrowserRouter>
    );
}

export default App;


