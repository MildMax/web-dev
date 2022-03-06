import React from "react";

const PostSummaryItem = ({
    post = {
        "topic": "Web Development",
        "userName": "ReactJS",
        "time": "2h",
        "title": "React.js is a component based front end library that makes it very easy to build Single Page Applications or SPAs",
        "image": "/images/react-logo.png"
    }
}) => {
    return (
        <li className="list-group-item">
            <div className="row">
                <div className="col wd-font-16">
                    <div className="row ps-2 pe-2 wd-fg-color-grey-summary-item">{post.topic}</div>
                    <div className="row wd-bold-font ps-2 pe-2">
                        <p className="ms-0 me-0 mt-0 mb-0 ps-0 pe-0 pt-0 pb-0 wd-fg-color-white">
                            <span>{post.userName} </span>
                            <i className="fa fa-check-circle me-1"/>
                            <span className="wd-fg-color-grey-summary-item wd-normal-font">- {post.time} </span>
                        </p>
                    </div>
                    <div className="row wd-bold-font ps-2 pe-2">
                        <p className="ps-0 pe-0 pt-0 pb-0 ms-0 me-0 mt-0 mb-0 wd-line-height-1-point-4 wd-fg-color-white">
                            {post.title}
                        </p>
                    </div>
                </div>
                <div className="col-3 wd-tuit-image-override pe-1 ps-1 ms-2">
                    <img src={post.image} alt="" className="wd-tuit-border-radius wd-tuit-image-size"/>
                </div>
            </div>
        </li>
    );
}
export default PostSummaryItem;