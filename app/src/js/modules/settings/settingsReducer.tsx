import * as settingsActions from "./settingsActions";
import {reducerWithInitialState} from "typescript-fsa-reducers"
import {actionCreatorFactory} from 'typescript-fsa';
import {LOCATION_CHANGE} from "react-router-redux";


const actionCreator = actionCreatorFactory();
const locationChange = actionCreator(LOCATION_CHANGE);

export interface SettingsState {
    settings: any[],
    activeSetting: number
}


const defaultState: SettingsState = {
    settings: [],
    activeSetting: 0
};

export const SettingsReducer = reducerWithInitialState(defaultState)
    .case(locationChange, (state, payload) => {
        return {
            ...defaultState
        }
    })
     .case(settingsActions.setActiveSetting, (state, payload) => {
        return {
            ...state,
            activeSetting: payload
        }
    })


