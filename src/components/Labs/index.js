import React, {useState} from "react";
import {Link} from "react-router-dom";
import Classes from "./Classes";
import Styles from "./Styles";
import ConditionalOutput from "./ConditionalOutput";
import TodoList from "./ToDo/TodoList";
import ReduxExamples from "./ReduxExamples";

const Labs = () => {

    const [hideA6, setHideA6] = useState(false);

    const toggleHide = () => {
        setHideA6(!hideA6);
    }

    return(
        <>
            <h1>Labs</h1>

            {/*a7 labs*/}
            <ReduxExamples/>

            {/*navigation*/}
            <Link to="/hello">
                Hello
            </Link> |
            <Link to="/tuiter">
                Tuiter
            </Link>

            {/*a6 labs*/}
            <br/>
            <br/>
            {(() => {
                if (hideA6) {
                    return (
                        <button className="btn btn-primary btn-block rounded-pill" onClick={toggleHide}>Show A6 Labs</button>
                    )
                } else {
                    return (
                    <>
                        <button className="btn btn-primary btn-block rounded-pill" onClick={toggleHide}>Hide A6 Labs</button>
                        <br/>
                        <br/>
                        <ConditionalOutput/>
                        <Styles/>
                        <Classes/>
                        <TodoList/>
                    </>
                );}
            })()}

        </>
    )
};

export default Labs;
