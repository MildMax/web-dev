import React from "react";
import {Link} from "react-router-dom";
import PostListImage from "./PostListImage";

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
}) => {
    return(
        <li className="list-group-item wd-top-bottom-border-override wd-transparent-background-override">
            <div className="row">
                <div className="wd-avatar-col ps-3 pe-0">
                    <img className="wd-avatar-image wd-circle-border-radius" alt="" src={post.avatarIcon}/>
                </div>
                <div className="col wd-post-width-override">
                    <div className="row ps-3 pe-3">
                        <p className="mb-0 ps-0 col wd-name-handle-width-override wd-float-left wd-ellipsis-extended-text">
                            <span className="wd-solid-white-text wd-bold-font">{post.userName} </span>
                            <i className="fa fa-check-circle"/>
                            <span className="ms-1 wd-light-gray-color">{post.handle} - {post.time}</span>
                        </p>
                        <Link to="/tuiter/more" className="wd-align-text-center wd-light-gray-color wd-ellipses-line-height wd-ellipses-width ps-0 pe-0 wd-float-right">
                            <i className="fa fa-ellipsis-h float-right"> </i>
                        </Link>
                    </div>
                    <div className="row ps-3 pe-3">
                        <p className=" ps-0 wd-solid-white-text wd-size-15-font mb-0" dangerouslySetInnerHTML={{__html: post.description}}/>
                    </div>
                    <div className="row ps-3 pe-3 pt-2">
                        <PostListImage post={post}/>
                    </div>
                    <div className="row pt-2 wd-icon-padding-top-override pb-1 ps-3 pe-0">
                        <div className="col-3 ps-0 pe-0 wd-tuiter-font wd-font-14">
                            <button className="btn wd-focus-override wd-button-icon-override wd-float-left wd-highlight-border-on-hover wd-remove-link-underline wd-light-gray-color">
                                <i className="fa wd-fa-icon-override fa-comment"/>
                                <span className="ms-2">{post.commentCount}</span>
                            </button>
                        </div>
                        <div className="col-3 ps-0 pe-0 wd-tuiter-font wd-font-14">
                            <button className="btn wd-focus-override wd-text-color-on-hover wd-button-icon-fill-on-hover wd-button-icon-override wd-float-left wd-remove-link-underline wd-light-gray-color">
                                <i className="fa fa-retweet"/>
                                <span className="ms-2">{post.retuitCount}</span>
                            </button>
                        </div>
                        <div className="col-3 ps-0 pe-0 wd-tuiter-font wd-font-14">
                            <button className="btn wd-focus-override wd-button-icon-override wd-float-left wd-highlight-border-on-hover wd-remove-link-underline wd-light-gray-color">
                                <i className="fa wd-fa-icon-override fa-heart"/>
                                <span className="ms-2">{post.likeCount}</span>
                            </button>
                        </div>
                        <div className="col-3 ps-0 pe-0 wd-tuiter-font wd-line-height-1-point-4 wd-font-14">
                            <button className="btn wd-focus-override wd-button-icon-fill-on-hover wd-button-icon-override wd-float-left wd-remove-link-underline wd-light-gray-color">
                                <i className="fa fa-upload"/>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </li>
    );
};
export default PostListItem;