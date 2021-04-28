import { combineReducers } from 'redux';
import currencies from './currencies';
const rootReducer = combineReducers({ currencies: currencies });

export default rootReducer;
export type RootState = ReturnType<typeof rootReducer>;