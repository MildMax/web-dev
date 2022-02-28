import React from "react";

const NavigationSidebar = ({active}) => {
    return(
        <>
            <div className="list-group">
                <a className="list-group-item" href="/">
                    <i className="fab fa-twitter"></i></a>
                <a href="../HomeScreen/home.html" className={`list-group-item ${active === "home" ? "active" : ""}`}>
                    <i className="fa fa-home"></i>
                    <span className="wd-disappear-content-lg wd-disappear-content-m wd-disappear-content-s">Home</span>
                </a>
                <a href="../ExploreScreen/explore.html" className={`list-group-item ${active === "explore" ? "active" : ""}`}>
                    <i className="fa fa-hashtag"></i>
                    <span className="wd-disappear-content-lg wd-disappear-content-m wd-disappear-content-s">Explore</span>
                </a>
                <a href="../notifications.html" className={`list-group-item ${active === "notifications" ? "active" : ""}`}>
                    <i className="fa fa-bell"></i> 
                    <span className="wd-disappear-content-lg wd-disappear-content-m wd-disappear-content-s">Notifications</span>
                </a>
                <a href="../messages.html" className={`list-group-item ${active === "messages" ? "active" : ""}`}>
                    <i className="fa fa-envelope"></i>
                    <span className="wd-disappear-content-lg wd-disappear-content-m wd-disappear-content-s">Messages</span>
                </a>
                <a href="../bookmarks.html" className={`list-group-item ${active === "bookmarks" ? "active" : ""}`}>
                    <i className="fa fa-bookmark"></i>
                    <span className="wd-disappear-content-lg wd-disappear-content-m wd-disappear-content-s">Bookmarks</span>
                </a>
                <a href="../lists.html" className={`list-group-item ${active === "lists" ? "active" : ""}`}>
                    <i className="fa fa-list-ul"></i>
                    <span className="wd-disappear-content-lg wd-disappear-content-m wd-disappear-content-s">Lists</span>
                </a>
                <a href="../profile.html" className={`list-group-item ${active === "profile" ? "active" : ""}`}>
                    <i className="fa fa-user"></i>
                    <span className="wd-disappear-content-lg wd-disappear-content-m wd-disappear-content-s">Profile</span>
                </a>
                <a href="#" className={`list-group-item ${active === "more" ? "active" : ""}`}>
                    <i className="fa fa-circle"></i>
                    <span className="wd-disappear-content-lg wd-disappear-content-m wd-disappear-content-s">More</span>
                </a>
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