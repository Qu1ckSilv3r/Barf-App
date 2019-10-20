import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {State} from "../../reducer";
import SideNavigation from './sideNavigation';

interface OwnContainerProps {

}

interface MapStateToProps {
    content: any,

}

const mapStateToProps = (state: State, ownProps: OwnContainerProps): MapStateToProps => {
    return {
        content: state.sideNavigation.content,
    }
};


interface MapDispatchToProps {

}

const mapDispatchToProps = (dispatch: any, ownProps: OwnContainerProps): MapDispatchToProps => {
    return bindActionCreators({

    }, dispatch)
};


const SideNavigationContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(SideNavigation);

export default SideNavigationContainer