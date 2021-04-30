import { createStore, compose, applyMiddleware } from 'redux';
import rootReducer from './reducers';
import { save, load } from 'redux-localstorage-simple'

/* eslint-disable no-underscore-dangle */
const composeEnhancers =
    process.env.NODE_ENV !== 'production' &&
    typeof window === 'object' &&
    (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
        (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose;
/* eslint-enable */

const createStoreWithMiddleware
    = applyMiddleware(
    save({ namespace: 'cryptocurrencies' }) // Saving done here
)(createStore)

/*
    Loading from LocalStorage happens during
    creation of the Redux store.
*/
const store = createStoreWithMiddleware(
    rootReducer,
    load({ namespace: 'cryptocurrencies' }) // Loading done here
)


export type StoreType = typeof store;

declare global {
    interface Window { store: any; }
}

window.store = store;

export default store;