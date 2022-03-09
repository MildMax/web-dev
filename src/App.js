import './App.css';
import React from "react";

import './vendors/bootstrap/css/bootstrap.min.css';
import './vendors/bootstrap/bootstrap.min.css';
import './vendors/fontawesome/css/all.css';
import './tuiter.css';

import {Route,BrowserRouter} from "react-router-dom";
import HelloWorld from "./components/HelloWorld";
import Labs from "./components/Labs";
import Tuiter from "./components/Tuiter";

const App = () => {

    return (
        <BrowserRouter>
            <div className="container">
                <Route path="/hello" exact={true} component={HelloWorld}/>
                <Route path={["/", "/labs"]} exact={true} component={Labs}/>
                <Tuiter/>
            </div>
        </BrowserRouter>
    );
}

export default App;


