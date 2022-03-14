import React from "react";
import TuitList from "../TuitList";
import WhatsHappening from "../WhatsHappening";
import './home.css';
import useSetActiveDispatch from "../../../dispatchers/setActiveDispatcher";

const HomeScreen = () => {

    useSetActiveDispatch("home");

    return (
        <>
            <WhatsHappening/>
            <TuitList/>
        </>
    );
}
export default HomeScreen;

