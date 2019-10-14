import * as petsAndPlansActions from "./petsAndPlansActions";
import {reducerWithInitialState} from "typescript-fsa-reducers"


export interface Pet {
    _id: number,
    name: string,
    ouchies: [],
    image: string,
    species: 'cat' | 'dog' | 'ferret'
}

export interface PetsAndPlansState {
    pets: Pet[],
    activePet: number
}


const defaultState: PetsAndPlansState = {
    pets: [
        {
            _id: 0,
            name: 'Harvey',
            ouchies: [],
            image: '/assets/demoImages/cat.jpg',
            species: "cat"
        },
        {
            _id: 1,
            name: 'Ragnar',
            ouchies: [],
            image: '/assets/demoImages/cat.jpg',
            species: "cat"
        },
        {
            _id: 2,
            name: 'Moritz',
            ouchies: [],
            image: '/assets/demoImages/dog.jpg',
            species: "dog"
        }
    ],
    activePet: 0
};

export const PetsAndPlansReducer = reducerWithInitialState(defaultState)
    .case(petsAndPlansActions.setActivePet, (state, payload) => {
        return {
            ...state,
            activePet: payload
        }
    })


