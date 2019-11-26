import {actionCreatorFactory} from 'typescript-fsa';
const actionCreator = actionCreatorFactory();

export const openSideDialog = actionCreator("OPEN_SIDE_DIALOG");
export const closeSideDialog = actionCreator("CLOSE_SIDE_DIALOG");