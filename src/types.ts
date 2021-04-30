
import { ADD_CURRENCY} from './constants';
import {ADD_BRIEFCASE, DELETE_BRIEFCASE} from "./constants";

export interface ICryptoCurrency {
    currencies: [];
}

export interface IGetCurrencyAction {
    type: typeof ADD_CURRENCY,
    payload: ICryptoCurrency,
}

export type TaskCurrencyTypes = IGetCurrencyAction

//briefcases
export interface ICryptoBriefcases {
    name: string | number;
    quantity: string | number;
}



export interface IGetBriefcasesAction {
    type: typeof ADD_BRIEFCASE,
    payload: ICryptoBriefcases,
}
export interface IDeleteBriefcases {
    type: typeof DELETE_BRIEFCASE,
    payload: {
        name: string | number
    },
}

export type TaskBriefCasesTypes = IGetBriefcasesAction | IDeleteBriefcases
