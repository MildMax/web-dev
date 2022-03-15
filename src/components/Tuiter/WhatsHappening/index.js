import React, {useState} from "react";
import {useDispatch} from "react-redux";
import './whatsHappening.css';

const WhatsHappening = () => {

    let [whatsHappening, setWhatsHappening] = useState('');

    const dispatch = useDispatch();

    const tuitClickHandler = () => {
        dispatch({type: 'create-tuit',
            tuit: whatsHappening
        });
        setWhatsHappening('');
    }

    return(
        <div className="row ms-0 me-0">
            <div className="col-2 wd-whats-happening-icon-override pe-0">
                <img src="/images/doom_guy.jpg" alt="" className="wd-avatar-image wd-circle-border-radius"/>
            </div>
            <div className="col-10  ps-0 pe-0">
                <div className="ms-0 me-0 pb-2 wd-tuit-text-area-bottom-border wd-full-width">
                    <textarea className="wd-bg-color-black wd-transparent-border wd-no-focus wd-fg-color-white wd-disable-textarea-resize wd-full-width"
                              rows={2}
                              value={whatsHappening}
                              onChange={(event) => setWhatsHappening(event.target.value)}
                              placeholder="What's happening?"
                    >
                    </textarea>
                </div>
                <div className="ms-0 me-0 pt-3">
                    <div className="wd-inline-flex-container wd-justify-space-between wd-tuit-text-area-icons-dims">
                        <button className="wd-button-icon">
                            <i className="far fa-image wd-tuit-text-area-icon-color"/>
                        </button>
                        <button className="wd-button-icon">
                            <i className="fa fa-chart-line wd-tuit-text-area-icon-color"/>
                        </button>
                        <button className="wd-button-icon">
                            <i className="far fa-smile wd-tuit-text-area-icon-color"/>
                        </button>
                        <button className="wd-button-icon">
                            <i className="far fa-calendar wd-tuit-text-area-icon-color"/>
                        </button>
                    </div>

                    <button className="btn btn-primary btn-block rounded-pill wd-float-right wd-tuit-text-area-tweet-button-dims" onClick={tuitClickHandler}>
                        Tweet
                    </button>
                </div>
            </div>
        </div>
    );
}
export default WhatsHappening;
