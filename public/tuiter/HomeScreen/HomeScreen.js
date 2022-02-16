import NavigationSidebar from "../NavigationSidebar/index.js";
import HomeComponent from "./HomeComponent.js";
import WhoToFollowList from "../WhoToFollowList/index.js";

(function ($) {
    $('#wd-home').append(`
        <div class="row mt-2">
        <div class="col-2 col-md-2 col-lg-1 col-xl-2">
            ${NavigationSidebar("home")}
        </div>
        <div class="col-xxl-6 xxl-width-override col-xl-6 col-lg-7 col-md-10 col-sm-10 sm-content-override xs-small-min-width">
            ${HomeComponent()}
        </div>
        <div class="d-sm-none d-md-none d-lg-block col-lg-4 col-xl-4">
            ${WhoToFollowList()}
        </div>
        </div>
    `);
})($);