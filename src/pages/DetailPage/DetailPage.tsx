import React, {useEffect, useState} from 'react';
import {NavLink} from "react-router-dom";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'

import './DetailPage.scss'

interface detailPageProps {
    currencies: []
}

const DetailPage: React.FC<detailPageProps> = ({currencies}) => {
    const id: number  = Number(window.location.pathname.replace('/', ''));
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
    useEffect(() => {

        setCurrencyItem(currencies[id])
        console.log(currencyItem)
    }, []);


    return (

        <>
            <div className="container">
                <NavLink to='/' exact>
                    <div className='flex-start align-center btn-back'>
                        <FontAwesomeIcon icon={faArrowLeft} /><h3>Return to list</h3>
                    </div>
                </NavLink>
                <h1>{currencyItem.id}  ({currencyItem.symbol})</h1>
                <div className="currency-item">
                    <b>Rank:</b> {currencyItem.rank}
                </div>
                <div className="currency-item">
                    <b>supply:</b> {currencyItem.supply}
                </div>
                <div className="currency-item">
                    <b>maxSupply:</b> {currencyItem.maxSupply}
                </div>
                <div className="currency-item">
                    <b>marketCapUsd:</b> {currencyItem.marketCapUsd}
                </div>
                <div className="currency-item">
                    <b>volumeUsd24Hr:</b> {currencyItem.volumeUsd24Hr}
                </div>
                <div className="currency-item">
                    <b>priceUsd:</b> {currencyItem.priceUsd}
                </div>
                <div className="currency-item">
                    <b>changePercent24Hr:</b> {currencyItem.changePercent24Hr}
                </div>
                <div className="currency-item">
                    <b>vwap24Hr:</b> {currencyItem.vwap24Hr}
                </div>
            </div>

        </>

    );
}

export default DetailPage;
