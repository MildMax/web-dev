import React from "react";
import HelloReduxExampleComponent from "./HelloReduxExampleComponent";
import Todos from "./TodosComponent";
import hello from "./reducers/hello";
import todosReducer from "./reducers/todosReducer"
import {createStore,combineReducers} from "redux";
import {Provider} from "react-redux";

const reducers = combineReducers({hello, todos: todosReducer})
const store = createStore(reducers);

const ReduxExamples = () => {
    return(
        <Provider store={store}>
            <div>
                <h2>Redux Examples</h2>
                <Todos/>
                <HelloReduxExampleComponent/>
            </div>
        </Provider>
    );
};
export default ReduxExamples;
