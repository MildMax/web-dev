import React, {useState} from "react";
import '../profile.css'
import {useDispatch, useSelector} from "react-redux";
import {Link} from "react-router-dom";
import useSetActiveDispatch from "../../../../dispatchers/setActiveDispatcher";

const EditProfile = () => {

    useSetActiveDispatch("profile");

    const profileData = useSelector((state) => state.profileData);

    const [profileName, setProfileName] = useState(profileData.name);
    const [bio, setBio] = useState(profileData.bio);
    const [location, setLocation] = useState(profileData.location);
    const [website, setWebsite] = useState(profileData.website);
    const [dob, setDob] = useState(profileData.dob);

    const captureFieldChange = (event, setter) => {
        setter(event.target.value)
    }

    const dispatch = useDispatch();

    const saveProfileData = () => {
        dispatch({
            type: "save-profile-data",
            name: profileName,
            bio: bio,
            location: location,
            website: website,
            dob: dob
        })
    }

    return(
        <div className="wd-relative-position wd-border-color-very-dark-grey wd-thin-border">
            <div className="wd-profile-header ps-3 pe-3 mb-1 mt-1">
                <Link to="/tuiter/profile" className="btn ps-0 pe-0 pt-0 pb-0 wd-focus-override wd-profile-header-lead-button">
                    <i className="fa fa-remove wd-fg-color-white wd-align-middle wd-grey-on-hover"/>
                </Link>
                <div className="ms-4 ps-4 wd-display-inline-block wd-edit-title-position">
                    <span className="wd-bold-font wd-font-20 wd-fg-color-white mb-0">Edit profile</span>
                </div>
                <Link to="/tuiter/profile" onClick={() => saveProfileData()} className="btn rounded-pill wd-save-button wd-bold-font wd-font-14 wd-float-right">Save</Link>
            </div>
            <div className="wd-position-relative">
                <img className="img-fluid wd-full-width wd-profile-banner-height wd-border-color-very-dark-grey wd-thin-border"
                     src={profileData.bannerPicture}
                     alt=""
                />
                <div className="wd-edit-profile-image-filter"/>
                <button className="wd-edit-profile-overlay-button wd-edit-profile-banner-button">
                    <i className="fa fa-camera"/>
                </button>
                <button className="wd-edit-profile-overlay-button wd-edit-profile-remove-banner-button">
                    <i className="fa fa-remove"/>
                </button>
            </div>
            <div className="wd-profile-avatar-position wd-profile-avatar-dimensions">
                <img className="img-fluid wd-circle-border-radius wd-profile-avatar-dimensions wd-border-black"
                     src={profileData.profilePicture}
                     alt=""
                />
                <div className="wd-edit-profile-image-filter wd-circle-border-radius wd-edit-border-transparent"/>
                <button className="wd-edit-profile-overlay-button wd-edit-profile-picture-button">
                    <i className="fa fa-camera"/>
                </button>
            </div>
            <div className="wd-profile-data-break"/>
            <div className="ps-3 pe-3 mt-2 mb-3">
                <div className="wd-edit-profile-text-entry ps-2 pe-2 pt-1 pb-1">
                    <label htmlFor="name" className="wd-font-12">Name</label>
                    <textarea id="name"
                              onChange={(event) => captureFieldChange(event, setProfileName)}
                              rows={1}
                              defaultValue={profileName}
                    />
                </div>
                <br/>
                <div className="wd-edit-profile-text-entry ps-2 pe-2 pt-1 pb-1">
                    <label htmlFor="bio" className="wd-font-12">Bio</label>
                    <textarea id="bio"
                              onChange={(event) => captureFieldChange(event, setBio)}
                              rows={3}
                              defaultValue={bio}
                    />
                </div>
                <br/>
                <div className="wd-edit-profile-text-entry ps-2 pe-2 pt-1 pb-1">
                    <label htmlFor="location" className="wd-font-12">Location</label>
                    <textarea id="location"
                              onChange={(event) => captureFieldChange(event, setLocation)}
                              rows={1}
                              defaultValue={location}
                    />
                </div>
                <br/>
                <div className="wd-edit-profile-text-entry ps-2 pe-2 pt-1 pb-1">
                    <label htmlFor="website" className="wd-font-12">Website</label>
                    <textarea id="website"
                              onChange={(event) => captureFieldChange(event, setWebsite)}
                              rows={1}
                              defaultValue={website}
                    />
                </div>
                <br/>
                <div className="wd-edit-profile-text-entry ps-2 pe-2 pt-1 pb-1">
                    <label htmlFor="dob" className="wd-font-12">Date of Birth</label>
                    <input id="dob"
                           type="date"
                           className="form-control ps-0 pe-0"
                           value={dob}
                           onChange={(event) => captureFieldChange(event, setDob)}
                    />
                </div>
            </div>
        </div>
    );
}
export default EditProfile;