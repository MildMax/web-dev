import React from "react";
import ExploreScreen from "./ExploreScreen/ExploreScreen";
import HomeScreen from "./HomeScreen/HomeScreen";
import who from "../../reducers/who";
import tuits from "../../reducers/tuits";
import {combineReducers,createStore} from "redux";
import {Provider} from "react-redux";
import {Route} from "react-router-dom";

const reducer = combineReducers({tuits: tuits, who})
const store = createStore(reducer);

const Tuiter = () => {
    return(
        <Provider store={store}>
            <div>
                <Route path="/tuiter" exact={true} component={HomeScreen}/>
                <Route path="/tuiter/explore" exact={true} component={ExploreScreen}/>
            </div>
        </Provider>
    );
};

export default Tuiter;
