import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {
    testAction
} from '../actions/indexActions';
import {State} from "../reducers/reducer";
import IndexTest from '../components/index';

export interface LoginContainerOwnProps {
}

export interface LoginContainerMapStateToProps {
   foo: string
}

const mapStateToProps = (state: State, ownProps: LoginContainerOwnProps): LoginContainerMapStateToProps => {
    return {
        foo: state.index.foo
    }
};


export interface LoginContainerMapDispatchToProps {
    testAction: typeof testAction
}

const mapDispatchToProps = (dispatch: any, ownProps: LoginContainerOwnProps): LoginContainerMapDispatchToProps => {
    return bindActionCreators({
        testAction
    }, dispatch)
};


const IndexContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)
(IndexTest);

export default IndexContainer