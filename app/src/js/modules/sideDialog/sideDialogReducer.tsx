import * as sideDialogActions from "./sideDialogActions";
import {reducerWithInitialState} from "typescript-fsa-reducers"


import {actionCreatorFactory} from 'typescript-fsa';
import {LOCATION_CHANGE} from "react-router-redux";


const actionCreator = actionCreatorFactory();
const locationChange = actionCreator(LOCATION_CHANGE);

export interface SideDialogButton {
    label: string,
    onClick: () => void,
    icon: string
}

export interface SideDialogState {
    opened: boolean,
    header: string,
    buttons: SideDialogButton[],
    content: any
}


const defaultState: SideDialogState = {
    opened: false,
    header: '',
    buttons: [],
    content: null
};

export const SideDialogReducer = reducerWithInitialState(defaultState)
    .case(locationChange, (state, payload) => {
        return {
            ...defaultState
        }
    })
     .case(sideDialogActions.setSideDialog, (state, payload) => {
        return {
            ...state,
            opened: true,
            content: payload.content,
            buttons: payload.buttons,
            header: payload.header
        }
    })
    .case(sideDialogActions.closeSideDialog, (state, payload) => {
        return {
            ...state,
            opened: false,
        }
    })
    .case(sideDialogActions.clearSideDialog, (state, payload) => {
        return {
            ...state,
            buttons: [],
            content: null
        }
    })
