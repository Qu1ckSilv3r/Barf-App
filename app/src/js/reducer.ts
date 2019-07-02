import {LandingReducer, LandingState} from "./modules/landing/landingReducer";

export interface State {
    landing: LandingState,
}

export default {
    landing: LandingReducer,
}