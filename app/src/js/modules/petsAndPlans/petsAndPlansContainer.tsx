import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {State} from "../../reducer";
import PetsAndPlans from './petsAndPlans';
import {Pet} from "./petsAndPlansReducer";
import {setActivePet} from "./petsAndPlansActions";
import {pushHistory} from "../landing/landingActions";
import {setSideDialog} from "../sideDialog/sideDialogActions";
import {setSideNavigation} from "../navigationSide/sideNavigationActions";

interface OwnContainerProps {
}

interface MapStateToProps {
    pets: Pet[],
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
    setSideDialog: typeof setSideDialog,
}

const mapDispatchToProps = (dispatch: any, ownProps: OwnContainerProps): MapDispatchToProps => {
    return bindActionCreators({
        setActivePet,
        pushHistory,
        setSideDialog,
        setSideNavigation
    }, dispatch)
};


export const PetsAndPlansContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(PetsAndPlans);
