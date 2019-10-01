import * as sideDialogActions from "./sideDialogActions";
import {reducerWithInitialState} from "typescript-fsa-reducers"

export interface SideDialogButton {
    label: string,
    onClick: () => void,
    icon: string
}

export interface SideDialogState {
    opened: boolean,
    buttons: SideDialogButton[],
    content: any
}


const defaultState: SideDialogState = {
    opened: false,
    buttons: [],
    content: {}
};

export const SideDialogReducer = reducerWithInitialState(defaultState)
    .case(sideDialogActions.setSideDialog, (state, payload) => {
        return {
            ...state,
            opened: true,
            content: payload.content,
            buttons: payload.buttons
        }
    })
    .case(sideDialogActions.clearSideDialog, (state, payload) => {
        return {
            ...state,
            opened: false,
            content: {},
            buttons: []
        }
    })
