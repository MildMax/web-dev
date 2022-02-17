const PostList = (post) => {
    return(`
        <li class="list-group-item wd-transparent-background-override">
            <div class="row">
                <div class="wd-avatar-col ps-3 pe-0">
                    <img class="wd-avatar-image wd-circle-border-radius" src=${post.avatarIcon}/>
                </div>
                <div class="col wd-post-width-override">
                    <div class="row ps-3 pe-3">
                        <p class="mb-0 ps-0 col wd-name-handle-width-override wd-float-left wd-ellipsis-extended-text">
                            <span class="wd-solid-white-text wd-bold-font">${post.userName}</span>
                            <i class="fa fa-check-circle"> </i>
                            <span class="ms-1 wd-light-gray-color">${post.handle} - ${post.time}</span>
                        </p>
                        <a href="#" class="wd-align-text-center wd-light-gray-color wd-ellipses-line-height wd-ellipses-width ps-0 pe-0 wd-float-right">
                            <i class="fa fa-ellipsis-h float-right"> </i>
                        </a>
                    </div>
                    <div class="row ps-3 pe-3">
                        <p class=" ps-0 wd-solid-white-text wd-size-15-font mb-0">
                            ${post.description}
                        </p>
                    </div>
                    <div class="row ps-3 pe-3 pt-2">
                        ${ post.imageTitle === undefined && post.imageDescription === undefined && post.externalLink === undefined ? 
                        `
                            <img src=${post.mainImage}
                                 class="ps-0 pe-0 img-fluid wd-article-image-border wd-slight-bottom-border-radius wd-slight-top-border-radius wd-border-color-very-dark-grey">
                        ` 
                        :
                        `
                            <img src=${post.mainImage}
                                 class="ps-0 pe-0 img-fluid wd-article-image-border wd-slight-top-border-radius wd-border-color-very-dark-grey">
                            <div class="wd-border-color-very-dark-grey wd-slight-bottom-border-radius pt-2 wd-solid-bottom-border">
                                <div class="wd-solid-white-text wd-bold-font wd-ellipsis-extended-text">
                                    ${post.imageTitle}
                                </div>
                                <p class="mb-1 mt-1 wd-light-gray-color ">
                                    ${post.imageDescription}
                                </p>
                                <div class="mt-1 mb-2">
                                    <a href="#" class="wd-light-gray-color wd-remove-link-underline">
                                        <i class="fa fa-link me-1"></i>${post.externalLink}
                                    </a>
                                </div>
                            </div>
                        `
                        }
                        <div class="row pt-2">
                            <div class="col-3 ps-0 pe-0 wd-icon-col-override wd-tuiter-font wd-font-14">
                                <a href="#" class="wd-float-left wd-highlight-border-on-hover wd-remove-link-underline wd-light-gray-color">
                                    <i class="fa fa-icon-override fa-comment"></i>
                                    <span class="ms-2">${post.commentCount}</span>
                                </a>
                            </div>
                            <div class="col-3 ps-0 pe-0 wd-icon-col-override wd-tuiter-font wd-font-14">
                                <a href="#" class="wd-float-left wd-remove-link-underline wd-light-gray-color">
                                    <i class="fa fa-retweet"></i>
                                    <span class="ms-2">${post.retuitCount}</span>
                                </a>
            
                            </div>
                            <div class="col-3 ps-0 pe-0 wd-icon-col-override wd-tuiter-font wd-font-14">
                                <a href="#" class="wd-float-left wd-highlight-border-on-hover wd-light-gray-color wd-remove-link-underline">
                                    <i class="fa fa-icon-override fa-heart"></i>
                                    <span class="ms-2">${post.likeCount}</span>
                                </a>
                            </div>
                            <div class="col-2 ps-0 pe-0 wd-tuiter-font wd-line-height-1-point-4 wd-font-14">
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
};
export default PostList