import React from "react";

const TuitListImage = ({
    tuit = {
        "mainImage" :"/images/inspirationx_article_image.jpg",
        "imageTitle" : "Countdown: Inspiration4 Mission to Space | Netflix Official Site",
        "imageDescription" : "From training to launch to landing, this all-access docuseries rides along with the Inspiration4 crew on the first all-civilian orbital space ...",
        "externalLink" : "netflix.com",
    }
}) => {
    if (tuit.imageTitle === undefined && tuit.imageDescription === undefined && tuit.externalLink === undefined) {
        return (
            <img src={tuit.mainImage}
                 alt=""
                 className="ps-0 pe-0 img-fluid wd-article-image-border wd-slight-bottom-border-radius wd-slight-top-border-radius wd-border-color-very-dark-grey"/>
        );
    } else {
        return (
            <>
                <img src={tuit.mainImage}
                     alt=""
                     className="ps-0 pe-0 img-fluid wd-article-image-border wd-slight-top-border-radius wd-border-color-very-dark-grey"/>
                <div
                    className="wd-border-color-very-dark-grey wd-slight-bottom-border-radius pt-2 wd-solid-bottom-border">
                    <div className="wd-solid-white-text wd-bold-font wd-ellipsis-extended-text">
                        {tuit.imageTitle}
                    </div>
                    <p className="mb-1 mt-1 wd-light-gray-color"
                       dangerouslySetInnerHTML={{__html: tuit.imageDescription}}/>
                    <div className="mt-1 mb-2">
                        <a href={"https://" + tuit.externalLink} className={"wd-light-gray-color wd-remove-link-underline"}>
                            <i className="fa fa-link me-1"/>
                            {tuit.externalLink}
                        </a>
                    </div>
                </div>
            </>
        );
    }
}
export default TuitListImage;