import './App.css';
import React from "react";

import './vendors/bootstrap/css/bootstrap.min.css';
import './vendors/bootstrap/bootstrap.min.css';
import './vendors/fontawesome/css/all.min.css';


import './styling/tuiter.css';

import {Route, Redirect, useLocation} from "react-router-dom";
import HelloWorld from "./components/HelloWorld";
import Labs from "./components/Labs";
import HomeScreen from "./components/Tuiter/HomeScreen/HomeScreen";
import ExploreScreen from "./components/Tuiter/ExploreScreen/ExploreScreen";

function App() {
    const { pathname } = useLocation();

    // corrects issue where occasionally react adds addition "/" char at end of url string
    let adjustedPath = pathname;
    if (pathname.charAt(pathname.length - 1) === "/") {
        adjustedPath = pathname.slice(0, pathname.length - 1);
    }

    return (
        <div className="container">
            <Redirect from="/:url*(/+)" to={adjustedPath} />
            <Route path="/hello" exact={true}>
                <HelloWorld/>
            </Route>
            <Route path={["/", "/labs"]} exact={true}>
                <Labs/>
            </Route>
            <Route path="/tuiter/home" exact={true}>
                <HomeScreen/>
            </Route>
            <Route path="/tuiter/explore" exact={true}>
                <ExploreScreen/>
            </Route>
        </div>
    );
}

export default App;


