import React from "react";

const WhoToFollowListItem = ({
         who = {
             "avatarIcon" : "/images/nasa.png",
             "userName" : "NASA",
             "handle" : "NASA",
         }
    }) => {
    return (
        <li className="list-group-item  wd-list-group-follow-override wd-display-flex wd-display-items-middle-vertical">
            <img src={who.avatarIcon} className="wd-float-left wd-sidebar-images"/>
            <div className="wd-float-left wd-display-inline-block wd-fill-follow-tags-width wd-follow-tag-padding wd-visible-overflow wd-line-height-1-point-4">
                <div className="row wd-fill-height-45-percent">
                    <p className="col ms-0 me-0 mt-0 mb-0 wd-bold-font">
                        <span>{who.userName} </span>
                        <i className="col fa fa-check-circle"/>
                    </p>
                </div>
                <div className="row wd-fill-height-45-percent">
                    <p className="wd-fg-color-white ms-0 me-0 mt-0 mb-0">@{who.handle}</p>
                </div>
            </div>
            <button type="button" className="btn btn-primary wd-follow-button-dims-override rounded-pill wd-font-15 wd-float-right">Follow</button>
        </li>
    );
}
export default WhoToFollowListItem;