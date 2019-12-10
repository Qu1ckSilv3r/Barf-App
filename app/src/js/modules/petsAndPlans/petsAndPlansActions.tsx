import {actionCreatorFactory} from 'typescript-fsa';
import {Animal, PlanSetting} from "../../../../datamodels";
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


export const startDeletePet = actionCreator('START_DELETE_PET');
export const deletePetFailed = actionCreator<string>('DELETE_PET_FAILED');
export const deletePetSuccess = actionCreator('DELETE_PET_SUCCESS');

export const deletePet = (animalId: number): ThunkAction<Promise<any>, State, any, any> => {
    return async (dispatch, getState) => {
        dispatch(startDeletePet());
        try {
            const userId = getState().login.userId;

            await appApi.deleteAnimal(animalId)
                .then((re) => {
                    console.log("re", re)
                })
                .catch((er) => console.error(er))

            await appApi.getAnimalsByUser(userId)
                .then((re) => {
                    dispatch(setAnimalsInState(re))
                })
                .catch((er) => console.error(er))

            dispatch(closeSideDialog());
            dispatch(deletePetSuccess())


        } catch (er) {
            console.error("er", er)
            dispatch(deletePetFailed(er.message))
        }
    }
}


export const setPlanSettingInState = actionCreator<PlanSetting>('SET_PLAN_SETTING_IN_STATE');
export const getPlanSettingAndPassToState = (settingId: number): ThunkAction<Promise<any>, State, any, any> => {
    return async (dispatch, getState) => {

        try {
            const activePet = getState().petsAndPlans.activePet;
            let settingId = -1;

            await appApi.getAnimalById(activePet)
                .then((re) => {
                    settingId = re.setting_id
                })
                .catch((er) => console.error(er))

            await appApi.getPlanSettingById(settingId)
                .then((re) => {
                   dispatch(setPlanSettingInState(re))
                })
                .catch((er) => console.error(er))



        } catch (er) {
            console.error("er", er)

        }
    }
}

export const setSettingInput = actionCreator<{key: keyof PlanSetting, value: string | boolean}>('SET_SETTING_INPUT')

export const startSavePlanSettings = actionCreator('START_SAVE_PLAN_SETTINGS');
export const savePlanSettingsFailed = actionCreator<string>('SAVE_PLAN_SETTINGS_FAILED');
export const savePlanSettingsSuccess = actionCreator('SAVE_PLAN_SETTINGS_SUCCESS');

export const savePlanSettings = (planSetting: PlanSetting): ThunkAction<Promise<any>, State, any, any> => {
    return async (dispatch, getState) => {
        dispatch(startSavePlanSettings());
        try {
            const userId = getState().login.userId;
            const animalId = getState().petsAndPlans.activePet;
            let settingId = -1;

            const withRemovedId = planSetting;
            withRemovedId.setting_id = undefined;

           await appApi.createPlanSetting(withRemovedId)
                .then((re) => {
                    console.log('new setting', re)
                    settingId = re.setting_id;
                    console.log('new setting ID', settingId)
                })
                .catch((er) => console.error(er))

            await appApi.updateAnimalSetting(animalId, settingId)

            await appApi.getAnimalsByUser(userId)
                .then((re) => {
                    dispatch(setAnimalsInState(re))
                })
                .catch((er) => console.error(er))

            dispatch(closeSideDialog());
            dispatch(savePlanSettingsSuccess())


        } catch (er) {
            console.error("er", er)
            dispatch(savePlanSettingsFailed(er.message))
        }
    }
}

