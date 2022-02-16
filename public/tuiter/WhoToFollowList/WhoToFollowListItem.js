const WhoToFollowListItem = (who) => {
    return (`
        <li class="list-group-item  list-group-follow-override wd-display-flex wd-display-items-middle-vertical">
            <img src=${who.avatarIcon} class="wd-float-left wd-sidebar-images"/>
            <div class="wd-float-left wd-display-inline-block wd-fill-follow-tags-width wd-follow-tag-padding wd-visible-overflow wd-line-height-1-point-4">
                <div class="row wd-fill-height-45-percent">
                    <p class="col ms-0 me-0 mt-0 mb-0 wd-bold-font">
                        ${who.userName}
                        <i class="col fa fa-check-circle"></i>
                    </p>
                </div>
                <div class="row wd-fill-height-45-percent">
                    <p class="wd-fg-color-greyish-white ms-0 me-0 mt-0 mb-0">@${who.handle}</p>
                </div>
            </div>
            <button type="button" class="btn btn-primary rounded-pill wd-font-15 wd-float-right">Follow</button>
        </li>
    `)
}
export default WhoToFollowListItem;