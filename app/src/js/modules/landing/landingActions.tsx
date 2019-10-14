import {actionCreatorFactory} from 'typescript-fsa';
import {LandingTabs, LoginInputs, LoginValidities, RegisterInputs, RegisterValidities} from "./landingReducer";
import {ThunkAction} from 'redux-thunk';
import {State} from "../../reducer";
import {history} from '../../App'
const actionCreator = actionCreatorFactory();

export const setLoginInput = actionCreator<{ key: keyof LoginInputs, value: string | boolean }>("SET_LOGIN_INPUT_LANDING");
export const setLoginValidity = actionCreator<{ key: keyof LoginValidities, value: boolean }>("SET_LOGIN_VALIDITY_LANDING");
export const resetLoginValidities = actionCreator("RESET_LOGIN_VALIDITIES_LANDING");


export const setRegisterInput = actionCreator<{ key: keyof RegisterInputs, value: string | boolean }>("SET_REGISTER_INPUT_LANDING");
export const setRegisterValidity = actionCreator<{ key: keyof RegisterValidities, value: boolean }>("SET_REGISTER_VALIDITY_LANDING");
export const resetRegisterValidities = actionCreator("RESET_REGISTER_VALIDITIES_LANDING");

export const setActiveTab = actionCreator<LandingTabs>("SET_ACTIVE_TAB_LANDING");

export const login = actionCreator('LOGIN');
export const logout = actionCreator('LOGOUT');

export const register = actionCreator('REGISTER')

export const verifyLogin = (loginObj: LoginInputs): ThunkAction<Promise<any>, State, any, any> => {
    return async (dispatch, getState) => {
        try {
            dispatch(resetLoginValidities())
            try {
                if (loginObj.username === 'testuser' && loginObj.password === '123123123') {
                    dispatch(login())
                } else {
                    dispatch(setLoginValidity({key: 'usernameAndPassword', value: false}))
                }
            } catch (er) {
                console.error("er", er)
            }
        } catch (er) {
            console.error("er", er)
        }
    }
}

export const verifyRegister = (registerObj: RegisterInputs): ThunkAction<Promise<any>, State, any, any> => {
    return async (dispatch, getState) => {
        try {
            dispatch(resetRegisterValidities())
            try {
                if (!registerObj.username) {
                    dispatch(setRegisterValidity({key: 'username', value: false}))
                }
               else if (!registerObj.email) {
                    dispatch(setRegisterValidity({key: 'email', value: false}))
                }
                else if (!registerObj.password) {
                    dispatch(setRegisterValidity({key: 'password', value: false}))
                }
                else if (registerObj.repeatedPassword !== registerObj.password) {
                    dispatch(setRegisterValidity({key: 'repeatedPassword', value: false}))
                }
                else if (!registerObj.policyAgreed) {
                    dispatch(setRegisterValidity({key: 'policyAgreed', value: false}))
                }
                else{
                    dispatch(register())
                }
            } catch (er) {
                console.error("er", er)
            }
        } catch (er) {
            console.error("er", er)
        }
    }
}

export const pushHistory = (path: string) => {
    return async () => {
        history.push(path)
    }
}