import React from "react";

const TuitListAttachment = ({
    tuit = {
        "mainImage" :"/images/inspirationx_article_image.jpg",
        "imageTitle" : "Countdown: Inspiration4 Mission to Space | Netflix Official Site",
        "imageDescription" : "From training to launch to landing, this all-access docuseries rides along with the Inspiration4 crew on the first all-civilian orbital space ...",
        "externalLink" : "netflix.com",
    }
}) => {
    if (tuit.attachments.image !== undefined) {
        return (
            <img src={tuit.attachments.image}
                 alt=""
                 className="ps-0 pe-0 img-fluid wd-slight-bottom-border-radius wd-slight-top-border-radius wd-border-color-very-dark-grey"/>
        );
    } else if (tuit.attachments.video !== undefined) {
        return (
            <div className="ps-0 pe-0 ratio ratio-16x9 overflow-hidden wd-slight-bottom-border-radius wd-slight-top-border-radius">
                <iframe className="wd-full-width wd-full-height"
                        src={`https://www.youtube.com/embed/${tuit.attachments.video}`}
                        title="embedded-attachment"
                        frameBorder={0}
                        allowFullScreen/>
            </div>
        );
    }
}
export default TuitListAttachment;