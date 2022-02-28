import React from "react";

import NavigationSidebar from "../NavigationSidebar";
import ExploreComponent from "./ExploreComponent";
import WhoToFollowList from "../WhoToFollowList";

const ExploreScreen = () => {
    return (
        <div className="row mt-2">
            <div className="col-2 col-md-2 col-lg-1 col-xl-2 wd-xs-small-min-width wd-xs-navigation-width">
                <NavigationSidebar active={"explore"}/>
            </div>
            <div className="col-xxl-6 wd-xxl-width-override col-xl-6 col-lg-7 col-md-10 col-sm-10 wd-sm-content-override wd-xs-small-min-width wd-xs-main-content-margins">
                <ExploreComponent/>
            </div>
            <div className="d-sm-none d-md-none d-lg-block col-lg-4 col-xl-4 wd-xs-small-min-width">
                <WhoToFollowList/>
            </div>
        </div>
    )
}
export default ExploreScreen;