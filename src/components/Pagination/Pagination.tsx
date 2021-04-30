import React from 'react'
import './Pagination.scss'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes, faTrashAlt } from '@fortawesome/free-solid-svg-icons'

interface PaginationProps {
    changePageHander: IPages
}

interface IPages {
    (selectedPage: number): void;
};

export const Pagination: React.FC<PaginationProps> = ({changePageHander}) => {
    return (
        <div className="pagination flex">
            <a
                onClick={() => changePageHander(1)}
                href="#" > start </a>
            <a
                onClick={() => changePageHander(1)}
                href="#">1</a>
            <a
                onClick={() => changePageHander(2)}
                href="#">2</a>
            <a
                onClick={() => changePageHander(3)}
                href="#">3</a>
            <a
                onClick={() => changePageHander(4)}
                href="#">4</a>
            <a
                onClick={() => changePageHander(5)}
                href="#">5</a>
            <a
                onClick={() => changePageHander(6)}
                href="#">finish</a>
        </div>
    )
}