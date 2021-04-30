import React, {useEffect} from 'react';


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes, faTrashAlt } from '@fortawesome/free-solid-svg-icons'
import './Popup.scss'

import {useDispatch} from "react-redux";
import {deleteBriefcase} from "../../store/actions/actionBriefcaseCreater";
interface PopupBriefCaseProps {
    hideBriefcasePopupHandler: (e:  React.MouseEvent<HTMLAnchorElement | HTMLDivElement>) => void;
    briefcases: object[]
}

export const PopupBriefCase: React.FC<PopupBriefCaseProps> = ({briefcases, hideBriefcasePopupHandler}) => {
    const dispatch = useDispatch()
    const deleteBriefcaseHandler = (value: string): any => {
        dispatch(deleteBriefcase(value))
    }
    const briefcaseItems = briefcases.map((item:any, index) =>{

        return(
        <div className="briefcase-item flex-between" key={index}>
            <span>{item.title} ({item.quantity})</span>
            <button className='btn-remove' onClick={() => deleteBriefcaseHandler(item.title)}>
                <FontAwesomeIcon icon={faTrashAlt}/>
            </button>
        </div>
        )
    })
    useEffect(() => {
        console.log(briefcases, 'br')
    }, [])
    return(
        <>
            <div className="popup-container" onClick={ hideBriefcasePopupHandler}></div>
            <div className="popup popup_briefcase">
                <a href="#" className='btn-close-popup' onClick={ hideBriefcasePopupHandler}>
                    <FontAwesomeIcon icon={faTimes}/>
                </a>

                <div><b>Your briefcases:</b></div>

                {briefcaseItems.length > 0 ? briefcaseItems:
                    (<div>Briefcases not found</div>)
                }
            </div>
        </>
    )
}