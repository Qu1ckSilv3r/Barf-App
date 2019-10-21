import * as encyclopediaActions from "./encyclopediaActions";
import {reducerWithInitialState} from "typescript-fsa-reducers"
import {actionCreatorFactory} from 'typescript-fsa';
import {LOCATION_CHANGE} from "react-router-redux";


const actionCreator = actionCreatorFactory();
const locationChange = actionCreator(LOCATION_CHANGE);

export type EncyclopediaEntryType = 'important' | 'info';


export interface EncyclopediaEntry {
    _id: number,
    name: string,
    content: any,
    type: EncyclopediaEntryType
}

export interface EncyclopediaState {
    entries: EncyclopediaEntry[],
    activeEntry: number,
    searchValue: string
}


const defaultState: EncyclopediaState = {
    entries: [
        {
            _id: 0,
            name: 'Entry 1 - Header',
            content: 'Entry 1',
            type: 'important'
        },
        {
            _id: 1,
            name: 'Entry 2 - Header',
            content: 'Entry 2',
            type: "info"
        },
        {
            _id: 2,
            name: 'Entry 3 - Header',
            content: 'Entry 3',
            type: "info"
        }
    ],
    activeEntry: 0,
    searchValue: 'sdgfS'
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
 .case(encyclopediaActions.setSearchValue, (state, payload) => {
        return {
            ...state,
            searchValue: payload
        }
    })


