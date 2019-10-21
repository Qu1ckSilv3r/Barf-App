import * as componentsActions from "./componentsActions";
import {reducerWithInitialState} from "typescript-fsa-reducers"
import {actionCreatorFactory} from 'typescript-fsa';
import {LOCATION_CHANGE} from "react-router-redux";


const actionCreator = actionCreatorFactory();
const locationChange = actionCreator(LOCATION_CHANGE);

export interface ComponentCategory {
    _id: number,
    name: string,
    components: any[]
}

export interface ComponentsState {
    componentCategories: ComponentCategory[],
    activeCategory: number
}


const defaultState: ComponentsState = {
    componentCategories: [
        {
            _id: 0,
            name: 'Category 1',
            components: ['1', '2', '3']
        },
        {
            _id: 1,
          name: 'Category 2',
            components: ['1', '2', '3']
        },
        {
            _id: 2,
           name: 'Category 3',
            components: ['1', '2', '3']
        }
    ],
    activeCategory: 0
};

export const ComponentsReducer = reducerWithInitialState(defaultState)
    .case(locationChange, (state, payload) => {
        return {
            ...defaultState
        }
    })
     .case(componentsActions.setActiveComponentCategory, (state, payload) => {
        return {
            ...state,
            activeCategory: payload
        }
    })


