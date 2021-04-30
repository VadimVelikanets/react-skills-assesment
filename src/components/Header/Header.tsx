import React, {useEffect} from 'react'
import './Header.scss'
import {NavLink} from "react-router-dom";
import axios from "axios";
import {addCurrency} from "../../store/actions/actionCurrencyCreater";

interface headerProps {
    currencies: [] | any
}

export const Header: React.FC<headerProps> = ({currencies}) => {

    const curr1: any = currencies[0];
    const curr2: any = currencies[1];
    const curr3: any = currencies[2];


    return(
        <header >
            <div className="container">
                <div className="header-wrapper flex-between align-center">
                    <NavLink exact to="/" className='header-logo btn'>Crypto-App</NavLink>
                    <div className="header-coins">

                        <span className='header-coins__inner'>
                            {curr1 &&
                            (<span className="coin-item">
                                <span className='coin-item__title'>{curr1.symbol}: </span>
                                <span className='coin-item__price'>{Number(curr1.priceUsd).toFixed(2)} USD </span>
                                {Number(curr1.changePercent24Hr) > 0 ?
                                    (<span className='coin-item__change grow'>{Number(curr1.changePercent24Hr).toFixed(2)}; <wbr/></span> )
                                    :
                                    (<span className='coin-item__change fall'>{Number(curr1.changePercent24Hr).toFixed(2)};  <wbr/></span> )
                                }

                            </span> )
                            }
                            {curr2 &&
                            (<span className="coin-item">
                                <span className='coin-item__title'>{curr2.symbol}: </span>
                                <span className='coin-item__price'>{Number(curr2.priceUsd).toFixed(2)} USD </span>
                                {Number(curr3.changePercent24Hr) > 0 ?
                                    (<span className='coin-item__change grow'>{Number(curr2.changePercent24Hr).toFixed(2)}; <wbr/></span> )
                                    :
                                    (<span className='coin-item__change fall'>{Number(curr2.changePercent24Hr).toFixed(2)}; <wbr/></span> )
                                }

                            </span> )
                            }
                            {curr1 &&
                            (<span className="coin-item">
                                <span className='coin-item__title'>{curr3.symbol}: </span>
                                <span className='coin-item__price'>{Number(curr3.priceUsd).toFixed(2)} USD </span>
                                {Number(curr3.changePercent24Hr) > 0 ?
                                    (<span className='coin-item__change grow'>{Number(curr3.changePercent24Hr).toFixed(2)}; <wbr/></span> )
                                    :
                                    (<span className='coin-item__change fall'>{Number(curr3.changePercent24Hr).toFixed(2)};  <wbr/></span> )
                                }

                            </span> )
                            }



                        </span>

                    </div>
                </div>
            </div>

        </header>
    )
}