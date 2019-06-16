import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {
    testAction
} from '../actions/landingActions';
import {State} from "../reducers/reducer";
import Landing from '../components/landing';

export interface LandingContainerOwnProps {
}

export interface LandingContainerMapStateToProps {
   foo: string
}

const mapStateToProps = (state: State, ownProps: LandingContainerOwnProps): LandingContainerMapStateToProps => {
    return {
        foo: state.landing.foo
    }
};


export interface LandingContainerMapDispatchToProps {
    testAction: typeof testAction
}

const mapDispatchToProps = (dispatch: any, ownProps: LandingContainerOwnProps): LandingContainerMapDispatchToProps => {
    return bindActionCreators({
        testAction
    }, dispatch)
};


const LandingContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Landing);

export default LandingContainer