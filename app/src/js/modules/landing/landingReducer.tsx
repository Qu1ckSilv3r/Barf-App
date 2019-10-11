import * as landingActions from "./landingActions";
import {reducerWithInitialState} from "typescript-fsa-reducers"

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

export interface LandingState {
    login: LoginInputs,
    loginValidities: LoginValidities,
    register: RegisterInputs,
    registerValidities: RegisterValidities,
    activeTab: LandingTabs,
    loggedIn: boolean
}


const defaultState: LandingState = {
    login: {
        username: '',
        password: '',
        passwordVisibility: false,
        stayLoggedIn: false
    },
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
    loggedIn: false,
};

export const LandingReducer = reducerWithInitialState(defaultState)
    .case(landingActions.setLoginInput, (state, payload) => {
        return {
            ...state,
            login: {
                ...state.login,
                [payload.key]: payload.value
            },
            loginValidities: {
                ...defaultState.loginValidities
            }
        }
    })
    .case(landingActions.setLoginValidity, (state, payload) => {
        return {
            ...state,
            loginValidities: {
                ...state.loginValidities,
                [payload.key]: payload.value
            }
        }
    })
    .case(landingActions.resetLoginValidities, (state, payload) => {
        return {
            ...state,
            loginValidities: {
                ...defaultState.loginValidities
            }
        }
    })
    .case(landingActions.setRegisterInput, (state, payload) => {
        return {
            ...state,
            register: {
                ...state.register,
                [payload.key]: payload.value
            },
            registerValidities: {
                ...defaultState.registerValidities
            }
        }
    }).case(landingActions.setRegisterValidity, (state, payload) => {
        return {
            ...state,
            registerValidities: {
                ...state.registerValidities,
                [payload.key]: payload.value
            }
        }
    })
    .case(landingActions.resetRegisterValidities, (state, payload) => {
        return {
            ...state,
            registerValidities: {
                ...defaultState.registerValidities
            }
        }
    })
    .case(landingActions.setActiveTab, (state, payload) => {
        return {
            ...state,
            activeTab: payload
        }
    })
    .case(landingActions.login, (state, payload) => {
        return {
            ...state,
            loggedIn: true,
            loginValidities: {
                ...defaultState.loginValidities
            }
            ,
            registerValidities: {
                ...defaultState.registerValidities
            }
        }
    })
    .case(landingActions.logout, (state, payload) => {
        return {
            ...state,
            loggedIn: false
        }
    })

