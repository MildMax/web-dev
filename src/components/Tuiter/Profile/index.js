import React from "react";
import useSetActiveDispatch from "../../../dispatchers/setActiveDispatcher";

const ProfileScreen = () => {

    useSetActiveDispatch("profile");

    return (
        <div>
            HI
        </div>
    );
}
export default ProfileScreen;

