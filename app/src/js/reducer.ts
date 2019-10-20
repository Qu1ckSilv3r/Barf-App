import {LandingReducer, LandingState} from "./modules/landing/landingReducer";
import {SideDialogReducer, SideDialogState} from "./modules/sideDialog/sideDialogReducer";
import {PetsAndPlansReducer, PetsAndPlansState} from "./modules/petsAndPlans/petsAndPlansReducer";
import {NavigationBarReducer, NavigationState} from "./modules/navigationBar/navigationBarReducer";
import {SideNavigationReducer, SideNavigationState} from "./modules/navigationSide/sideNavigationReducer";

export interface State {
    landing: LandingState,
    sideDialog: SideDialogState,
    petsAndPlans: PetsAndPlansState,
    navigationBar: NavigationState,
    sideNavigation: SideNavigationState
}

export default {
    landing: LandingReducer,
    sideDialog: SideDialogReducer,
    petsAndPlans: PetsAndPlansReducer,
    navigationBar: NavigationBarReducer,
    sideNavigation: SideNavigationReducer
}