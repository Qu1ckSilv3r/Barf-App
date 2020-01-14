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
    settingEditObj: PlanSetting,
    activeWeek: number,
    plan: any
}

const defaultState: PetsAndPlansState = {
    pets: [],
    plan: [],
    activePet: -1,
    editObj: {},
    editedPetIndex: 0,
    settingsOpen: false,
    settingEditObj: {},
    activeWeek: 1
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
    .case(petsAndPlansActions.setPlanInState, (state, payload) => {
        return {
            ...state,
            plan: payload
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
    .case(petsAndPlansActions.setActiveWeek, (state, payload) => {
        return {
            ...state,
            activeWeek: payload
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



