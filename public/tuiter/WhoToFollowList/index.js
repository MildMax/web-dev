import WhoToFollowListItem from "./WhoToFollowListItem.js";
import who from "./who.js"

const WhoToFollowList = () => {
    return (`
            <ul class="list-group">
                <li class="list-group-item padding-top-bottom-override">
                    <p class="ms-0 me-0 mt-0 mb-0 wd-bold-font">Who to follow</p>
                </li>
                ${
                who.map(todo => {
                    return(WhoToFollowListItem(todo));
                }).join('')}
            </ul>
`); }
export default WhoToFollowList;