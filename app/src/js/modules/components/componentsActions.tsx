import {actionCreatorFactory} from 'typescript-fsa';

const actionCreator = actionCreatorFactory();


export const setActiveComponentCategory = actionCreator<number>("SET_ACTIVE_COMPONENT_CATEGORY");