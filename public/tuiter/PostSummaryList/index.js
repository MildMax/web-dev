import PostSummaryItem from './PostSummaryItem.js';
import exploreItems from './posts.js';

const PostSummaryList = () => {
    return (`
        <ul class="list-group border tuit-content-border-color-style-override ms-0 me-0 mt-0 mb-0 rounded">
        ${
            exploreItems.map(item => { return PostSummaryItem(item)}).join('')
        }
        </ul>
    `);
}
export default PostSummaryList;