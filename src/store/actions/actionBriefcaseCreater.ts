import {ADD_BRIEFCASE, DELETE_BRIEFCASE} from '../../constants';

import {TaskBriefCasesTypes} from '../../types';


export const addNewBriefcase = (name: string | number, quantity: string | number): TaskBriefCasesTypes => ({
    type: ADD_BRIEFCASE,
    payload: {
        name: name,
        quantity: quantity
    },
});

export const deleteBriefcase = (name: string | number): TaskBriefCasesTypes => ({
    type: DELETE_BRIEFCASE,
    payload: {
        name: name,
    },
});

