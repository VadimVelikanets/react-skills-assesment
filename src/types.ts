
import { ADD_CURRENCY} from './constants';

export interface ICryptoCurrency {
    currencies: [];
}

export interface IGetCurrencyAction {
    type: typeof ADD_CURRENCY,
    payload: ICryptoCurrency,
}

export type TaskCurrencyTypes = IGetCurrencyAction

