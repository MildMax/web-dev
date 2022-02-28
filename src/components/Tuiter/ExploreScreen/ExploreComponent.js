import React from "react";
import PostSummaryList from "../PostSummaryList";

const ExploreComponent = () => {
    return (
        <>
            <div className="row mb-2">
                <div className="wd-display-flex wd-tuiter-search-row-container align-middle ms-0 me-0">
                    <div className="wd-float-left wd-full-width wd-full-height wd-bg-color-white ps-3 me-4 search-bar-override wd-search-bar-border-override border rounded-pill wd-display-flex align-middle">
                        <a href="search.html">
                            <i className="fa fa-search wd-float-left wd-search-icon-line-height wd-hide-border wd-fg-color-grey-search"></i>
                        </a>
                        <input className="wd-tuiter-search wd-bg-color-white wd-fg-color-grey-search wd-fg-color-black wd-float-left wd-hide-border" type="text" placeholder="Search Twitter"/>
                    </div>
                    <a href="explore-settings.html" className="wd-float-right ps-0 pe-0 pt-0 pb-0 wd-font-30 wd-line-height-1-point-3">
                        <i className="fa fa-cog"></i>
                    </a>
                </div>
           </div>
           <ul className="nav mb-2 nav-tabs">
                <li className="nav-item">
                    <a href="for-you.html" className="nav-link active ">For You</a>
                </li>
                <li className="nav-item">
                    <a href="trending.html" className="nav-link">Trending</a>
                </li>
                <li className="nav-item">
                    <a href="news.html" className="nav-link">News</a>
                </li>
                <li className="nav-item">
                    <a href="sports.html" className="nav-link">Sports</a>
                </li>
                <li className="nav-item wd-disappear-content-s wd-disappear-content-xs">
                    <a href="entertainment.html" className="nav-link">Entertainment</a>
                </li>
           </ul>
           <div className="row mt-2 mb-2 ms-0 me-0 position-relative border wd-tuit-content-border-color-style-override">
               <img src={"/images/spacex-starship.jpg"} className="img-fluid ps-0 pe-0 pt-0 pb-0"/>
                <span className="wd-text-overlay wd-fg-color-white ps-0 pe-0 ms-2">SpaceX's Starship</span>
           </div>
           <PostSummaryList/>
        </>
    );
}
export default ExploreComponent;
