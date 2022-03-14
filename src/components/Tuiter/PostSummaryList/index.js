import React from "react";
import PostSummaryItem from './PostSummaryItem';
import explorePosts from './posts.json';

const PostSummaryList = ({title = "What's happening"}) => {
    return (
        <ul className="list-group border wd-tuit-content-border-color-style-override ms-0 me-0 mt-0 mb-0 rounded">
            <li className="list-group-item">
                <h5 className="fw-bold">{title}</h5>
            </li>
            {
                explorePosts.map(post => {
                    return (
                        <PostSummaryItem key={post._id} post={post}/>
                    );
                })
            }
        </ul>
    );
}
export default PostSummaryList;