import {  ADD_BRIEFCASE, DELETE_BRIEFCASE } from '../../constants';

import { load, save } from 'redux-localstorage-simple';

import { TaskBriefCasesTypes } from '../../types';


const briefCurrencies: any = load({ namespace: 'cryptocurrencies' });

interface IBriefcase {
    title: string | number;
    quantity: string | number;

}

//const initialState: Array<IBriefcase> = (briefCurrencies && briefCurrencies.briefcases) ? briefCurrencies.briefcases : [];
const initialState: Array<IBriefcase> =  [];


const briefcases = (state = initialState, action: TaskBriefCasesTypes): any => {
    switch (action.type) {
        case ADD_BRIEFCASE :
        {
            let newBriefcase: {} = {
                title: action.payload.name,
                quantity: action.payload.quantity
            }
            //Копируем state т.к не имеем права менять его не прямую
            let stateCopy: object[] = [...state]

            stateCopy.push(newBriefcase)
            return stateCopy;
        }

        case DELETE_BRIEFCASE:
        {
            let stateCopy: Array<IBriefcase> = [...state]
            return stateCopy.filter(item => item.title !== action.payload.name);


        }
        default:
            return state;
    }
}

export default briefcases;