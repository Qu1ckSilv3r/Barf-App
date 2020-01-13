import {actionCreatorFactory} from 'typescript-fsa';
import {Component} from "../../../../datamodels";

const actionCreator = actionCreatorFactory();


export const setActiveComponentCategory = actionCreator<number>("SET_ACTIVE_COMPONENT_CATEGORY");

export const setComponentsInState = actionCreator<Component[]>('SET_COMPONENTS_IN_STATE')