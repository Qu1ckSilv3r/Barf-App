import * as landingActions from "../actions/landingActions";
import {reducerWithInitialState} from "typescript-fsa-reducers"

export interface LandingState {
    foo: string
}


const defaultState: LandingState = {
   foo: "bar"
};

export const LandingReducer = reducerWithInitialState(defaultState)
    .case(landingActions.testAction, (state, payload) => {
        console.log("HA", payload)
        return {
            ...state,
            foo: payload.toString()
        }
    })

