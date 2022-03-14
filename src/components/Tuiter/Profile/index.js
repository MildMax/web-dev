import React, {useState} from "react";
import useSetActiveDispatch from "../../../dispatchers/setActiveDispatcher";
import Profile from "./Profile";
import EditProfile from "./EditProfile";

const ProfileScreen = () => {

    const [editProfile, setEditProfile] = useState(false);

    useSetActiveDispatch("profile");

    return (
        <>
            {!editProfile && <Profile setEditProfile={setEditProfile}/>}
            {editProfile && <EditProfile setEditProfile={setEditProfile}/>}
        </>
    );
}
export default ProfileScreen;

