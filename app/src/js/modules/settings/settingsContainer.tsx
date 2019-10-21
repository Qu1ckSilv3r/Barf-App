import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {State} from "../../reducer";
import {pushHistory} from "../landing/landingActions";
import {setSideDialog} from "../sideDialog/sideDialogActions";
import {clearSideNavigation, closeSideNavigation, setSideNavigation} from "../navigationSide/sideNavigationActions";
import Settings from "./settings";

interface OwnContainerProps {
}

interface MapStateToProps {
    settings: any[],
    activeSetting: number
}

const mapStateToProps = (state: State, ownProps: OwnContainerProps): MapStateToProps => {
    return {
        settings: state.settings.settings,
        activeSetting: state.settings.activeSetting
    }
};


interface MapDispatchToProps {
    pushHistory: typeof pushHistory,
    setSideNavigation: typeof setSideNavigation,
    setSideDialog: typeof setSideDialog,

    clearSideNavigation: typeof clearSideNavigation,
    closeSideNavigation: typeof closeSideNavigation,
}

const mapDispatchToProps = (dispatch: any, ownProps: OwnContainerProps): MapDispatchToProps => {
    return bindActionCreators({
        pushHistory,
        setSideDialog,
        setSideNavigation,
        clearSideNavigation,
        closeSideNavigation
    }, dispatch)
};


export const SettingsContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Settings);
