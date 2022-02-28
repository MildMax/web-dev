import React from "react";
import {Link} from "react-router-dom";

const NavigationSidebar = ({active}) => {
    return(
        <>
            <div className="list-group">
                <Link to="/" className="list-group-item">
                    <i className="fab fa-twitter"></i>
                </Link>
                <Link to="/tuiter/home" className={`list-group-item ${active === "home" ? "active" : ""}`}>
                    <i className="fa fa-home"></i>
                    <span className="wd-disappear-content-lg wd-disappear-content-m wd-disappear-content-s">Home</span>
                </Link>
                <Link to="/tuiter/explore" className={`list-group-item ${active === "explore" ? "active" : ""}`}>
                    <i className="fa fa-hashtag"></i>
                    <span className="wd-disappear-content-lg wd-disappear-content-m wd-disappear-content-s">Explore</span>
                </Link>
                <Link to="/tuiter/notifications.html" className={`list-group-item ${active === "notifications" ? "active" : ""}`}>
                    <i className="fa fa-bell"></i> 
                    <span className="wd-disappear-content-lg wd-disappear-content-m wd-disappear-content-s">Notifications</span>
                </Link>
                <Link to="/tuiter/messages.html" className={`list-group-item ${active === "messages" ? "active" : ""}`}>
                    <i className="fa fa-envelope"></i>
                    <span className="wd-disappear-content-lg wd-disappear-content-m wd-disappear-content-s">Messages</span>
                </Link>
                <Link to="/tuiter/bookmarks.html" className={`list-group-item ${active === "bookmarks" ? "active" : ""}`}>
                    <i className="fa fa-bookmark"></i>
                    <span className="wd-disappear-content-lg wd-disappear-content-m wd-disappear-content-s">Bookmarks</span>
                </Link>
                <Link to="/tuiter/lists.html" className={`list-group-item ${active === "lists" ? "active" : ""}`}>
                    <i className="fa fa-list-ul"></i>
                    <span className="wd-disappear-content-lg wd-disappear-content-m wd-disappear-content-s">Lists</span>
                </Link>
                <Link to="/tuiter/profile.html" className={`list-group-item ${active === "profile" ? "active" : ""}`}>
                    <i className="fa fa-user"></i>
                    <span className="wd-disappear-content-lg wd-disappear-content-m wd-disappear-content-s">Profile</span>
                </Link>
                <Link to="#" className={`list-group-item ${active === "more" ? "active" : ""}`}>
                    <i className="fa fa-circle"></i>
                    <span className="wd-disappear-content-lg wd-disappear-content-m wd-disappear-content-s">More</span>
                </Link>
            </div>
            <div className="d-grid mt-2">
                <a href="tweet.html"
                   className="btn btn-primary btn-block rounded-pill">
                    Tweet</a>
            </div>
        </>
    );
}
export default NavigationSidebar;