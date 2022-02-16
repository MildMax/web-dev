const PostList = (post) => {
    return(`
        <li class="list-group-item">
            <div class="row">
                <div class="wd-avatar-col pe-0">
                    <img class="wd-avatar-image wd-circle-border-radius" src="../images/leprechaun_avatar.png"/>
                </div>
                <div class="col">
                    <div class="row">
                        <p class="mb-0 col wd-float-left">
                            <span class="wd-solid-white-text wd-bold-font">Robert Zubrin</span>
                            <i class="fa fa-check-circle"> </i>
                            <span class="ms-1 wd-light-gray-color">@robert_zubrin - Jul 31</span>
                        </p>
                        <div class="btn wd-ellipses-line-height col-1 wd-float-right">
                            <i class="fa fa-ellipsis-h float-right"> </i>
                        </div>
                    </div>
                    <div class="row">
                        <p class="wd-tuit-text-container wd-solid-white-text wd-size-15-font wd-0-margin">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                            ex ea commodo consequat.
                        </p>
                    </div>
                    <div class="row wd-top-padding-12">
                        <div class="wd-article-image-container-dimensions">
                            <img src="images/classroom.jpg"
                                 class="wd-article-image-border wd-article-image-border-radius wd-border-color-very-dark-grey wd-article-image-dimensions">
                        </div>
                        <div class="wd-border-color-very-dark-grey wd-article-description-border-radius wd-article-description-container wd-padding-12 wd-0-margin wd-article-content-border-bottom">
                            <p class="wd-0-margin wd-solid-white-text wd-bold-font wd-ellipsis-extended-text wd-padding-right-100">Lorem ipsum
                                dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                                magna aliqua.</p>
                            <p class="wd-0-margin wd-light-gray-color wd-margin-top-2">Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            <div class="wd-margin-top-2">
                                <a href="#" class="wd-0-margin wd-light-gray-color wd-remove-link-underline">tuit.com</a>
                            </div>
                        </div>
                        <div class="wd-justify-left wd-link-box wd-article-link-box-container wd-padding-top-bottom-12">
                            <div class="wd-flex-link wd-padding-right-88 wd-align-text-left wd-tuiter-font">
                                <a href="#" class="wd-float-left wd-remove-link-underline wd-light-gray-color">
                                    <span class="wd-float-left wd-bold-font">&#128493</span>
                                    <span class="wd-float-left wd-margin-left-12">123</span>
                                </a>
                            </div>
                            <div class="wd-flex-link wd-padding-right-88 wd-align-text-left wd-tuiter-font">
                                <a href="#" class="wd-float-left wd-remove-link-underline wd-light-gray-color">
                                    <span class="wd-float-left wd-bold-font">&#8635</span>
                                    <span class="wd-float-left wd-margin-left-12">52</span>
                                </a>
            
                            </div>
                            <div class="wd-flex-link wd-padding-right-88 wd-align-text-left wd-tuiter-font ">
                                <a href="#" class="wd-float-left wd-remove-link-underline wd-fg-color-red">
                                    <span class="wd-float-left wd-bold-font">&#9829</span>
                                    <span class="wd-float-left wd-margin-left-12">123</span>
                                </a>
                            </div>
                            <div class="wd-flex-link wd-padding-right-88 wd-align-text-left wd-tuiter-font">
                                <a href="#" class="wd-remove-link-underline wd-light-gray-color wd-bold-font">&#8593</a>
                            </div>
                            <div class="wd-float-done"></div>
                        </div>
                    </div>
                </div>
            </div>
        </li>
    `)
}
export default PostList