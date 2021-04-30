
import {  ADD_CURRENCY } from '../../constants';

import {  TaskCurrencyTypes } from '../../types';


export const addCurrency = (currencies: any): TaskCurrencyTypes => ({
    type: ADD_CURRENCY,
    payload: {
        ...currencies
    },
});

