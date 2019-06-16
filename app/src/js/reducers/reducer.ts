import {LandingReducer, LandingState} from "./landingReducer";

export interface State {
    landing: LandingState,
}

export default {
    landing: LandingReducer,
}