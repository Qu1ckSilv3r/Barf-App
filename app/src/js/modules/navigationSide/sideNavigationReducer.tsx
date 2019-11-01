import * as sideNavigationActions from "./sideNavigationActions";
import {reducerWithInitialState} from "typescript-fsa-reducers"
import {actionCreatorFactory} from 'typescript-fsa';
import {LOCATION_CHANGE} from "react-router-redux";


const actionCreator = actionCreatorFactory();
const locationChange = actionCreator(LOCATION_CHANGE);

export interface SideNavigationState {
    opened: boolean,
    content: any
}


const defaultState: SideNavigationState = {
    opened: false,
    content: null
};

export const SideNavigationReducer = reducerWithInitialState(defaultState)
    .case(locationChange, (state, payload) => {
        return {
            ...state,
        }
    })
    .case(sideNavigationActions.setSideNavigation, (state, payload) => {
        return {
            ...state,
            opened: true,
            content: payload,

        }
    })
    .case(sideNavigationActions.closeSideNavigation, (state, payload) => {
        return {
            ...state,
            opened: false,

        }
    })
    .case(sideNavigationActions.clearSideNavigation, (state, payload) => {
        return {
            ...state,
            content: null,
            opened: false,
        }
    })
/*
 .case(sideNavigationActions.locationChange, (state, payload) => {
     return {
         ...state,
         content: null,
     }
 })
*/
