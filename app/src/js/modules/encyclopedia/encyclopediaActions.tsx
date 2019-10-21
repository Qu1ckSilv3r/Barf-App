import {actionCreatorFactory} from 'typescript-fsa';

const actionCreator = actionCreatorFactory();


export const setActiveEntry = actionCreator<number>("SET_ACTIVE_ENTRY");