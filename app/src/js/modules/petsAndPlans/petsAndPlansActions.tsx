import {actionCreatorFactory} from 'typescript-fsa';

const actionCreator = actionCreatorFactory();

export const setActivePet = actionCreator<number>("SET_ACTIVE_PET");
