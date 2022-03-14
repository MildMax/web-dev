import React from "react";
import useSetActiveDispatch from "../../../dispatchers/setActiveDispatcher";
import './profile.css';
import {Link} from "react-router-dom";
import Profile from "./Profile";

const ProfileScreen = () => {

    useSetActiveDispatch("profile");

    return (
        <Profile/>
    );
}
export default ProfileScreen;

