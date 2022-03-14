import React from "react";
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";

const NavigationSidebar = () => {

    const active = useSelector((state) => state.active);

    return(
        <>
            <div className="list-group">
                <Link to="/" className="list-group-item">
                    <i className="fab fa-twitter"/>
                </Link>
                <Link to="/tuiter" className={`list-group-item ${active === "home" ? "active" : ""}`}>
                    <i className="fa fa-home"/>
                    <span className="wd-disappear-content-lg wd-disappear-content-m wd-disappear-content-s"> Home</span>
                </Link>
                <Link to="/tuiter/explore" className={`list-group-item ${active === "explore" ? "active" : ""}`}>
                    <i className="fa fa-hashtag"/>
                    <span className="wd-disappear-content-lg wd-disappear-content-m wd-disappear-content-s"> Explore</span>
                </Link>
                <Link to="/tuiter/notifications" className={`list-group-item ${active === "notifications" ? "active" : ""}`}>
                    <i className="fa fa-bell"/>
                    <span className="wd-disappear-content-lg wd-disappear-content-m wd-disappear-content-s"> Notifications</span>
                </Link>
                <Link to="/tuiter/messages" className={`list-group-item ${active === "messages" ? "active" : ""}`}>
                    <i className="fa fa-envelope"/>
                    <span className="wd-disappear-content-lg wd-disappear-content-m wd-disappear-content-s"> Messages</span>
                </Link>
                <Link to="/tuiter/bookmarks" className={`list-group-item ${active === "bookmarks" ? "active" : ""}`}>
                    <i className="fa fa-bookmark"/>
                    <span className="wd-disappear-content-lg wd-disappear-content-m wd-disappear-content-s"> Bookmarks</span>
                </Link>
                <Link to="/tuiter/lists" className={`list-group-item ${active === "lists" ? "active" : ""}`}>
                    <i className="fa fa-list-ul"/>
                    <span className="wd-disappear-content-lg wd-disappear-content-m wd-disappear-content-s"> Lists</span>
                </Link>
                <Link to="/tuiter/profile" className={`list-group-item ${active === "profile" ? "active" : ""}`}>
                    <i className="fa fa-user"/>
                    <span className="wd-disappear-content-lg wd-disappear-content-m wd-disappear-content-s"> Profile</span>
                </Link>
                <Link to="/tuiter/more" className={`list-group-item ${active === "more" ? "active" : ""}`}>
                    <i className="fa fa-circle"/>
                    <span className="wd-disappear-content-lg wd-disappear-content-m wd-disappear-content-s"> More</span>
                </Link>
            </div>
            <div className="d-grid mt-2">
                <Link to="/tuiter/tweet" className="btn btn-primary btn-block rounded-pill">
                    Tweet
                </Link>
            </div>
        </>
    );
}
export default NavigationSidebar;