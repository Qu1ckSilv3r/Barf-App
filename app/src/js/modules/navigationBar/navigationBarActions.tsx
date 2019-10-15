import {actionCreatorFactory} from 'typescript-fsa';

const actionCreator = actionCreatorFactory();

export const setActiveNavItem = actionCreator<number>("SET_ACTIVE_NAV_ITEM");
