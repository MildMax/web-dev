import WhoToFollowListItem from "./WhoToFollowListItem";
import who from "./who.json"
import React from "react";

const WhoToFollowList = () => {
    return (
        <ul className="list-group">
            <li className="list-group-item padding-top-bottom-override">
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
); }
export default WhoToFollowList;