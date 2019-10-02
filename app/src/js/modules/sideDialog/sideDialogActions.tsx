import {actionCreatorFactory} from 'typescript-fsa';
import {SideDialogButton} from "./sideDialogReducer";
const actionCreator = actionCreatorFactory();

export const setSideDialog = actionCreator<{content: any, buttons: SideDialogButton[], header: string}>("SET_SIDE_DIALOG");
export const clearSideDialog = actionCreator("CLEAR_SIDE_DIALOG");
export const closeSideDialog = actionCreator("CLOSE_SIDE_DIALOG");