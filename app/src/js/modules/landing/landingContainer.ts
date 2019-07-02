import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {
    setLoginInput, setRegisterInput, setActiveTab, verifyLogin, verifyRegister
} from './landingActions';
import {State} from "../../reducer";
import Landing from './landing';
import {LandingTabs, LoginInputs, LoginValidities, RegisterInputs, RegisterValidities} from "./landingReducer";

export interface LandingContainerOwnProps {
}

export interface LandingContainerMapStateToProps {
    login: LoginInputs,
    register: RegisterInputs,
    activeTab: LandingTabs,
    loginValidities: LoginValidities,
    registerValidities: RegisterValidities
}

const mapStateToProps = (state: State, ownProps: LandingContainerOwnProps): LandingContainerMapStateToProps => {
    return {
        login: state.landing.login,
        register: state.landing.register,
        activeTab: state.landing.activeTab,

        loginValidities: state.landing.loginValidities,
        registerValidities: state.landing.registerValidities,
    }
};


export interface LandingContainerMapDispatchToProps {
    setLoginInput: typeof setLoginInput,
    setRegisterInput: typeof setRegisterInput,
    setActiveTab: typeof setActiveTab,
    verifyLogin: typeof verifyLogin,
    verifyRegister: typeof verifyRegister
}

const mapDispatchToProps = (dispatch: any, ownProps: LandingContainerOwnProps): LandingContainerMapDispatchToProps => {
    return bindActionCreators({
        setLoginInput,
        setRegisterInput,
        setActiveTab,
        verifyLogin,
        verifyRegister
    }, dispatch)
};


const LandingContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Landing);

export default LandingContainer