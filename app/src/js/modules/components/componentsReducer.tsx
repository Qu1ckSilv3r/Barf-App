import * as componentsActions from "./componentsActions";
import {reducerWithInitialState} from "typescript-fsa-reducers"
import {actionCreatorFactory} from 'typescript-fsa';
import {LOCATION_CHANGE} from "react-router-redux";
import {Component} from "../../../../datamodels";


const actionCreator = actionCreatorFactory();
const locationChange = actionCreator(LOCATION_CHANGE);

export interface ComponentCategory {
    _id: number,
    name: string,
    type: string
}

export interface ComponentsState {
    componentCategories: ComponentCategory[],
    activeCategory: number,
    components: Component[]
}


const defaultState: ComponentsState = {
    componentCategories: [
        {
            _id: 0,
            name: 'Gemüse',
            type: 'veg'
        },
        {
            _id: 1,
            name: 'Obst',
            type: 'fru'
        },
        {
            _id: 2,
            name: 'Knochen/RFK',
            type: 'bon'
        },
        {
            _id: 3,
            name: 'Muskelfleisch',
            type: 'mus'
        },
        {
            _id: 4,
            name: 'Innereien',
            type: 'int'
        },
        {
            _id: 5,
            name: 'Supplemente',
            type: 'sup'
        }
    ],
    components: [],
    activeCategory: 0
};

export const ComponentsReducer = reducerWithInitialState(defaultState)
    .case(locationChange, (state, payload) => {
        return {
            ...defaultState
        }
    })
    .case(componentsActions.setComponentsInState, (state, payload) => {
        return {
            ...state,
            components: payload
        }
    })
.case(componentsActions.setActiveComponentCategory, (state, payload) => {
        return {
            ...state,
            activeCategory: payload
        }
    })


