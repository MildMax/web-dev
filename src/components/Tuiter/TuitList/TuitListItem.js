import React from "react";
import TuitListImage from "./TuitListImage";
import {useDispatch} from "react-redux";
import TuitStats from "../TuitStats";

const TuitListItem = ({
    tuit = {
        "avatarIcon" : "tuiter/images/elon_musk_avatar.jpg",
        "userName" : "Elon Musk",
        "handle" : "@elonmusk",
        "time" : "23h",
        "description" : "Amazing show about <a href='#'>@Inspiration4x</a> mission!",
        "mainImage" :"/images/inspirationx_article_image.jpg",
        "imageTitle" : "Countdown: Inspiration4 Mission to Space | Netflix Official Site",
        "imageDescription" : "From training to launch to landing, this all-access docuseries rides along with the Inspiration4 crew on the first all-civilian orbital space ...",
        "externalLink" : "netflix.com",
        "commentCount" : "4.2K",
        "retuitCount" : "3.5K",
        "likeCount" : "37.5K"
    }
}) => {

    const dispatch = useDispatch();

    const deleteTuitClickHandler = () => {
        dispatch({type: 'delete-tuit', tuit})
    };

    return(
        <li className="list-group-item">
            <div className="row">
                <div className="wd-avatar-col ps-3 pe-0">
                    <img className="wd-avatar-image wd-circle-border-radius" alt="" src={tuit.avatarIcon}/>
                </div>
                <div className="col wd-post-width-override">
                    <div className="row ps-3 pe-3">
                        <p className="mb-0 ps-0 col wd-name-handle-width-override wd-float-left wd-ellipsis-extended-text">
                            <span className="wd-solid-white-text wd-bold-font">{tuit.userName} </span>
                            <i className="fa fa-check-circle"/>
                            <span className="ms-1 wd-light-gray-color">{tuit.handle} - {tuit.time}</span>
                        </p>
                        <button onClick={deleteTuitClickHandler}
                                className="btn wd-transparent-background-override wd-light-gray-color wd-x-width ps-0 pe-0 pt-0 pb-0 wd-float-right">
                            <i className="fas fa-remove fa-pull-right"/>
                        </button>
                    </div>
                    <div className="row ps-3 pe-3">
                        <p className=" ps-0 wd-solid-white-text wd-size-15-font mb-0" dangerouslySetInnerHTML={{__html: tuit.tuit}}/>
                    </div>
                    <div className="row ps-3 pe-3 pt-2">
                        <TuitListImage tuit={tuit}/>
                    </div>
                    <TuitStats tuit={tuit}/>
                </div>
            </div>
        </li>
    );
};
export default TuitListItem;