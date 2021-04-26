import React from 'react'
import './Header.scss'
import {NavLink} from "react-router-dom";

export const Header: React.FC = () => {
    return(
        <header >
            <div className="container">
                <div className="header-wrapper flex-between align-center">
                    <NavLink exact to="/" className='header-logo btn'>Crypto-App</NavLink>
                    <div className="header-coins">
                        <span className='header-coins__inner'>
                            <span className="coin-item">
                                <span className='coin-item__title'>BTC: </span>
                                <span className='coin-item__price'>134,32 USD </span>
                                <span className='coin-item__change grow'>+2,38 (1,80 %)</span>
                            </span> <wbr/>
                            <span className="coin-item">
                                <span className='coin-item__title'>ETH: </span>
                                <span className='coin-item__price'>134,32 USD </span>
                                <span className='coin-item__change fall'>-2,38 (1,80 %)</span>
                            </span> <wbr/>
                            <span className="coin-item">
                                <span className='coin-item__title'>XRP: </span>
                                <span className='coin-item__price'>134,32 USD </span>
                                <span className='coin-item__change grow'>+2,38 (1,80 %)</span>
                            </span>
                        </span>

                    </div>
                </div>
            </div>

        </header>
    )
}