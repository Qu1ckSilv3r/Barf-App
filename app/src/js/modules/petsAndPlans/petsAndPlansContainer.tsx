import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {State} from "../../reducer";
import PetsAndPlans from './petsAndPlans';
import {setActivePet} from "./petsAndPlansActions";
import {pushHistory} from "../landing/landingActions";
import {setSideDialog} from "../sideDialog/sideDialogActions";
import {clearSideNavigation, closeSideNavigation, setSideNavigation} from "../navigationSide/sideNavigationActions";
import {Animal} from "../../../../datamodels";

interface OwnContainerProps {
}

interface MapStateToProps {
    pets: Animal[],
    activePet: number
}

const mapStateToProps = (state: State, ownProps: OwnContainerProps): MapStateToProps => {
    return {
        pets: state.petsAndPlans.pets,
        activePet: state.petsAndPlans.activePet
    }
};


interface MapDispatchToProps {
    setActivePet: typeof setActivePet,
    pushHistory: typeof pushHistory,
    setSideNavigation: typeof setSideNavigation,
    clearSideNavigation: typeof clearSideNavigation,
    closeSideNavigation: typeof closeSideNavigation,
    setSideDialog: typeof setSideDialog,
}

const mapDispatchToProps = (dispatch: any, ownProps: OwnContainerProps): MapDispatchToProps => {
    return bindActionCreators({
        setActivePet,
        pushHistory,
        setSideDialog,
        setSideNavigation,
        clearSideNavigation,
        closeSideNavigation
    }, dispatch)
};


export const PetsAndPlansContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(PetsAndPlans);
