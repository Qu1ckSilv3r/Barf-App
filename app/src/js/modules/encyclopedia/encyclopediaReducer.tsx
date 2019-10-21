import * as encyclopediaActions from "./encyclopediaActions";
import {reducerWithInitialState} from "typescript-fsa-reducers"
import {actionCreatorFactory} from 'typescript-fsa';
import {LOCATION_CHANGE} from "react-router-redux";


const actionCreator = actionCreatorFactory();
const locationChange = actionCreator(LOCATION_CHANGE);

export interface EncyclopediaEntry {
    _id: number,
    name: string,
    content: any
}

export interface EncyclopediaState {
    entries: EncyclopediaEntry[],
    activeEntry: number
}


const defaultState: EncyclopediaState = {
    entries: [
        {
            _id: 0,
            name: 'Entry 1 - Header',
            content: 'Entry 1'
        },
        {
            _id: 1,
          name: 'Entry 2 - Header',
            content: 'Entry 2'
        },
        {
            _id: 2,
           name: 'Entry 3 - Header',
            content: 'Entry 3'
        }
    ],
    activeEntry: 0
};

export const EncyclopediaReducer = reducerWithInitialState(defaultState)
    .case(locationChange, (state, payload) => {
        return {
            ...defaultState
        }
    })
     .case(encyclopediaActions.setActiveEntry, (state, payload) => {
        return {
            ...state,
            activeEntry: payload
        }
    })


