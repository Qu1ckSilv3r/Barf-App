import * as componentsActions from "./componentsActions";
import {reducerWithInitialState} from "typescript-fsa-reducers"
import {actionCreatorFactory} from 'typescript-fsa';
import {LOCATION_CHANGE} from "react-router-redux";


const actionCreator = actionCreatorFactory();
const locationChange = actionCreator(LOCATION_CHANGE);

export interface ComponentCategory {
    _id: number,
    name: string,
    components: any[],
    type: string
}

export interface ComponentsState {
    componentCategories: ComponentCategory[],
    activeCategory: number
}


const defaultState: ComponentsState = {
    componentCategories: [
        {
            _id: 0,
            name: 'Gemüse',
            components: ['1', '2', '3'],
            type: 'veggie'
        },
        {
            _id: 1,
            name: 'Obst',
            components: ['1', '2', '3'],
            type: 'fruit'
        },
        {
            _id: 2,
            name: 'Knochen/RFK',
            components: ['1', '2', '3'],
            type: 'bone'
        },
        {
            _id: 3,
            name: 'Muskelfleisch',
            components: ['1', '2', '3'],
            type: 'muscle'
        },
        {
            _id: 4,
            name: 'Innereien',
            components: ['1', '2', '3'],
            type: 'intestine'
        },
        {
            _id: 5,
            name: 'Supplemente',
            components: ['1', '2', '3'],
            type: 'supplement'
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


