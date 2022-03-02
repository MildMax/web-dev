import PostList from "./PostList.js";
import postItems from "./postitems.js"


const PostItems = () => {
    return(`
        <ul class="list-group ms-0 me-0 mt-0 mb-0">
            ${postItems.map(item => { return PostList(item)}).join('')}
        </ul>
    `);
}
export default PostItems;