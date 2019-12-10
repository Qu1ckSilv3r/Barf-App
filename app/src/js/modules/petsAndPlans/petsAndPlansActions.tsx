import {actionCreatorFactory} from 'typescript-fsa';
import {Animal} from "../../../../datamodels";
import {ThunkAction} from "redux-thunk";
import {State} from "../../reducer";
import {appApi} from "../../appApi";
import {closeSideDialog} from "../sideDialog/sideDialogActions";

const actionCreator = actionCreatorFactory();

export const setActivePet = actionCreator<number>("SET_ACTIVE_PET");

export const setAnimalsInState = actionCreator<Animal[]>('SET_ANIMALS_IN_STATE')

export const openSettings = actionCreator("OPEN_SETTINGS");

export const setPetInput = actionCreator<{ key: keyof Animal, value: string | number }>("SET_PET_INPUT")
export const editPet = actionCreator<number>("SET_PET_EDIT")

export const startSavePet = actionCreator('START_SAVE_PET');
export const savePetFailed = actionCreator<string>('SAVE_PET_FAILED');
export const savePetSuccess = actionCreator('SAVE_PET_SUCCESS');

export const savePet = (animal: Animal): ThunkAction<Promise<any>, State, any, any> => {
    return async (dispatch, getState) => {
        dispatch(startSavePet());
        try {
            const userId = getState().login.userId;

            await appApi.updateAnimal({...animal, user_id: userId})

            await appApi.getAnimalsByUser(userId)
                .then((re) => {
                    dispatch(setAnimalsInState(re))
                })
                .catch((er) => console.error(er))

            dispatch(closeSideDialog());
            dispatch(savePetSuccess())


        } catch (er) {
            console.error("er", er)
            dispatch(savePetFailed(er.message))
        }
    }
}


export const startCreatePet = actionCreator('START_CREATE_PET');
export const createPetFailed = actionCreator<string>('CREATE_PET_FAILED');
export const createPetSuccess = actionCreator('CREATE_PET_SUCCESS');

export const createPet = (animal: Animal): ThunkAction<Promise<any>, State, any, any> => {
    return async (dispatch, getState) => {
        dispatch(startCreatePet());
        try {
            const userId = getState().login.userId;

            await appApi.createAnimal({...animal, user_id: userId})

            await appApi.getAnimalsByUser(userId)
                .then((re) => {
                    dispatch(setAnimalsInState(re))
                })
                .catch((er) => console.error(er))

            dispatch(closeSideDialog());
            dispatch(createPetSuccess())


        } catch (er) {
            console.error("er", er)
            dispatch(createPetFailed(er.message))
        }
    }
}

