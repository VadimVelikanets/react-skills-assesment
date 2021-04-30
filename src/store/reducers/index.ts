import { combineReducers } from 'redux';
import currencies from './currencies';
import briefcases from "./briefcases";
const rootReducer = combineReducers({ currencies: currencies, briefcases: briefcases });

export default rootReducer;
export type RootState = ReturnType<typeof rootReducer>;