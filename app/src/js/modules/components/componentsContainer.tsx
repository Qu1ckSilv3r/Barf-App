import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {State} from "../../reducer";
import {pushHistory} from "../login/loginActions";
import {openSideDialog} from "../sideDialog/sideDialogActions";
import {clearSideNavigation, closeSideNavigation, setSideNavigation} from "../navigationSide/sideNavigationActions";
import Components from "./components";
import {ComponentCategory} from "./componentsReducer";

interface OwnContainerProps {
}

interface MapStateToProps {
    componentCategories: ComponentCategory[],
    activeEntry: number
}

const mapStateToProps = (state: State, ownProps: OwnContainerProps): MapStateToProps => {
    return {
        componentCategories: state.components.componentCategories,
        activeEntry: state.components.activeCategory
    }
};


interface MapDispatchToProps {
    pushHistory: typeof pushHistory,
    setSideNavigation: typeof setSideNavigation,
    openSideDialog: typeof openSideDialog,

    clearSideNavigation: typeof clearSideNavigation,
    closeSideNavigation: typeof closeSideNavigation,
}

const mapDispatchToProps = (dispatch: any, ownProps: OwnContainerProps): MapDispatchToProps => {
    return bindActionCreators({
        pushHistory,
        openSideDialog,
        setSideNavigation,
        clearSideNavigation,
        closeSideNavigation
    }, dispatch)
};


export const ComponentsContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Components);
