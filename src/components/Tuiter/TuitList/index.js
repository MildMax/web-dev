import React, {useEffect} from "react";
import TuitListItem from "./TuitListItem";
import {useDispatch, useSelector} from "react-redux";
import {findAllTuits} from "../../../actions/tuits-actions";

const selectAllTuits = (state) => state.tuits;

const TuitList = () => {

    const tuits = useSelector(selectAllTuits);

    const dispatch = useDispatch();
    useEffect(() => findAllTuits(dispatch), [dispatch]);

    return(
        <ul className="list-group ms-0 me-0 mt-3 mb-0">
            {tuits.sort((a,b) => b.timePosted - a.timePosted).map(tuit => { return(
                <TuitListItem key={tuit._id} tuit={tuit}/>
            );
            })}
        </ul>
    );
}
export default TuitList;