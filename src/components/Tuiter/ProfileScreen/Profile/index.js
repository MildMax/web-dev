import React from "react";
import useSetActiveDispatch from "../../../../dispatchers/setActiveDispatcher";
import '../profile.css';
import {useSelector} from "react-redux";
import {Link} from "react-router-dom";

const formatTuitsCount = (tuits) => {
    if (tuits > 1000) {
        const start = Math.floor(tuits / 1000);
        const end = tuits % 1000;
        return `${start},${end}`
    } else {
        return tuits;
    }
}

const determineMonth = (month) => {
    const numericMonth = parseInt(month);
    switch (numericMonth) {
        case 1:
            return "January";
        case 2:
            return "February";
        case 3:
            return "March";
        case 4:
            return "April";
        case 5:
            return "May";
        case 6:
            return "June";
        case 7:
            return "July";
        case 8:
            return "August";
        case 9:
            return "September";
        case 10:
            return "October";
        case 11:
            return "November";
        case 12:
            return "December";
        default:
            return "";
    }
}

const formatDOB = (date) => {
    const dateVals = date.split("-");
    const month = determineMonth(dateVals[1]);
    return `${month} ${dateVals[2]}, ${dateVals[0]}`
}

const formatJoinedDate = (date) => {
    const dateVals = date.split("-");
    const month = determineMonth(dateVals[1]);
    return `${month} ${dateVals[0]}`
}

const Profile = () => {

    useSetActiveDispatch("profile");

    const profileData = useSelector((state) => state.profileData);

    return (
        <div className="wd-relative-position wd-border-color-very-dark-grey wd-thin-border">
            <div className="wd-profile-header ps-3 pe-3 mb-1 mt-1">
                <Link to="/tuiter" className="btn ps-0 pe-0 pt-0 pb-0 wd-focus-override wd-profile-header-lead-button">
                    <i className="fa fa-arrow-left wd-fg-color-white wd-align-middle wd-grey-on-hover"/>
                </Link>
                <div className="ms-4 ps-4 wd-display-inline-block">
                    <p className="wd-bold-font wd-font-18 wd-fg-color-white mb-0">{profileData.name}</p>
                    <p className="wd-font-12 mb-0 wd-line-height-0-point-5">{formatTuitsCount(profileData.tuits)} Tweets</p>
                </div>
            </div>
            <img className="img-fluid wd-full-width wd-profile-banner-height wd-border-color-very-dark-grey wd-thin-border" src={profileData.bannerPicture} alt=""/>
            <img className="img-fluid wd-circle-border-radius wd-profile-avatar-dimensions wd-profile-avatar-position wd-border-black" src={profileData.profilePicture} alt=""/>
            <Link to={"/tuiter/editProfile"} className="btn rounded-pill wd-edit-button wd-bold-font wd-font-14 wd-float-right mt-2 me-2">Edit profile</Link>
            <div className="wd-profile-data-break"/>
            <div className="ps-3 pe-3 mb-3">
                <p className="mb-0 wd-fg-color-white wd-bold-font wd-font-20 wd-line-height-1-point-3">{profileData.name}</p>
                <p className="wd-line-height-1-point-2 mb-2">@{profileData.handle}</p>
                <p className="wd-fg-color-white wd-line-height-1-point-2 mb-2">{profileData.bio}</p>
                <div className="mb-2">
                    <span className="wd-display-inline-block me-3">
                        <i className="fa fa-location-dot"/>
                        <span className="ms-1">{profileData.location}</span>
                    </span>
                    <span className="wd-display-inline-block me-3">
                        <i className="fa fa-cake-candles me-1"/>
                        <span>{formatDOB(profileData.dob)}</span>
                    </span>
                    <span className="wd-display-inline-block">
                        <i className="fa fa-calendar-days me-1"/>
                        <span>Joined {formatJoinedDate(profileData.joined)}</span>
                    </span>
                </div>
                <div className="mb-2">
                    <span className="wd-display-inline-block me-4">
                        <span className="wd-fg-color-white wd-bold-font me-2">{profileData.followingCount}</span>
                        Following
                    </span>
                    <span className="wd-display-inline-block">
                        <span className="wd-fg-color-white wd-bold-font me-2">{profileData.followersCount}</span>
                        Followers
                    </span>
                </div>
                <a href={"https://" + profileData.website} rel="noreferrer" target="_blank" className="wd-website-link-color">
                    <i className="fa fa-link me-2"/>
                    {profileData.website}
                </a>
            </div>

        </div>
    );
}
export default Profile;

