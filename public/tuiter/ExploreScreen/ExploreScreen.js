import NavigationSidebar from "../NavigationSidebar/index.js";
import ExploreComponent from "./ExploreComponent.js";
import WhoToFollowList from "../WhoToFollowList/index.js";

(function ($) {
    $('#wd-explore').append(`
        <div class="row mt-2">
        <div class="col-2 col-md-2 col-lg-1 col-xl-2 wd-xs-small-min-width wd-xs-navigation-width">
            ${NavigationSidebar("explore")}
        </div>
        <div class="col-xxl-6 wd-xxl-width-override col-xl-6 col-lg-7 col-md-10 col-sm-10 wd-sm-content-override wd-xs-small-min-width wd-xs-main-content-margins">
            ${ExploreComponent()}
        </div>
        <div class="d-sm-none d-md-none d-lg-block col-lg-4 col-xl-4 wd-xs-small-min-width">
            ${WhoToFollowList()}
        </div>
        </div>
    `);
})($);
