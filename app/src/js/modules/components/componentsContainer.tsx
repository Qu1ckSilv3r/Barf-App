import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {State} from "../../reducer";
import {pushHistory} from "../login/loginActions";
import {openSideDialog} from "../sideDialog/sideDialogActions";
import {clearSideNavigation, closeSideNavigation, setSideNavigation} from "../navigationSide/sideNavigationActions";
import Components from "./components";
import {ComponentCategory} from "./componentsReducer";
import {setComponentsInState} from "./componentsActions";
import {Component} from "../../../../datamodels";

interface OwnContainerProps {
}

interface MapStateToProps {
    componentCategories: ComponentCategory[],
    activeEntry: number,
    userId: number,
    components: Component[],
    activeCategory: ComponentCategory
}

const mapStateToProps = (state: State, ownProps: OwnContainerProps): MapStateToProps => {
    const activeCategory = state.components.componentCategories.find((category) => category._id === state.components.activeCategory) || state.components.componentCategories[0];
    return {
        componentCategories: state.components.componentCategories,
        activeEntry: state.components.activeCategory,
        activeCategory: activeCategory,
        userId: state.login.userId,
        components: state.components.components
    }
};


interface MapDispatchToProps {
    pushHistory: typeof pushHistory,
    setSideNavigation: typeof setSideNavigation,
    openSideDialog: typeof openSideDialog,
    setComponentsInState: typeof setComponentsInState,

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
        setComponentsInState
    }, dispatch)
};


export const ComponentsContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Components);
