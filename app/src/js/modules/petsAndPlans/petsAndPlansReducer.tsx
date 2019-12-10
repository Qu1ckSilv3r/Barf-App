import * as petsAndPlansActions from "./petsAndPlansActions";
import {reducerWithInitialState} from "typescript-fsa-reducers"
import {actionCreatorFactory} from 'typescript-fsa';
import {LOCATION_CHANGE} from "react-router-redux";
import {Animal, PlanSetting} from "../../../../datamodels";
import * as sideDialogActions from "../sideDialog/sideDialogActions";


const actionCreator = actionCreatorFactory();
const locationChange = actionCreator(LOCATION_CHANGE);


export interface PetsAndPlansState {
    pets: Animal[],
    activePet: number,
    editObj: Animal,
    editedPetIndex: number,
    settingsOpen: boolean,
    settingEditObj: PlanSetting
}

const defaultState: PetsAndPlansState = {
    pets: [
        /*
        {
            animal_id: 1,
            name: 'Harvey',
            //ouchies: [],
            image: '/assets/demoImages/cat.jpg',
            spezies: 'cat',
            birthday: '2013-10-15',
            age: 6,
            weight: 6,
            target_weight: 6,
            aktivity: 'normal',
        },
        {
            animal_id: 2,
            name: 'Ragnar',
            //ouchies: [],
            image: '/assets/demoImages/cat.jpg',
            spezies: 'cat',
            age: 2,
            weight: 5,
            target_weight: 5,
            aktivity: 'normal',
        },
        {
            animal_id: 3,
            name: 'Moritz',
            //ouchies: [],
            image: '/assets/demoImages/dog.jpg',
            spezies: 'dog',
            birthday: '2019-06-16',
            age: 0,
            weight: 20,
            target_weight: 35,
            aktivity: 'normal',
        }

         */
    ],
    activePet: -1,
    editObj: {},
    editedPetIndex: 0,
    settingsOpen: false,
    settingEditObj: {}
};

export const PetsAndPlansReducer = reducerWithInitialState(defaultState)
    .case(locationChange, (state, payload) => {
        return {
            ...defaultState
        }
    })
    .case(petsAndPlansActions.setSettingInput, (state, payload) => {
        return {
            ...state,
            settingEditObj: {
                ...state.settingEditObj,
                [payload.key]: payload.value
            }
        }
    })
     .case(petsAndPlansActions.setPlanSettingInState, (state, payload) => {
        return {
            ...state,
            settingEditObj: payload
        }
    })
    .case(petsAndPlansActions.setAnimalsInState, (state, payload) => {
        return {
            ...state,
            pets: [...payload]
        }
    })
    .case(petsAndPlansActions.setActivePet, (state, payload) => {
        return {
            ...state,
            activePet: payload
        }
    })
    .case(petsAndPlansActions.openSettings, (state, payload) => {
        return {
            ...state,
            settingsOpen: true,

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
            settingsOpen: false,
            editedPetIndex: indexOfPetToEdit,
            editObj: {
                ...petToEdit
            }
        }
    })

    .case(sideDialogActions.closeSideDialog, (state, payload) => {

        return {
            ...state,
            editedPetIndex: 0,
            editObj: {},
            settingsOpen: false
        }
    })


