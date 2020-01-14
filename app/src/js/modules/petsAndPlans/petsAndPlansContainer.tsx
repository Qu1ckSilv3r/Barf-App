import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {State} from "../../reducer";
import PetsAndPlans from './petsAndPlans';
import {
    createPet, deletePet,
    editPet, generatePlan, getPlanSettingAndPassToState,
    openSettings,
    savePet, savePlanSettings,
    setActivePet,
    setAnimalsInState,
    setPetInput, setSettingInput
} from "./petsAndPlansActions";
import {pushHistory} from "../login/loginActions";
import {openSideDialog} from "../sideDialog/sideDialogActions";
import {clearSideNavigation, closeSideNavigation, setSideNavigation} from "../navigationSide/sideNavigationActions";
import {Animal, PlanSetting} from "../../../../datamodels";

interface OwnContainerProps {
}

interface MapStateToProps {
    pets: Animal[],
    activePet: number,
    editObj: Animal,
    settingsOpen: boolean,
    userId: number,
    settingEditObj: PlanSetting
}

const mapStateToProps = (state: State, ownProps: OwnContainerProps): MapStateToProps => {
    return {
        userId: state.login.userId,
        pets: state.petsAndPlans.pets,
        activePet: state.petsAndPlans.activePet,
        editObj: state.petsAndPlans.editObj,
        settingsOpen: state.petsAndPlans.settingsOpen,
        settingEditObj: state.petsAndPlans.settingEditObj
    }
};


interface MapDispatchToProps {
    setActivePet: typeof setActivePet,
    pushHistory: typeof pushHistory,
    setSideNavigation: typeof setSideNavigation,
    clearSideNavigation: typeof clearSideNavigation,
    closeSideNavigation: typeof closeSideNavigation,
    openSideDialog: typeof openSideDialog,
    setPetInput: typeof setPetInput,
    savePet: typeof savePet,
    createPet: typeof createPet,
    deletePet: typeof deletePet,
    generatePlan: typeof generatePlan,
    getPlanSettingAndPassToState: typeof getPlanSettingAndPassToState,
    savePlanSettings: typeof savePlanSettings,
    setSettingInput: typeof setSettingInput,
    openSettings: typeof openSettings,
    editPet: typeof editPet,
    setAnimalsInState: typeof setAnimalsInState
}

const mapDispatchToProps = (dispatch: any, ownProps: OwnContainerProps): MapDispatchToProps => {
    return bindActionCreators({
        setActivePet,
        pushHistory,
        openSideDialog,
        setSideNavigation,
        clearSideNavigation,
        closeSideNavigation,
        setPetInput,
        savePet,
        createPet,
        deletePet,
        getPlanSettingAndPassToState,
        savePlanSettings,
        generatePlan,
        setSettingInput,
        openSettings,
        editPet,
        setAnimalsInState
    }, dispatch)
};


export const PetsAndPlansContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(PetsAndPlans);
