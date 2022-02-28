import React from "react";
import PostListItem from "./PostListItem";
import postItems from "./postitems"


const PostList = () => {
    return(
        <ul class="list-group ms-0 me-0 mt-0 mb-0">
            {postItems.map(item => { return(
                <PostListItem post={item}/>
            );
            })}
        </ul>
    );
}
export default PostList;