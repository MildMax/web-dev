import React from "react";
import './explore.css';
import {Link} from "react-router-dom";
import PostSummaryList from "../PostSummaryList";
import useSetActiveDispatch from "../../../dispatchers/setActiveDispatcher";

const ExploreScreen = () => {

    useSetActiveDispatch("explore")

    return (
        <>
            <div className="row mb-2">
                <div className="wd-display-flex wd-tuiter-search-row-container align-middle ms-0 me-0">
                    <div className="wd-float-left wd-full-width wd-full-height wd-bg-color-white ps-3 me-4 search-bar-override wd-search-bar-border-override border rounded-pill wd-display-flex align-middle">
                        <Link to="/tuiter/search">
                            <i className="fa fa-search wd-float-left wd-search-icon-line-height wd-hide-border wd-fg-color-grey-search"/>
                        </Link>
                        <input className="wd-tuiter-search wd-bg-color-white wd-fg-color-grey-search wd-fg-color-black wd-float-left wd-hide-border" type="text" placeholder="Search Twitter"/>
                    </div>
                    <Link to="/tuiter/explore-settings" className="wd-float-right ps-0 pe-0 pt-0 pb-0 wd-font-30 wd-line-height-1-point-3">
                        <i className="fa fa-cog"/>
                    </Link>
                </div>
            </div>
            <ul className="nav mb-2 nav-tabs">
                <li className="nav-item">
                    <Link to="/tuiter/for-you" className="nav-link active ">For You</Link>
                </li>
                <li className="nav-item">
                    <Link to="/tuiter/trending" className="nav-link">Trending</Link>
                </li>
                <li className="nav-item">
                    <Link to="/tuiter/news" className="nav-link">News</Link>
                </li>
                <li className="nav-item">
                    <Link to="/tuiter/sports" className="nav-link">Sports</Link>
                </li>
                <li className="nav-item wd-disappear-content-s wd-disappear-content-xs">
                    <Link to="/tuiter/entertainment" className="nav-link">Entertainment</Link>
                </li>
            </ul>
            <div className="row mt-2 mb-2 ms-0 me-0 position-relative border wd-tuit-content-border-color-style-override">
                <img src={"/images/spacex-starship.jpg"} alt="" className="img-fluid ps-0 pe-0 pt-0 pb-0"/>
                <span className="wd-text-overlay wd-fg-color-white ps-0 pe-0 ms-2">SpaceX's Starship</span>
            </div>
            <PostSummaryList/>
        </>
    );
}
export default ExploreScreen;