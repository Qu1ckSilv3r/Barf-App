import * as indexActions from "../actions/indexActions";
import {reducerWithInitialState} from "typescript-fsa-reducers"

export interface IndexState {
    foo: string
}


const defaultState: IndexState = {
   foo: "bar"
};

export const IndexReducer = reducerWithInitialState(defaultState)
    .case(indexActions.testAction, (state, payload) => {
        console.log("HA", payload)
        return {
            ...state,
            foo: payload.toString()
        }
    })

