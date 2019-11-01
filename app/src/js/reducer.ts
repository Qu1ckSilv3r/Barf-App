import {LandingReducer, LandingState} from "./modules/landing/landingReducer";
import {SideDialogReducer, SideDialogState} from "./modules/sideDialog/sideDialogReducer";
import {PetsAndPlansReducer, PetsAndPlansState} from "./modules/petsAndPlans/petsAndPlansReducer";
import {NavigationBarReducer, NavigationState} from "./modules/navigationBar/navigationBarReducer";
import {SideNavigationReducer, SideNavigationState} from "./modules/navigationSide/sideNavigationReducer";
import {EncyclopediaReducer, EncyclopediaState} from "./modules/encyclopedia/encyclopediaReducer";
import {ComponentsReducer, ComponentsState} from "./modules/components/componentsReducer";
import {SettingsReducer, SettingsState} from "./modules/settings/settingsReducer";

export interface State {
    landing: LandingState,
    sideDialog: SideDialogState,
    petsAndPlans: PetsAndPlansState,
    navigationBar: NavigationState,
    sideNavigation: SideNavigationState,
    encyclopedia: EncyclopediaState,
    components: ComponentsState,
    settings: SettingsState,

}

export default {
    landing: LandingReducer,
    sideDialog: SideDialogReducer,
    petsAndPlans: PetsAndPlansReducer,
    navigationBar: NavigationBarReducer,
    sideNavigation: SideNavigationReducer,
    encyclopedia: EncyclopediaReducer,
    components: ComponentsReducer,
    settings: SettingsReducer,

}