const NavigationSidebar = (active) => {
    return(`
            <div class="list-group">
                <a class="list-group-item" href="/">
                    <i class="fab fa-twitter"></i></a>
                <a href="../HomeScreen/home.html" class="list-group-item ${active === "home" ? "active" : ""}">
                    <i class="fa fa-home"></i>
                    <span class="wd-disappear-content-lg wd-disappear-content-m wd-disappear-content-s">Home</span>
                </a>
                <a href="../ExploreScreen/explore.html" class="list-group-item ${active === "explore" ? "active" : ""}">
                    <i class="fa fa-hashtag"></i>
                    <span class="wd-disappear-content-lg wd-disappear-content-m wd-disappear-content-s">Explore</span>
                </a>
                <a href="../notifications.html" class="list-group-item ${active === "notifications" ? "active" : ""}">
                    <i class="fa fa-bell"></i> 
                    <span class="wd-disappear-content-lg wd-disappear-content-m wd-disappear-content-s">Notifications</span>
                </a>
                <a href="../messages.html" class="list-group-item ${active === "messages" ? "active" : ""}">
                    <i class="fa fa-envelope"></i>
                    <span class="wd-disappear-content-lg wd-disappear-content-m wd-disappear-content-s">Messages</span>
                </a>
                <a href="../bookmarks.html" class="list-group-item ${active === "bookmarks" ? "active" : ""}">
                    <i class="fa fa-bookmark"></i>
                    <span class="wd-disappear-content-lg wd-disappear-content-m wd-disappear-content-s">Bookmarks</span>
                </a>
                <a href="../lists.html" class="list-group-item ${active === "lists" ? "active" : ""}">
                    <i class="fa fa-list-ul"></i>
                    <span class="wd-disappear-content-lg wd-disappear-content-m wd-disappear-content-s">Lists</span>
                </a>
                <a href="../profile.html" class="list-group-item ${active === "profile" ? "active" : ""}">
                    <i class="fa fa-user"></i>
                    <span class="wd-disappear-content-lg wd-disappear-content-m wd-disappear-content-s">Profile</span>
                </a>
                <a href="#" class="list-group-item ${active === "more" ? "active" : ""}">
                    <i class="fa fa-circle"></i>
                    <span class="wd-disappear-content-lg wd-disappear-content-m wd-disappear-content-s">More</span>
                </a>
            </div>
            <div class="d-grid mt-2">
                <a href="tweet.html"
                   class="btn btn-primary btn-block rounded-pill">
                    Tweet</a>
            </div>
    `);
}
export default NavigationSidebar;