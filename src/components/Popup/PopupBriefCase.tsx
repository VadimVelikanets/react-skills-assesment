import React from 'react';


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes, faTrashAlt } from '@fortawesome/free-solid-svg-icons'
import './Popup.scss'

interface PopupBriefCaseProps {
    hideBriefcasePopupHandler: (e:  React.MouseEvent<HTMLAnchorElement | HTMLDivElement>) => void;
}
export const PopupBriefCase: React.FC<PopupBriefCaseProps> = (props) => {



    return(
        <>
            <div className="popup-container" onClick={ props.hideBriefcasePopupHandler}></div>
            <div className="popup popup_briefcase">
                <a href="#" className='btn-close-popup' onClick={ props.hideBriefcasePopupHandler}>
                    <FontAwesomeIcon icon={faTimes}/>
                </a>
                <div><b>Your briefcases:</b></div>

                <div className="briefcase-item flex-between">
                    <span>Bitcoin (BTC)</span>
                    <button className='btn-remove'>
                        <FontAwesomeIcon icon={faTrashAlt}/>
                    </button>
                </div>
                <div className="briefcase-item flex-between">
                    <span>Ethereum (ETH)</span>
                    <button className='btn-remove'>
                        <FontAwesomeIcon icon={faTrashAlt}/>
                    </button>
                </div>
                <div className="briefcase-item flex-between">
                    <span>XRP (XRP)</span>
                    <button className='btn-remove'>
                        <FontAwesomeIcon icon={faTrashAlt}/>
                    </button>
                </div>
            </div>
        </>
    )
}