const PostSummaryItem = (post) => {
    return (`
        <li class="list-group-item">
            <div class="row ">
                <div class="col wd-font-16">
                    <div class="row ps-2 pe-2 wd-fg-color-grey-summary-item">${post.topic}</div>
                    <div class="row wd-bold-font ps-2 pe-2">
                        <p class="ms-0 me-0 mt-0 mb-0 ps-0 pe-0 pt-0 pb-0 wd-fg-color-white">
                            ${post.userName}
                            <i class="fa fa-check-circle"> </i>
                            <span class="wd-fg-color-grey-summary-item wd-normal-font"> - ${post.time} </span>
                        </p>
                    </div>
                    <div class="row wd-bold-font ps-2 pe-2">
                        <p class="ps-0 pe-0 pt-0 pb-0 ms-0 me-0 mt-0 mb-0 wd-line-height-1-point-4 wd-fg-color-white">
                            ${post.title}
                        </p>
                    </div>
                </div>
                <div class="col-3 tuit-image-override pe-1 ps-1 ms-2">
                    <img src=${post.image} class="wd-tuit-border-radius wd-tuit-image-size"/>
                </div>
            </div>
        </li>
    `);
}
export default PostSummaryItem;