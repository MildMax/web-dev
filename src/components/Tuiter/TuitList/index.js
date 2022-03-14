import React from "react";
import TuitListItem from "./TuitListItem";
import {useSelector} from "react-redux";

const selectAllTuits = (state) => state.tuits;

const TuitList = () => {

    const tuits = useSelector(selectAllTuits);

    return(
        <ul className="list-group ms-0 me-0 mt-3 mb-0">
            {tuits.map(tuit => { return(
                <TuitListItem key={tuit._id} tuit={tuit}/>
            );
            })}
        </ul>
    );
}
export default TuitList;