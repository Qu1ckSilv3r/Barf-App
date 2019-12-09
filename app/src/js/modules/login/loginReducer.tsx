import * as loginActions from "./loginActions";
import {reducerWithInitialState} from "typescript-fsa-reducers"
import {actionCreatorFactory} from 'typescript-fsa';
import {LOCATION_CHANGE} from "react-router-redux";


const actionCreator = actionCreatorFactory();
const locationChange = actionCreator(LOCATION_CHANGE);
export type LandingTabs = 'login' | 'register'

export interface LoginInputs {
    username: string,
    password: string,
    passwordVisibility: boolean,
    stayLoggedIn: boolean
}

export interface LoginValidities {
    usernameAndPassword: boolean
}

export interface RegisterInputs {
    username: string,
    email: string,
    password: string,
    repeatedPassword: string,
    passwordVisibility: boolean,
    repeatedPasswordVisibility: boolean,
    policyAgreed: boolean,
}

export interface RegisterValidities {
    username: boolean,
    email: boolean,
    password: boolean,
    repeatedPassword: boolean,
    policyAgreed: boolean,
}

export interface LoginState {
    userId: number,
    username: string,
    password: string,
    passwordVisibility: boolean,
    stayLoggedIn: boolean,
    loginError?: string;

    loginValidities: LoginValidities,
    register: RegisterInputs,
    registerValidities: RegisterValidities,

    registerError?: string,
    regsiterInProgress: boolean,
    registerSuccess?: boolean,

    activeTab: LandingTabs,

    isAutoLogin: boolean,
    loggedIn: boolean,

    loginInProgress: boolean,
}


const defaultState: LoginState = {
    userId: -1,
    username: "",
    password: "",
    passwordVisibility: false,
    stayLoggedIn: false,

    loginValidities: {
        usernameAndPassword: true
    },
    register: {
        username: '',
        email: '',
        password: '',
        repeatedPassword: '',
        passwordVisibility: false,
        repeatedPasswordVisibility: false,
        policyAgreed: false,
    },
    registerValidities: {
        username: true,
        email: true,
        password: true,
        repeatedPassword: true,
        policyAgreed: true,
    },
    activeTab: 'login',
    isAutoLogin: false,
    loggedIn: false,

    regsiterInProgress: false,
    loginInProgress: false
};

export const LoginReducer = reducerWithInitialState(defaultState)
    .case(locationChange, (state, payload) => {
        return {
            /*
            ...defaultState,
             */
            ...state,
            registerSuccess: defaultState.registerSuccess
        }
    })
    .case(loginActions.setLoginInput, (state, payload) => {
        return {
            ...state,
            [payload.key]: payload.value,
            loginValidities: {
                ...defaultState.loginValidities
            }
        }
    })
    .case(loginActions.startLogin, (state, payload) => {
        return {
            ...state,
            loginInProgress: true
        }
    })
    .case(loginActions.loginSuccess, (state, payload) => {
        const {loginError, ...nonErrorState} = state
        return {
            ...nonErrorState,
            loggedIn: true,
            loginInProgress: false,
            userId: payload,
        }
    })
    .case(loginActions.loginFailed, (state, payload) => {
        return {
            ...state,
            loginError: payload,
            loginInProgress: false
        }
    })
    .case(loginActions.setLoginValidity, (state, payload) => {
        return {
            ...state,
            loginValidities: {
                ...state.loginValidities,
                [payload.key]: payload.value
            }
        }
    })
    .case(loginActions.resetLoginValidities, (state, payload) => {
        return {
            ...state,
            loginValidities: {
                ...defaultState.loginValidities
            }
        }
    })
    .case(loginActions.setRegisterInput, (state, payload) => {
        return {
            ...state,
            register: {
                ...state.register,
                [payload.key]: payload.value
            }
        }
    })
    .case(loginActions.registerSuccess, (state, payload) => {
        const {registerError, ...nonErrorState} = state
        return {
            ...nonErrorState,
            registerInProgress: false,
            registerSuccess: true
        }
    }).case(loginActions.registerFailed, (state, payload) => {
        return {
            ...state,
            registerInProgress: false,
            registerError: payload,
            registerSuccess: false,
        }
    })
    .case(loginActions.setActiveTab, (state, payload) => {
        return {
            ...state,
            activeTab: payload
        }
    })
    .case(loginActions.loggedOut, (state, payload) => {
        return {
            ...state,
            loggedIn: false,
            userId: -1
        }
    })

