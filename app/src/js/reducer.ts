import {LandingReducer, LandingState} from "./modules/landing/landingReducer";
import {SideDialogReducer, SideDialogState} from "./modules/sideDialog/sideDialogReducer";
import {PetsAndPlansReducer, PetsAndPlansState} from "./modules/petsAndPlans/petsAndPlansReducer";

export interface State {
    landing: LandingState,
    sideDialog: SideDialogState,
    petsAndPlans: PetsAndPlansState
}

export default {
    landing: LandingReducer,
    sideDialog: SideDialogReducer,
    petsAndPlans: PetsAndPlansReducer
}