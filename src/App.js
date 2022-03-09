import './App.css';
import React from "react";

import './vendors/bootstrap/css/bootstrap.min.css';
import './vendors/bootstrap/bootstrap.min.css';
import './vendors/fontawesome/css/all.min.css';
import './tuiter.css';

import {Route,BrowserRouter} from "react-router-dom";
import HelloWorld from "./components/HelloWorld";
import Labs from "./components/Labs";
import HomeScreen from "./components/Tuiter/HomeScreen/HomeScreen";
import ExploreScreen from "./components/Tuiter/ExploreScreen/ExploreScreen";

const App = () => {

    return (
        <BrowserRouter>
            <div className="container">
                <Route path="/hello" exact={true} component={HelloWorld}/>
                <Route path={["/", "/labs"]} exact={true} component={Labs}/>
                <Route path="/tuiter/home" exact={true} component={HomeScreen}/>
                <Route path="/tuiter/explore" exact={true} component={ExploreScreen}/>
            </div>
        </BrowserRouter>
    );
}

export default App;


