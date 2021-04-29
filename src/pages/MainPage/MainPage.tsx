import React from 'react';
import {NavLink} from "react-router-dom";

import {Button} from "react-bootstrap";

interface mainPageProps {
    currencies: [];
    addBriefcaseHandler: ( index: number) => number;
}
const MainPage: React.FC<mainPageProps> = ({currencies, addBriefcaseHandler}) => {
    const currItems = currencies.map((item:any, index) =>{
        const link = "/" + index;

    // const addBriefcaseHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    //
    // }
        return(
            <tr key={index}>
                <td><NavLink to={link}>{item.symbol}</NavLink></td>
                <td><NavLink to={link}>{item.id}</NavLink></td>
                <td><NavLink to={link}>{item.priceUsd}</NavLink></td>
                <td><NavLink to={link}>{item.changePercent24Hr}</NavLink></td>
                <td>
                    <Button variant="dark" onClick={() => addBriefcaseHandler( index)}>+ Add</Button>
                </td>
            </tr>
        )
    }


    );
    return (

            <>
                <div className="container">
                    <h1>Cryptocurrencies list</h1>

                    <div className='crypto-list'>
                        <table>

                            <thead>
                                <tr>
                                    <th>Symbol</th>
                                    <th>name</th>
                                    <th>price	</th>
                                    <th>change</th>
                                    <th>in case</th>
                                </tr>
                            </thead>
                            <tbody>

                            {currItems && currItems}
                            </tbody>

                        </table>
                    </div>
                </div>

            </>

    );
}

export default MainPage;
