import React from 'react';
import {NavLink} from "react-router-dom";

import {Button} from "react-bootstrap";

const MainPage: React.FC = () => {
    return (

            <main>
                <div className="container">
                    <h1>Cryptocurrencies list</h1>
                    <div className='crypto-list'>
                        <table>
                            <tr>
                                <th>Symbol</th>
                                <th>name</th>
                                <th>price	</th>
                                <th>change</th>
                                <th>in case</th>
                            </tr>
                            <tr>
                                <td><NavLink to="/detail/">BTC</NavLink></td>
                                <td><NavLink to="/detail/">Bitcoin</NavLink></td>
                                <td><NavLink to="/detail/">6929.82</NavLink></td>
                                <td><NavLink to="/detail/">-0.81</NavLink></td>
                                <td>
                                    <Button variant="dark">+ Add</Button>
                                </td>
                            </tr>
                            <tr>
                                <td><NavLink to="/detail/">ETH</NavLink></td>
                                <td><NavLink to="/detail/">Ethereum</NavLink></td>
                                <td><NavLink to="/detail/">6929.82</NavLink></td>
                                <td><NavLink to="/detail/">-0.81</NavLink></td>
                                <td>
                                    <Button variant="dark">+ Add</Button>
                                </td>
                            </tr>
                            <tr>
                                <td><NavLink to="/detail/">XRP</NavLink></td>
                                <td><NavLink to="/detail/">XRP</NavLink></td>
                                <td><NavLink to="/detail/">6929.82</NavLink></td>
                                <td><NavLink to="/detail/">-0.81</NavLink></td>
                                <td>
                                    <Button variant="dark">+ Add</Button>
                                </td>
                            </tr>
                        </table>
                    </div>
                </div>

            </main>

    );
}

export default MainPage;
