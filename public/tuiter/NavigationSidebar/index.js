const NavigationSidebar = () => {
    return(`
            <div class="list-group">
                <a class="list-group-item" href="/">
                    <i class="fab fa-twitter"></i></a>
                <a class="list-group-item" href="home.html">
                    <i class="fa fa-home"></i>
                    Home
                </a>
                <a href="explore.html" class="list-group-item active">
                    <i class="fa fa-hashtag"></i>
                    Explore
                </a>
                <a href="notifications.html" class="list-group-item">
                    <i class="fa fa-bell"></i>
                    Notifications
                </a>
                <a href="messages.html" class="list-group-item">
                    <i class="fa fa-envelope"></i>
                    Messages
                </a>
                <a href="bookmarks.html" class="list-group-item">
                    <i class="fa fa-bookmark"></i>
                    Bookmarks
                </a>
                <a href="lists.html" class="list-group-item">
                    <i class="fa fa-list-ul"></i>
                    Lists
                </a>
                <a href="profile.html" class="list-group-item">
                    <i class="fa fa-user"></i>
                    Profile
                </a>
                <a href="#" class="list-group-item">
                    <i class="fa fa-circle"></i>
                    More
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