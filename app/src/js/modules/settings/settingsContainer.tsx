import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {State} from "../../reducer";
import {pushHistory} from "../login/loginActions";
import {openSideDialog} from "../sideDialog/sideDialogActions";
import {clearSideNavigation, closeSideNavigation, setSideNavigation} from "../navigationSide/sideNavigationActions";
import Settings from "./settings";
import {logout} from "../login/loginActions";

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
    openSideDialog: typeof openSideDialog,
    logout: typeof logout,
    clearSideNavigation: typeof clearSideNavigation,
    closeSideNavigation: typeof closeSideNavigation,
}

const mapDispatchToProps = (dispatch: any, ownProps: OwnContainerProps): MapDispatchToProps => {
    return bindActionCreators({
        pushHistory,
        openSideDialog,
        setSideNavigation,
        clearSideNavigation,
        closeSideNavigation,
        logout
    }, dispatch)
};


export const SettingsContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Settings);
