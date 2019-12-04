import {actionCreatorFactory} from 'typescript-fsa';
import {Animal} from "../../../../datamodels";

const actionCreator = actionCreatorFactory();

export const setActivePet = actionCreator<number>("SET_ACTIVE_PET");

export const openSettings = actionCreator("OPEN_SETTINGS");

export const setPetInput = actionCreator<{key: keyof Animal, value: string | number }>("SET_PET_INPUT")
export const editPet = actionCreator<number>("SET_PET_EDIT")
export const savePet = actionCreator("SAVE_PET_EDIT")
