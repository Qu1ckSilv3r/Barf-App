import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {
    setLoginInput, setRegisterInput, setActiveTab, verifyLogin, verifyRegister, pushHistory
} from './landingActions';
import {State} from "../../reducer";
import Landing from './landing';
import {LandingTabs, LoginInputs, LoginValidities, RegisterInputs, RegisterValidities} from "./landingReducer";
import {openSideDialog} from "../sideDialog/sideDialogActions";

interface OwnContainerProps {
}

interface MapStateToProps {
    login: LoginInputs,
    register: RegisterInputs,
    activeTab: LandingTabs,
    loginValidities: LoginValidities,
    registerValidities: RegisterValidities,
    sideDialog: boolean
}

const mapStateToProps = (state: State, ownProps: OwnContainerProps): MapStateToProps => {
    return {
        login: state.landing.login,
        register: state.landing.register,
        activeTab: state.landing.activeTab,
        sideDialog: state.sideDialog.opened,
        loginValidities: state.landing.loginValidities,
        registerValidities: state.landing.registerValidities,
    }
};


interface MapDispatchToProps {
    setLoginInput: typeof setLoginInput,
    setRegisterInput: typeof setRegisterInput,
    setActiveTab: typeof setActiveTab,
    verifyLogin: typeof verifyLogin,
    verifyRegister: typeof verifyRegister,
    openSideDialog: typeof openSideDialog,

    pushHistory: typeof pushHistory
}

const mapDispatchToProps = (dispatch: any, ownProps: OwnContainerProps): MapDispatchToProps => {
    return bindActionCreators({
        setLoginInput,
        setRegisterInput,
        setActiveTab,
        verifyLogin,
        verifyRegister,
        openSideDialog,
        pushHistory
    }, dispatch)
};


export const LandingContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Landing);
