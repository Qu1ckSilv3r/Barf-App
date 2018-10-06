import {actionCreatorFactory} from 'typescript-fsa';
// import {ThunkAction} from 'redux-thunk';
// import {State} from "../reducers/reducer";
// import {Action} from "redux-actions";

const actionCreator = actionCreatorFactory();

export const testAction = actionCreator<number>("TEST_INDEX_ACTION");



