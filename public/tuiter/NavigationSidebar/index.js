const NavigationSidebar = () => {
    return(`
            <div class="list-group">
                <a class="list-group-item" href="/">
                    <i class="fab fa-twitter"></i></a>
                <a class="list-group-item" href="home.html">
                    <i class="fa fa-home"></i>
                    <span class="disappear-content-lg disappear-content-m disappear-content-s disappear-content-xs">Home</span>
                </a>
                <a href="explore.html" class="list-group-item active">
                    <i class="fa fa-hashtag"></i>
                    <span class="disappear-content-lg disappear-content-m disappear-content-s disappear-content-xs">Explore</span>
                </a>
                <a href="notifications.html" class="list-group-item">
                    <i class="fa fa-bell"></i> 
                    <span class="disappear-content-lg disappear-content-m disappear-content-s disappear-content-xs">Notifications</span>
                </a>
                <a href="messages.html" class="list-group-item">
                    <i class="fa fa-envelope"></i>
                    <span class="disappear-content-lg disappear-content-m disappear-content-s disappear-content-xs">Messages</span>
                </a>
                <a href="bookmarks.html" class="list-group-item">
                    <i class="fa fa-bookmark"></i>
                    <span class="disappear-content-lg disappear-content-m disappear-content-s disappear-content-xs">Bookmarks</span>
                </a>
                <a href="lists.html" class="list-group-item">
                    <i class="fa fa-list-ul"></i>
                    <span class="disappear-content-lg disappear-content-m disappear-content-s disappear-content-xs">Lists</span>
                </a>
                <a href="profile.html" class="list-group-item">
                    <i class="fa fa-user"></i>
                    <span class="disappear-content-lg disappear-content-m disappear-content-s disappear-content-xs">Profile</span>
                </a>
                <a href="#" class="list-group-item">
                    <i class="fa fa-circle"></i>
                    <span class="disappear-content-lg disappear-content-m disappear-content-s disappear-content-xs">More</span>
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