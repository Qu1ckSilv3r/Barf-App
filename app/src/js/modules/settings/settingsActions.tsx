import {actionCreatorFactory} from 'typescript-fsa';

const actionCreator = actionCreatorFactory();


export const setActiveSetting = actionCreator<number>("SET_ACTIVE_SETTING");