import React from "react";
import PostSummaryItem from './PostSummaryItem.js';
import explorePosts from './posts.json';

const PostSummaryList = () => {
    return (
        <ul class="list-group border wd-tuit-content-border-color-style-override ms-0 me-0 mt-0 mb-0 rounded">
        {
            explorePosts.map(post => {
                return (
                    <PostSummaryItem post={post}/>
                );
            })
        }
        </ul>
    );
}
export default PostSummaryList;