const WhoToFollowListItem = (who) => {
    return(`
        <li class="list-group-item padding-top-bottom-override">
            <div class="row follow-row-override">
                <div class="col-2 image-override">
                    <img src=${who.avatarIcon} class="wd-sidebar-images">
                </div>
                <div class="col-7 follow-handle-override wd-visible-overflow">
                    <div class="row wd-fill-height-half">
                        <p class="col ms-0 me-0 mt-0 mb-0 wd-bold-font">
                            ${who.userName}
                            <i class="col fa fa-check-circle"></i>
                        </p>
                    </div>
                    <div class="row wd-fill-height-half">
                        <p class="ms-0 me-0 mt-0 mb-0">@${who.handle}</p>
                    </div>
                </div>
                <div class="col-4 button-override text-center align-items-center wd-follow-button-container">
                    <button type="button" class="btn btn-primary rounded-pill wd-font-15">Follow</button>
                </div>
            </div>
        </li>
    `);
}
export default WhoToFollowListItem;