import {  ADD_CURRENCY } from '../../constants';

import { load } from 'redux-localstorage-simple';

import { ICryptoCurrency, IGetCurrencyAction, TaskCurrencyTypes } from '../../types';



type stateCurrencies = [];

const savedCurrencies: any = load({ namespace: 'cryptocurrencies' });

const initialState: [] =  [];

const currencies = (state = initialState, action: TaskCurrencyTypes): any => {
    switch (action.type) {
        case ADD_CURRENCY :
            return  action.payload.currencies;
        default:
            return state;
    }
}

export default currencies;