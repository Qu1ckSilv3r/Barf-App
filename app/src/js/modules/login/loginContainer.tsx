import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {
    setLoginInput, setRegisterInput, setActiveTab, login, pushHistory, register
} from './loginActions';
import {State} from "../../reducer";
import Login from './login';
import {LandingTabs, RegisterInputs} from "./loginReducer";
import {openSideDialog} from "../sideDialog/sideDialogActions";

interface OwnContainerProps {
}

interface MapStateToProps {
    username: string,
    password: string,
    passwordVisibility: boolean,
    stayLoggedIn: boolean,

    registerObj: RegisterInputs,
    activeTab: LandingTabs,

    sideDialog: boolean,
    loginError?: string,
    registerError?: string,
    registerSuccess?: boolean
}

const mapStateToProps = (state: State, ownProps: OwnContainerProps): MapStateToProps => {
    return {
        username: state.login.username,
        password: state.login.password,
        passwordVisibility: state.login.passwordVisibility,
        stayLoggedIn: state.login.stayLoggedIn,

        loginError: state.login.loginError,
        registerError: state.login.registerError,
        registerSuccess: state.login.registerSuccess,

        registerObj: state.login.register,
        activeTab: state.login.activeTab,

        sideDialog: state.sideDialog.opened,
    }
};


interface MapDispatchToProps {
    setLoginInput: typeof setLoginInput,
    setRegisterInput: typeof setRegisterInput,
    setActiveTab: typeof setActiveTab,
    login: typeof login,
    register: typeof register,
    openSideDialog: typeof openSideDialog,

    pushHistory: typeof pushHistory
}

const mapDispatchToProps = (dispatch: any, ownProps: OwnContainerProps): MapDispatchToProps => {
    return bindActionCreators({
        setLoginInput,
        setRegisterInput,
        setActiveTab,
        login,
        register,
        openSideDialog,
        pushHistory
    }, dispatch)
};


export const LoginContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Login);
