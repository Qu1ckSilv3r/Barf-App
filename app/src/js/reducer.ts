
import {SideDialogReducer, SideDialogState} from "./modules/sideDialog/sideDialogReducer";
import {PetsAndPlansReducer, PetsAndPlansState} from "./modules/petsAndPlans/petsAndPlansReducer";
import {NavigationBarReducer, NavigationState} from "./modules/navigationBar/navigationBarReducer";
import {SideNavigationReducer, SideNavigationState} from "./modules/navigationSide/sideNavigationReducer";
import {EncyclopediaReducer, EncyclopediaState} from "./modules/encyclopedia/encyclopediaReducer";
import {ComponentsReducer, ComponentsState} from "./modules/components/componentsReducer";
import {SettingsReducer, SettingsState} from "./modules/settings/settingsReducer";
import {LoginReducer, LoginState} from "./modules/login/loginReducer";

export interface State {
    login: LoginState,
    sideDialog: SideDialogState,
    petsAndPlans: PetsAndPlansState,
    navigationBar: NavigationState,
    sideNavigation: SideNavigationState,
    encyclopedia: EncyclopediaState,
    components: ComponentsState,
    settings: SettingsState,

}

export default {
    login: LoginReducer,
    sideDialog: SideDialogReducer,
    petsAndPlans: PetsAndPlansReducer,
    navigationBar: NavigationBarReducer,
    sideNavigation: SideNavigationReducer,
    encyclopedia: EncyclopediaReducer,
    components: ComponentsReducer,
    settings: SettingsReducer,

}