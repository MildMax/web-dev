import React from "react";
import {useDispatch} from "react-redux";
import {updateTuit} from "../../../actions/tuits-actions";

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
        "likes": 456,
        "dislikes": 789
    }
}}) => {

    const dispatch = useDispatch();

    return(
        <div className="row pt-2 wd-icon-padding-top-override wd-justify-space-between pb-1 ps-3 pe-0">
            <div className="col-2 ps-0 pe-0 wd-tuiter-font wd-font-14">
                <button className="btn wd-focus-override wd-button-icon-override wd-float-left wd-remove-link-underline wd-light-gray-color">
                    <i className="far fa-comment"/>
                    <span className="ms-2">{convertStat(tuit.stats.comments)}</span>
                </button>
            </div>
            <div className="col-2 ps-0 pe-0 wd-tuiter-font wd-font-14">
                <button className="btn wd-focus-override wd-button-icon-override wd-float-left wd-remove-link-underline wd-light-gray-color">
                    <i className="fa fa-retweet"/>
                    <span className="ms-2">{convertStat(tuit.stats.retuits)}</span>
                </button>
            </div>
            <div className="col-2 ps-0 pe-0 wd-tuiter-font wd-font-14">
                <button onClick={() => updateTuit(dispatch, {
                            ...tuit,
                            stats: {
                                ...tuit.stats,
                                likes: tuit.liked ? tuit.stats.likes - 1 : tuit.stats.likes + 1,
                                dislikes: tuit.disliked ? tuit.stats.dislikes - 1 : tuit.stats.dislikes
                            },
                            liked: !tuit.liked,
                            disliked: tuit.disliked ? !tuit.disliked : tuit.disliked
                        })}
                        className="btn wd-focus-override wd-button-icon-override wd-float-left wd-remove-link-underline wd-light-gray-color">
                    {
                        tuit.liked && <i className="fa fa-thumbs-up"
                                         style={{color: "red"}}/>
                    }
                    {
                        !tuit.liked && <i className="far fa-thumbs-up"/>
                    }
                    <span className="ms-2">{tuit.stats && convertStat(tuit.stats.likes)}</span>
                </button>
            </div>
            <div className="col-2 ps-0 pe-0 wd-tuiter-font wd-font-14">
                <button onClick={() => updateTuit(dispatch, {
                    ...tuit,
                    stats: {
                        ...tuit.stats,
                        likes: tuit.liked ? tuit.stats.likes - 1 : tuit.stats.likes,
                        dislikes: tuit.disliked ? tuit.stats.dislikes - 1 : tuit.stats.dislikes + 1
                    },
                    liked: tuit.liked ? !tuit.liked : tuit.liked,
                    disliked: !tuit.disliked
                })}
                        className="btn wd-focus-override wd-button-icon-override wd-float-left wd-remove-link-underline wd-light-gray-color">
                    {
                        tuit.disliked && <i className="fa fa-thumbs-down"
                                         style={{color: "lightblue"}}/>
                    }
                    {
                        !tuit.disliked && <i className="far fa-thumbs-down"/>
                    }
                    <span className="ms-2">{tuit.stats && convertStat(tuit.stats.dislikes)}</span>
                </button>
            </div>
            <div className="col-2 ps-0 pe-0 wd-tuiter-font wd-line-height-1-point-4 wd-font-14">
                <button className="btn wd-focus-override wd-button-icon-override wd-float-left wd-remove-link-underline wd-light-gray-color">
                    <i className="fa fa-arrow-up-right-from-square"/>
                </button>
            </div>
        </div>
    );
}
export default TuitStats;