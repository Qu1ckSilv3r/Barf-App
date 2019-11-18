import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {State} from "../../reducer";
import SideNavigation from './sideNavigation';
import {clearSideNavigation, closeSideNavigation} from "./sideNavigationActions";

interface OwnContainerProps {

}

interface MapStateToProps {
    content: any,
    opened: boolean,
}

const mapStateToProps = (state: State, ownProps: OwnContainerProps): MapStateToProps => {
    return {
        content: state.sideNavigation.content,
        opened: state.sideNavigation.opened
    }
};


interface MapDispatchToProps {

    clearSideNavigation: typeof clearSideNavigation,
    closeSideNavigation: typeof closeSideNavigation
}

const mapDispatchToProps = (dispatch: any, ownProps: OwnContainerProps): MapDispatchToProps => {
    return bindActionCreators({
        clearSideNavigation,
        closeSideNavigation
    }, dispatch)
};


const SideNavigationContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(SideNavigation);

export default SideNavigationContainer