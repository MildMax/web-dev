import React from "react";
import {useDispatch} from "react-redux";

const convertStat = (stat = 1000) => {
    if (stat >= 1000) {
        let lead = Math.floor(stat / 1000);
        let follow = Math.floor((stat % 1000) / 100);
        return `${lead}.${follow}K`
    } else {
        return stat;
    }
}

const TuitStats = ({tuit = {
    "liked": false,
    "stats": {
        "comments": 123,
        "retuits": 234,
        "likes": 456
    }
}}) => {

    const dispatch = useDispatch();

    const likeClickHandler = () => {
        dispatch({type: 'like-tuit', tuit});
    };


    return(
        <div className="row pt-2 wd-icon-padding-top-override pb-1 ps-3 pe-0">
            <div className="col-3 ps-0 pe-0 wd-tuiter-font wd-font-14">
                <button className="btn wd-focus-override wd-button-icon-override wd-float-left wd-remove-link-underline wd-light-gray-color">
                    <i className="far fa-comment"/>
                    <span className="ms-2">{convertStat(tuit.stats.comments)}</span>
                </button>
            </div>
            <div className="col-3 ps-0 pe-0 wd-tuiter-font wd-font-14">
                <button className="btn wd-focus-override wd-button-icon-override wd-float-left wd-remove-link-underline wd-light-gray-color">
                    <i className="fa fa-retweet"/>
                    <span className="ms-2">{convertStat(tuit.stats.retuits)}</span>
                </button>
            </div>
            <div className="col-3 ps-0 pe-0 wd-tuiter-font wd-font-14">
                <button onClick={likeClickHandler} className="btn wd-focus-override wd-button-icon-override wd-float-left wd-remove-link-underline wd-light-gray-color">
                    {
                        tuit.liked && <i className="fa fa-heart"
                                         style={{color: tuit.liked ? "red": "white"}}/>
                    }
                    {
                        !tuit.liked && <i className="far fa-heart"/>
                    }
                    <span className="ms-2">{convertStat(tuit.stats.likes)}</span>
                </button>
            </div>
            <div className="col-3 ps-0 pe-0 wd-tuiter-font wd-line-height-1-point-4 wd-font-14">
                <button className="btn wd-focus-override wd-button-icon-override wd-float-left wd-remove-link-underline wd-light-gray-color">
                    <i className="fa fa-upload"/>
                </button>
            </div>
        </div>
    );
}
export default TuitStats;