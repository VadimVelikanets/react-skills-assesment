import React, {useEffect, useState} from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes, faTrashAlt } from '@fortawesome/free-solid-svg-icons'
import './Popup.scss'
import {Button} from "react-bootstrap";

interface PopupBriefCaseProps {
    hideBriefcasePopupHandler: (e:  React.MouseEvent<HTMLAnchorElement | HTMLDivElement>) => void;
    selectedBriefCase: number;
    currencies:  [];
    briefcaseHandler: IFormatter
}

interface IFormatter {
    (currencyName: string | number, inputValue : number | string): void;
};

export const PopupAddBriefCase: React.FC<PopupBriefCaseProps> = ({hideBriefcasePopupHandler, selectedBriefCase, currencies, briefcaseHandler}) => {

    interface currencyTypes{
        id: number | string;
        rank: number | string;
        symbol: string;
        name: string;
        supply: number | string;
        maxSupply: number | string;
        marketCapUsd: number | string;
        volumeUsd24Hr: number | string;
        priceUsd: number | string;
        changePercent24Hr: number | string;
        vwap24Hr: number | string;
    }
    const [currencyItem, setCurrencyItem] = useState<currencyTypes>({
        id: '',
        rank: '',
        symbol: '',
        name: '',
        supply: '',
        maxSupply: '',
        marketCapUsd: '',
        volumeUsd24Hr: '',
        priceUsd: '',
        changePercent24Hr: '',
        vwap24Hr: ''
    })
    const [currencyName, setCurrencyName] = useState<string | number>('')
    useEffect(() => {

        setCurrencyItem(currencies[selectedBriefCase])
        console.log(currencyItem.id)
        setCurrencyName(currencyItem.id)


    } );

    const [inputValue, setInputValue] = useState<string | number>('')

    const onChangeHandler = (e: React.FormEvent<HTMLInputElement>) =>{
        //check number value
        const re: any = /^[0-9]*(?:\,[0-9]*)?$/;

        if (e.currentTarget.value === '' || re.test(e.currentTarget.value)) {
            setInputValue(e.currentTarget.value)
        }

    }

    return(
    <>
            <div className="popup-container" onClick={ hideBriefcasePopupHandler}></div>
            <div className="popup popup_briefcase">
                <a href="#" className='btn-close-popup' onClick={ hideBriefcasePopupHandler}>
                    <FontAwesomeIcon icon={faTimes}/>
                </a>
                <div className="add-briefcase">
                    <div>
                        <b>Add in briefcase</b>
                    </div>
                    <h3>
                         {currencyItem.id}
                    </h3>
                    <div>
                        <input value={inputValue} onChange={onChangeHandler} type="text" placeholder='Select quantity (1,99 example)'/>
                    </div>

                    <Button
                        onClick={() => briefcaseHandler(currencyName, inputValue)}
                        variant="info" size="lg" active
                    >
                        +ADD
                    </Button>
                </div>

            </div>
        </>
    )
}