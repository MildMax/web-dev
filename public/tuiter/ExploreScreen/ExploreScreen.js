import NavigationSidebar from "../NavigationSidebar/index.js";
import ExploreComponent from "./ExploreComponent.js";
import WhoToFollowList from "../WhoToFollowList/index.js";

(function ($) {
    $('#wd-explore').append(`
        <div class="row mt-2">
        <div class="col-2 col-md-2 col-lg-1 col-xl-2">
            ${NavigationSidebar("explore")}
        </div>
        <div class="col-xxl-6 xxl-width-override col-xl-6 col-lg-7 col-md-10 col-sm-10 sm-content-override xs-small-min-width">
            ${ExploreComponent()}
        </div>
        <div class="d-sm-none d-md-none d-lg-block col-lg-4 col-xl-4">
            ${WhoToFollowList()}
        </div>
        </div>
    `);
})($);
