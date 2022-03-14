import React from "react";
import useSetActiveDispatch from "../../../dispatchers/setActiveDispatcher";
import './profile.css';
import {useSelector} from "react-redux";

const formatTuits = (tuits) => {
    if (tuits > 1000) {
        const start = Math.floor(tuits / 1000);
        const end = tuits % 1000;
        return `${start},${end}`
    } else {
        return tuits;
    }
}

const Profile = ({
    setEditProfile = () => console.log("WARNING: setEditProfile is undefined")
}) => {

    useSetActiveDispatch("profile");

    const profileData = useSelector((state) => state.profileData);

    return (
        <div className="wd-relative-position wd-border-color-very-dark-grey wd-thin-border">
            <div className="wd-profile-header ps-3 pe-3 mb-1 mt-1">
                <button className="btn ps-0 pe-0 pt-0 pb-0 wd-focus-override wd-profile-header-lead-button">
                    <i className="fa fa-arrow-left wd-fg-color-white wd-align-middle wd-grey-on-hover"/>
                </button>
                <div className="ms-4 ps-4 wd-display-inline-block">
                    <p className="wd-bold-font wd-font-18 wd-fg-color-white mb-0">{profileData.name}</p>
                    <p className="wd-font-12 mb-0 wd-line-height-0-point-5">{formatTuits(profileData.tuits)} Tweets</p>
                </div>
            </div>
            <img className="img-fluid wd-full-width wd-profile-banner-height wd-border-color-very-dark-grey wd-thin-border" src={profileData.bannerPicture} alt=""/>
            <img className="img-fluid wd-circle-border-radius wd-profile-avatar-dimensions wd-profile-avatar-position wd-border-black" src={profileData.profilePicture} alt=""/>
            <button onClick={() => setEditProfile(true)} className="btn rounded-pill wd-edit-button wd-bold-font wd-font-14 wd-float-right mt-2 me-2">Edit profile</button>
            <div className="wd-profile-data-break"/>
            <div className="ps-3 pe-3 mb-3">
                <p className="mb-0 wd-fg-color-white wd-bold-font wd-font-20 wd-line-height-1-point-3">{profileData.name}</p>
                <p className="wd-line-height-1-point-2 mb-3">@{profileData.handle}</p>
                <p className="wd-fg-color-white wd-line-height-1-point-2 mb-3">{profileData.bio}</p>
                <div className="mb-3">
                    <i className="fa fa-location-dot"/>
                    <span className="ms-1">{profileData.location}</span>
                    <i className="fa fa-cake-candles ms-3"/>
                    <span className="ms-1">{profileData.dob}</span>
                    <i className="fa fa-calendar-days ms-3"/>
                    <span className="ms-1">Joined {profileData.joined}</span>
                </div>
                <div>
                    <span className="wd-fg-color-white wd-bold-font">{profileData.followingCount}</span> Following
                    <span className="ms-4 wd-fg-color-white wd-bold-font">{profileData.followersCount}</span> Followers
                </div>
            </div>

        </div>
    );
}
export default Profile;

