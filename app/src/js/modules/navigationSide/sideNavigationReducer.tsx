import * as sideNavigationActions from "./sideNavigationActions";
import {reducerWithInitialState} from "typescript-fsa-reducers"

export interface SideNavigationState {

    content: any
}


const defaultState: SideNavigationState = {
    content: null
};

export const SideNavigationReducer = reducerWithInitialState(defaultState)
    .case(sideNavigationActions.setSideNavigation, (state, payload) => {
        return {
            ...state,
            content: payload,

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
