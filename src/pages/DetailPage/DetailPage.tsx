import React from 'react';
import {NavLink} from "react-router-dom";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'

import './DetailPage.scss'
const DetailPage: React.FC = () => {
    return (

        <main>
            <div className="container">
                <NavLink to='/' exact>
                    <div className='flex-start align-center btn-back'>
                        <FontAwesomeIcon icon={faArrowLeft} /><h3>Return to list</h3>
                    </div>
                </NavLink>
                <h1>Bitcoin (BTC)</h1>
                <div className="currency-item">
                    <b>Rank:</b> 1
                </div>
                <div className="currency-item">
                    <b>supply:</b> 1
                </div>
                <div className="currency-item">
                    <b>Rank:</b> 17193925.0000000000000000
                </div>
                <div className="currency-item">
                    <b>maxSupply:</b> 21000000.0000000000000000
                </div>
                <div className="currency-item">
                    <b>marketCapUsd:</b> 119179791817.6740161068269075
                </div>
                <div className="currency-item">
                    <b>volumeUsd24Hr:</b> 2928356777.6066665425687196
                </div>
                <div className="currency-item">
                    <b>priceUsd:</b> 6931.5058555666618359
                </div>
                <div className="currency-item">
                    <b>changePercent24Hr:</b> -0.8101417214350335
                </div>
                <div className="currency-item">
                    <b>vwap24Hr:</b> 7175.0663247679233209
                </div>
            </div>

        </main>

    );
}

export default DetailPage;
