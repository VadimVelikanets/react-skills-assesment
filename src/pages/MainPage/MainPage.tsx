import React, {useState} from 'react';
import {NavLink} from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLongArrowAltUp, faLongArrowAltDown } from '@fortawesome/free-solid-svg-icons'
import {Button} from "react-bootstrap";
import {Pagination} from "../../components/Pagination/Pagination";
import {addNewBriefcase} from "../../store/actions/actionBriefcaseCreater";
interface mainPageProps {
    currencies: any | [];
    addBriefcaseHandler: ( index: number) => number;
}
const MainPage: React.FC<mainPageProps> = ({currencies, addBriefcaseHandler}) => {

    const [posts, setPosts] = useState<[]>([]);
    const [loading, setLoading] = useState<boolean>(false);
    const [currentPage, setCurrentPage] = useState<number>(1);
    const [postsPerPage] = useState<number>(10);


    const changePageHander = (selectedPage: number): any => {

        console.log(selectedPage)
        setCurrentPage(selectedPage)

    }

    const indexOfLastPost: number = currentPage * postsPerPage;
    const indexOfFirstPost: number = indexOfLastPost - postsPerPage;
    const currentPosts: [] = currencies.slice(indexOfFirstPost, indexOfLastPost);

    // Change page
    const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

    const currItems = currentPosts.map((item:any, index: any) =>{
        const link = "/" + index;

        return(
            <tr key={index}>
                <td><NavLink to={link}>{item.symbol}</NavLink></td>
                <td><NavLink to={link}>{item.id}</NavLink></td>
                <td><NavLink to={link}>{item.priceUsd}</NavLink></td>
                {Number(item.changePercent24Hr) > 0 ?
                    (<td><NavLink to={link}>
                        <FontAwesomeIcon icon={faLongArrowAltUp}/>
                        <span>
                            {item.changePercent24Hr}
                        </span>

                    </NavLink></td>)
                    :
                    (<td><NavLink to={link}>
                        <FontAwesomeIcon icon={faLongArrowAltDown}/>
                        <span>
                            {item.changePercent24Hr}
                        </span>

                    </NavLink></td>)
                }

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
                    <Pagination changePageHander={changePageHander} />
                </div>

            </>

    );
}

export default MainPage;
