import {actionCreatorFactory} from 'typescript-fsa';
import {LandingTabs, LoginInputs, LoginValidities, RegisterInputs, RegisterValidities} from "./loginReducer";
import {ThunkAction} from 'redux-thunk';
import {State} from "../../reducer";
import {history} from '../../App'
import {appApi} from "../../appApi";

const actionCreator = actionCreatorFactory();

export const setLoginInput = actionCreator<{ key: keyof LoginInputs, value: string | boolean }>("SET_LOGIN_INPUT_LANDING");
export const setLoginValidity = actionCreator<{ key: keyof LoginValidities, value: boolean }>("SET_LOGIN_VALIDITY_LANDING");
export const resetLoginValidities = actionCreator("RESET_LOGIN_VALIDITIES_LANDING");


export const setRegisterInput = actionCreator<{ key: keyof RegisterInputs, value: string | boolean }>("SET_REGISTER_INPUT_LANDING");
export const setRegisterValidity = actionCreator<{ key: keyof RegisterValidities, value: boolean }>("SET_REGISTER_VALIDITY_LANDING");
export const resetRegisterValidities = actionCreator("RESET_REGISTER_VALIDITIES_LANDING");

export const setActiveTab = actionCreator<LandingTabs>("SET_ACTIVE_TAB_LANDING");

export const login = (username: string, password: string, stayLoggedIn: boolean): ThunkAction<Promise<any>, State, any, any> => {
    return async (dispatch, getState) => {
        dispatch(startLogin());
        try {

            const result = await appApi.login(username, password)

            if (stayLoggedIn) {
                window.localStorage.setItem('rawmate_username', username)
                window.localStorage.setItem('rawmate_password', password)
            }

            dispatch(loginSuccess(result.user_id))

            //@ts-ignore
            const from = getState().router.location.state && getState().router.location.state.from && getState().router.location.state.from.pathname || '/petsAndPlans'
            dispatch(pushHistory(from));

        } catch (er) {
            console.error("er", er)
            window.localStorage.removeItem('rawmate_password')
            dispatch(loginFailed(er.message))
        }
    }
}

export const logout = (): ThunkAction<Promise<any>, State, any, any> => {
    return async (dispatch) => {
        dispatch(loggedOut());

        window.localStorage.removeItem('rawmate_username')
        window.localStorage.removeItem('rawmate_password')

        dispatch(pushHistory('/login'))
    }

}


export const startLogin = actionCreator('START_LOGIN');
export const loginFailed = actionCreator<string>('LOGIN_FAILED');
export const loginSuccess = actionCreator<number>('LOGIN_SUCCESS');
export const loggedOut = actionCreator("LOGGED_OUT");


export const startRegister = actionCreator('START_REGISTER');
export const registerFailed = actionCreator<string>('REGISTER_FAILED');
export const registerSuccess = actionCreator('REGISTER_SUCCESS')

export const register = (registerObj: RegisterInputs): ThunkAction<Promise<any>, State, any, any> => {
    return async (dispatch, getState) => {
        dispatch(startRegister());
        try {
            const {
                username,
                email,
                password,
                repeatedPassword,
                policyAgreed
            } = registerObj;
            if (!username) {
                throw new Error('no_username')
            } else if (!email) {
                throw new Error('no_email')
            } else if (!password) {
                throw new Error('no_password')
            } else if (repeatedPassword !== password) {
                throw new Error('password_dont_match')
            } else if (!policyAgreed) {
                throw new Error('no_policy')
            }

            const result = await appApi.createUser(username, password, email)
            console.log('register result', result)
            dispatch(registerSuccess())

        } catch (er) {
            dispatch(registerFailed(er.message))
            console.error("er", er)
        }
    }
}

export const pushHistory = (path: string) => {
    return async () => {
        history.push(path)
    }
}
