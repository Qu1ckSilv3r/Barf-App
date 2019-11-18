import * as petsAndPlansActions from "./petsAndPlansActions";
import {reducerWithInitialState} from "typescript-fsa-reducers"
import {actionCreatorFactory} from 'typescript-fsa';
import {LOCATION_CHANGE} from "react-router-redux";
import {Animal} from "../../../../datamodels";
import * as sideDialogActions from "../sideDialog/sideDialogActions";


const actionCreator = actionCreatorFactory();
const locationChange = actionCreator(LOCATION_CHANGE);


export interface PetsAndPlansState {
    pets: Animal[],
    activePet: number,
    editObj: Animal,
    editedPetIndex: number,
}

const defaultState: PetsAndPlansState = {
    pets: [
        {
            animal_id: 1,
            name: 'Harvey',
            //ouchies: [],
            image: '/assets/demoImages/cat.jpg',
            species: 'cat',
            birthday: '15.10.2013',
            age: 6,
            weight: 6,
            target_weight: 6,
            activity: 'normal',
        },
        {
            animal_id: 2,
            name: 'Ragnar',
            //ouchies: [],
            image: '/assets/demoImages/cat.jpg',
            species: 'cat',
            birthday: '',
            age: 2,
            weight: 5,
            target_weight: 5,
            activity: 'normal',
        },
        {
            animal_id: 3,
            name: 'Moritz',
            //ouchies: [],
            image: '/assets/demoImages/dog.jpg',
            species: 'dog',
            birthday: '16.06.2019',
            age: 0,
            weight: 20,
            target_weight: 35,
            activity: 'normal',
        }
    ],
    activePet: 0,
    editObj: {},
    editedPetIndex: 0
};

export const PetsAndPlansReducer = reducerWithInitialState(defaultState)
    .case(locationChange, (state, payload) => {
        return {
            ...defaultState
        }
    })
    .case(petsAndPlansActions.setActivePet, (state, payload) => {
        return {
            ...state,
            activePet: payload
        }
    })
    .case(petsAndPlansActions.setPetInput, (state, payload) => {

        return {
            ...state,
            editObj: {
                ...state.editObj,
                [payload.key]: payload.value
            }
        }
    })
    .case(petsAndPlansActions.editPet, (state, payload) => {
        const petToEdit = state.pets.find((pet) => pet.animal_id === payload);
        const indexOfPetToEdit = petToEdit ? state.pets.indexOf(petToEdit) : -1;

        return {
            ...state,
            editedPetIndex: indexOfPetToEdit,
            editObj: {
                ...petToEdit
            }
        }
    })
    .case(petsAndPlansActions.savePet, (state, payload) => {
        const savedPets = state.pets.splice(state.editedPetIndex, 1)


        return {
            ...state,
            pets: [state.editObj, ...savedPets]
        }
    })
    .case(sideDialogActions.closeSideDialog, (state, payload) => {

        return {
            ...state,
            editedPetIndex: 0,
            editObj: {}
        }
    })


