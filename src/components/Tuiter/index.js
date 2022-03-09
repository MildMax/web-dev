import React from "react";
import ExploreScreen from "./ExploreScreen/ExploreScreen";
import HomeScreen from "./HomeScreen/HomeScreen";
import who from "../../reducers/who";
import {createStore} from "redux";
import {Provider} from "react-redux";
import {Route} from "react-router-dom";

const store = createStore(who);


const Tuiter = () => {
    return(
        <Provider store={store}>
            <div>
                <Route path="/tuiter" exact={true}>
                    <HomeScreen/>
                </Route>
                <Route path="/tuiter/explore" exact={true}>
                    <ExploreScreen/>
                </Route>
            </div>
        </Provider>
    );
};

export default Tuiter;
