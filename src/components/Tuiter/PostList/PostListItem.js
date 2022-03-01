import React from "react";

const PostListItem = ({
    post = {
        "avatarIcon" : "tuiter/images/elon_musk_avatar.jpg",
        "userName" : "Elon Musk",
        "handle" : "@elonmusk",
        "time" : "23h",
        "description" : "Amazing show about <a href='#'>@Inspiration4x</a> mission!",
        "mainImage" :"/images/inspirationx_article_image.jpg",
        "imageTitle" : "Countdown: Inspiration4 Mission to Space | Netflix Official Site",
        "imageDescription" : "From training to launch to landing, this all-access docuseries rides along with the Inspiration4 crew on the first all-civilian orbital space ...",
        "externalLink" : "netflix.com",
        "commentCount" : "4.2K",
        "retuitCount" : "3.5K",
        "likeCount" : "37.5K"
    }
} ) => {
    return(
        <li className="list-group-item wd-top-bottom-border-override wd-transparent-background-override">
            <div className="row">
                <div className="wd-avatar-col ps-3 pe-0">
                    <img className="wd-avatar-image wd-circle-border-radius" src={post.avatarIcon}/>
                </div>
                <div className="col wd-post-width-override">
                    <div className="row ps-3 pe-3">
                        <p className="mb-0 ps-0 col wd-name-handle-width-override wd-float-left wd-ellipsis-extended-text">
                            <span className="wd-solid-white-text wd-bold-font">{post.userName} </span>
                            <i className="fa fa-check-circle"/>
                            <span className="ms-1 wd-light-gray-color">{post.handle} - {post.time}</span>
                        </p>
                        <a href="#" className="wd-align-text-center wd-light-gray-color wd-ellipses-line-height wd-ellipses-width ps-0 pe-0 wd-float-right">
                            <i className="fa fa-ellipsis-h float-right"> </i>
                        </a>
                    </div>
                    <div className="row ps-3 pe-3">
                        <p className=" ps-0 wd-solid-white-text wd-size-15-font mb-0" dangerouslySetInnerHTML={{__html: post.description}}/>
                    </div>
                    <div className="row ps-3 pe-3 pt-2">
                        {post.imageTitle === undefined && post.imageDescription === undefined && post.externalLink === undefined ?
                            <img src={post.mainImage}
                                 className="ps-0 pe-0 img-fluid wd-article-image-border wd-slight-bottom-border-radius wd-slight-top-border-radius wd-border-color-very-dark-grey"/>
                        :
                            <>
                                <img src={post.mainImage}
                                     className="ps-0 pe-0 img-fluid wd-article-image-border wd-slight-top-border-radius wd-border-color-very-dark-grey"/>
                                <div className="wd-border-color-very-dark-grey wd-slight-bottom-border-radius pt-2 wd-solid-bottom-border">
                                    <div className="wd-solid-white-text wd-bold-font wd-ellipsis-extended-text">
                                        {post.imageTitle}
                                    </div>
                                    <p className="mb-1 mt-1 wd-light-gray-color" dangerouslySetInnerHTML={{__html: post.imageDescription}}/>
                                    <div className="mt-1 mb-2">
                                        <a href="#" className="wd-light-gray-color wd-remove-link-underline">
                                            <i className="fa fa-link me-1"/>
                                            {post.externalLink}
                                        </a>
                                    </div>
                                </div>
                            </>
                        }
                    </div>
                    <div className="row pt-2 wd-icon-padding-top-override pb-1 ps-3 pe-0">
                        <div className="col-3 ps-0 pe-0 wd-tuiter-font wd-font-14">
                            <a href="#" className="wd-float-left wd-highlight-border-on-hover wd-remove-link-underline wd-light-gray-color">
                                <i className="fa wd-fa-icon-override fa-comment"></i>
                                <span className="ms-2">{post.commentCount}</span>
                            </a>
                        </div>
                        <div className="col-3 ps-0 pe-0 wd-tuiter-font wd-font-14">
                            <a href="#" className="wd-float-left wd-remove-link-underline wd-light-gray-color">
                                <i className="fa fa-retweet"></i>
                                <span className="ms-2">{post.retuitCount}</span>
                            </a>
        
                        </div>
                        <div className="col-3 ps-0 pe-0 wd-tuiter-font wd-font-14">
                            <a href="#" className="wd-float-left wd-highlight-border-on-hover wd-light-gray-color wd-remove-link-underline">
                                <i className="fa wd-fa-icon-override fa-heart"></i>
                                <span className="ms-2">{post.likeCount}</span>
                            </a>
                        </div>
                        <div className="col-3 ps-0 pe-0 wd-tuiter-font wd-line-height-1-point-4 wd-font-14">
                            <a href="#" className="wd-remove-link-underline wd-light-gray-color wd-bold-font">
                                <i className="fa fa-upload"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </li>
    );
};
export default PostListItem;