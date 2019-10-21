import {actionCreatorFactory} from 'typescript-fsa';

const actionCreator = actionCreatorFactory();


export const setActiveEntry = actionCreator<number>("SET_ACTIVE_ENTRY");
export const setSearchValue = actionCreator<string>("SET_SEARCH_VALUE_ENCYCLOPEDIA");