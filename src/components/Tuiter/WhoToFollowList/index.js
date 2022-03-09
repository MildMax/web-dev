import WhoToFollowListItem from "./WhoToFollowListItem";
import React from "react";
import {useSelector} from "react-redux";

const WhoToFollowList = () => {

    const who = useSelector((state) => state.who);

    return (
        <ul className="list-group">
            <li className="list-group-item">
                <p className="ms-0 me-0 mt-0 mb-0 wd-bold-font">Who to follow</p>
            </li>
            {
                who.map(who => {
                    return(
                        <WhoToFollowListItem who={who} />
                    );
                })
            }
        </ul>
    );
}
export default WhoToFollowList;