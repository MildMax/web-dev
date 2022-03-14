import React from "react";
import useSetActiveDispatch from "../../../dispatchers/setActiveDispatcher";
import './profile.css';
import {Link} from "react-router-dom";

const Profile = () => {

    useSetActiveDispatch("profile");

    return (
        <div className="wd-relative-position wd-border-color-very-dark-grey wd-thin-border">
            <div className="wd-profile-header ms-3 mb-1">
                <button className="btn ps-0 pe-0 pt-0 pb-0 wd-focus-override">
                    <i className="fa fa-arrow-left wd-fg-color-white wd-align-middle wd-grey-on-hover"/>
                </button>
                <div className="ms-4 ps-4 wd-display-inline-block">
                    <p className="wd-bold-font wd-font-20 wd-fg-color-white mb-0">Joseph Burns</p>
                    <p className="wd-font-14 mb-0 wd-line-height-1-point-2">1,234 Tweets</p>
                </div>
            </div>
            <img className="img-fluid wd-full-width wd-profile-banner-height wd-border-color-very-dark-grey wd-thin-border" src="/images/doom_banner_alt.jpg" alt=""/>
            <img className="img-fluid wd-circle-border-radius wd-profile-avatar-dimensions wd-profile-avatar-position wd-border-black" src="/images/doom_guy.jpg" alt=""/>
            <button to="/tuiter/" className="btn rounded-pill wd-edit-button wd-bold-font wd-font-14 wd-float-right mt-2 me-2">Edit profile</button>
            <div className="wd-profile-data-break"/>
            <div className="ps-3">
                <p className="mb-0 wd-fg-color-white wd-bold-font wd-font-20">Joseph Burns</p>
                <p>@joeb</p>
                <p className="wd-fg-color-white wd-line-height-1-point-2 mb-2">Mostly just a nerd wandering around. Likes: The Strokes, beer, not being a grad student</p>
                <div className="mb-2">
                    <i className="fa fa-location-dot"/>
                    <span className="ms-1">Boston, MA</span>
                    <i className="fa fa-cake-candles ms-2"/>
                    <span className="ms-1">Born September 9, 1993</span>
                    <i className="fa fa-calendar-days ms-2"/>
                    <span className="ms-1">Joined April 2020</span>
                </div>
                <div className="mb-2">
                    <span className="wd-fg-color-white wd-bold-font">312</span> Following
                    <span className="ms-4 wd-fg-color-white wd-bold-font">123</span> Followers
                </div>
            </div>

        </div>
    );
}
export default Profile;

