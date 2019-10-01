import {LandingReducer, LandingState} from "./modules/landing/landingReducer";
import {SideDialogReducer, SideDialogState} from "./modules/sideDialog/sideDialogReducer";

export interface State {
    landing: LandingState,
    sideDialog: SideDialogState,
}

export default {
    landing: LandingReducer,
    sideDialog: SideDialogReducer
}