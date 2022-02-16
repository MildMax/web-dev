const PostList = (post) => {
    return(`
        <li class="list-group-item wd-transparent-background-override">
            <div class="row">
                <div class="wd-avatar-col ps-2 pe-0">
                    <img class="wd-avatar-image wd-circle-border-radius" src="../images/leprechaun_avatar.png"/>
                </div>
                <div class="col wd-post-width-override">
                    <div class="row ps-3 pe-2">
                        <p class="mb-0 ps-0 col wd-name-handle-width-override wd-float-left wd-ellipsis-extended-text">
                            <span class="wd-solid-white-text wd-bold-font">Robert Zubrin</span>
                            <i class="fa fa-check-circle"> </i>
                            <span class="ms-1 wd-light-gray-color">@robert_zubrin - Jul 31</span>
                        </p>
                        <a href="#" class="wd-align-text-center wd-light-gray-color wd-ellipses-line-height wd-ellipses-width ps-0 pe-0 wd-float-right">
                            <i class="fa fa-ellipsis-h float-right"> </i>
                        </a>
                    </div>
                    <div class="row ps-3 pe-2">
                        <p class=" ps-0 wd-solid-white-text wd-size-15-font wd-0-margin">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                            ex ea commodo consequat.
                        </p>
                    </div>
                    <div class="row ps-3 pe-2 wd-top-padding-12">
                        <img  src="../images/classroom.jpg"
                             class="ps-0 pe-0 img-fluid wd-article-image-border wd-article-image-border-radius wd-border-color-very-dark-grey">
                        <div class="wd-border-color-very-dark-grey wd-article-description-border-radius wd-padding-12 wd-0-margin wd-article-content-border-bottom">
                            <div class="wd-solid-white-text wd-bold-font wd-ellipsis-extended-text wd-padding-right-100">Lorem ipsum
                                dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                                magna aliqua.</div>
                            <p class="wd-0-margin wd-light-gray-color wd-margin-top-2">Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            <div class="wd-margin-top-2">
                                <a href="#" class="wd-0-margin wd-light-gray-color wd-remove-link-underline">tuit.com</a>
                            </div>
                        </div>
                        <div class="row pt-2">
                            <div class="col-3 wd-icon-col-override wd-tuiter-font">
                                <a href="#" class="wd-float-left wd-highlight-border-on-hover wd-remove-link-underline wd-light-gray-color">
                                    <i class="fa fa-icon-override fa-comment"></i>
                                    <span class="ms-2">123</span>
                                </a>
                            </div>
                            <div class="col-3 wd-icon-col-override wd-tuiter-font">
                                <a href="#" class="wd-float-left wd-remove-link-underline wd-light-gray-color">
                                    <i class="fa fa-retweet"></i>
                                    <span class="ms-2">52</span>
                                </a>
            
                            </div>
                            <div class="col-3 wd-icon-col-override wd-tuiter-font ">
                                <a href="#" class="wd-float-left wd-highlight-border-on-hover wd-light-gray-color wd-remove-link-underline">
                                    <i class="fa fa-icon-override fa-heart"></i>
                                    <span class="ms-2">123</span>
                                </a>
                            </div>
                            <div class="col-2 wd-tuiter-font">
                                <a href="#" class="wd-remove-link-underline wd-light-gray-color wd-bold-font">
                                    <i class="fa fa-upload"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </li>
    `)
}
export default PostList