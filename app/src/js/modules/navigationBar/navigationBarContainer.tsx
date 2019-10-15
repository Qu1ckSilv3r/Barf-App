import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {State} from "../../reducer";
import NavigationBar from './navigationBar';
import {pushHistory} from "../landing/landingActions";
import {NavItem} from "./navigationBarReducer";
import {setActiveNavItem} from "./navigationBarActions";

interface OwnContainerProps {
}

interface MapStateToProps {
    navItems: NavItem[],
    activeNavItem: number
}

const mapStateToProps = (state: State, ownProps: OwnContainerProps): MapStateToProps => {
    return {
        navItems: state.navigationBar.navItems,
        activeNavItem: state.navigationBar.activeNavItem
    }
};


interface MapDispatchToProps {
    setActiveNavItem: typeof setActiveNavItem,
    pushHistory: typeof pushHistory,
}

const mapDispatchToProps = (dispatch: any, ownProps: OwnContainerProps): MapDispatchToProps => {
    return bindActionCreators({
        setActiveNavItem,
        pushHistory,
    }, dispatch)
};


export const NavigationBarContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(NavigationBar);
