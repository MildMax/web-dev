import React from "react";
import './profile.css'
import {useSelector} from "react-redux";

const EditProfile = ({
    setEditProfile = () => console.log("WARNING: setEditProfile is undefined")
}) => {

    const profileData = useSelector((state) => state.profileData);

    return(
        <div className="wd-relative-position wd-border-color-very-dark-grey wd-thin-border">
            <div className="wd-profile-header ps-3 pe-3 mb-1 mt-1">
                <button onClick={() => setEditProfile(false)} className="btn ps-0 pe-0 pt-0 pb-0 wd-focus-override wd-profile-header-lead-button">
                    <i className="fa fa-remove wd-fg-color-white wd-align-middle wd-grey-on-hover"/>
                </button>
                <div className="ms-4 ps-4 wd-display-inline-block wd-edit-title-position">
                    <span className="wd-bold-font wd-font-20 wd-fg-color-white mb-0">Edit profile</span>
                </div>
                <button className="btn rounded-pill wd-save-button wd-bold-font wd-font-14 wd-float-right">Save</button>
            </div>
            <img className="img-fluid wd-full-width wd-profile-banner-height wd-border-color-very-dark-grey wd-thin-border" src={profileData.bannerPicture} alt=""/>
            <img className="img-fluid wd-circle-border-radius wd-profile-avatar-dimensions wd-profile-avatar-position wd-border-black" src={profileData.profilePicture} alt=""/>
            <div className="wd-profile-data-break"/>
            <div className="ps-3 pe-3 mt-2 mb-3">
                <div className="wd-edit-profile-text-entry ps-2 pe-2 pt-1 pb-1">
                    <label for="name" className="wd-font-12">Name</label>
                    <textarea id="name" rows={1}>{profileData.name}</textarea>
                </div>
                <br/>
                <div className="wd-edit-profile-text-entry ps-2 pe-2 pt-1 pb-1">
                    <label for="bio" className="wd-font-12">Bio</label>
                    <textarea id="bio" rows={2}>{profileData.bio}</textarea>
                </div>
                <br/>
                <div className="wd-edit-profile-text-entry ps-2 pe-2 pt-1 pb-1">
                    <label className="wd-font-12">Location</label>
                    <textarea rows={1}>{profileData.location}</textarea>
                </div>
                <br/>
                <div className="wd-edit-profile-text-entry ps-2 pe-2 pt-1 pb-1">
                    <div className="wd-font-12">Website</div>
                    <textarea rows={1}>{profileData.website}</textarea>
                </div>
                <br/>
                <div className="wd-edit-profile-text-entry ps-2 pe-2 pt-1 pb-1">
                    <div className="wd-font-12">Website</div>
                    <input type="date" className="form-control ps-0 pe-0" value={profileData.dob}/>
                </div>
            </div>
        </div>
    );
}
export default EditProfile;