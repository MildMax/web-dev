import NavigationSidebar from "../NavigationSidebar/index.js";
import HomeComponent from "./HomeComponent.js";
import PostSummaryList from "../PostSummaryList/index.js";

(function ($) {
    $('#wd-home').append(`
        <div class="row mt-2">
        <div class="col-2 col-md-2 col-lg-1 col-xl-2 wd-xs-navigation-width">
            ${NavigationSidebar("home")}
        </div>
        <div class="col-xxl-6 wd-xxl-width-override col-xl-6 col-lg-7 col-md-10 col-sm-10 wd-sm-content-override wd-xs-small-min-width wd-xs-main-content-margins">
            ${HomeComponent()}
        </div>
        <div class="d-sm-none d-md-none d-lg-block col-lg-4 col-xl-4">
            ${PostSummaryList()}
        </div>
        </div>
    `);
})($);