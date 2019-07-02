import * as React from 'react';
import '../../../scss/components/landing.scss'
import * as landingActions from "./landingActions";
import {LandingTabs, LoginInputs, LoginValidities, RegisterInputs, RegisterValidities} from "./landingReducer";
import {verifyLogin} from "./landingActions";
import {verifyRegister} from "./landingActions";
import {Input} from "../../components/input";
import LanguageHelper from "../../languageHelper";

export interface LandingProps {
    login: LoginInputs,
    register: RegisterInputs,

    setLoginInput: typeof landingActions.setLoginInput,
    setRegisterInput: typeof landingActions.setRegisterInput,
    activeTab: LandingTabs
    setActiveTab: typeof landingActions.setActiveTab,

    loginValidities: LoginValidities,
    registerValidities: RegisterValidities,

    verifyLogin: typeof verifyLogin,
    verifyRegister: typeof verifyRegister
}

export default class Landing extends React.Component<LandingProps, {}> {

    public render() {
        const {
            login,
            register,
            setLoginInput,
            setRegisterInput,
            activeTab,
            setActiveTab,
            loginValidities,
            registerValidities,
            verifyLogin,
            verifyRegister,
        } = this.props;
        return (
            <div className="landing">
                <div className="section1">
                    <div className="logo"/>
                    <div className="loginWrapper" style={{backgroundColor: 'lightgreen'}}>
                        <div className="tab">
                            <div className="login" onClick={() => setActiveTab('login')}>
                                Login
                            </div>
                            <div className="register" onClick={() => setActiveTab('register')}>
                                Register
                            </div>
                        </div>
                        {activeTab}
                    </div>
                    {activeTab === 'login' ?
                        <div className="loginInputWrapper">
                            <Input
                                label={LanguageHelper.getString('label_username')}
                                onChange={(text: string) => setLoginInput({key: 'username', value: text})}
                                type={'text'}
                                value={login.username}
                                valid={loginValidities.usernameAndPassword}/>
                            <Input
                                label={LanguageHelper.getString('label_password')}
                                onChange={(text: string) => setLoginInput({key: 'username', value: text})}
                                type={login.passwordVisibility ? 'text' : 'password'}
                                value={login.password}
                                valid={loginValidities.usernameAndPassword}
                                validityInfo={LanguageHelper.getString('feedback_login')}/>
                            <button onClick={() => verifyLogin(login)}>Login</button>
                        </div> :
                        <div className="registerInputWrapper">
                            <Input
                                label={LanguageHelper.getString('label_username')}
                                onChange={(text: string) => setRegisterInput({key: 'username', value: text})}
                                type={'text'}
                                value={register.username}
                                valid={registerValidities.username}
                                validityInfo={LanguageHelper.getString('feedback_username')}/>
                            <Input
                                label={LanguageHelper.getString('label_email')}
                                onChange={(text: string) => setRegisterInput({key: 'email', value: text})}
                                type={'text'}
                                value={register.email}
                                valid={registerValidities.email}
                                validityInfo={LanguageHelper.getString('feedback_email')}/>
                            <Input
                                label={LanguageHelper.getString('label_password')}
                                onChange={(text: string) => setRegisterInput({key: 'password', value: text})}
                                type={register.passwordVisibility ? 'text' : 'password'}
                                value={register.password}
                                valid={registerValidities.password}
                                validityInfo={LanguageHelper.getString('feedback_password')}/>
                            <Input
                                label={LanguageHelper.getString('label_passwordRepeat')}
                                onChange={(text: string) => setRegisterInput({key: "repeatedPassword", value: text})}
                                type={register.repeatedPasswordVisibility ? 'text' : 'password'}
                                value={register.repeatedPassword}
                                valid={registerValidities.repeatedPassword}
                                validityInfo={LanguageHelper.getString('feedback_passwordRepeat')}/>
                            <button onClick={() => verifyRegister(register)}>Register</button>

                        </div>}
                    Login - username
                    <input type="text" value={login.username}
                           onChange={(e) => setLoginInput({key: 'username', value: e.target.value})}/>
                    Register - username
                    <input type="text" value={register.username}
                           onChange={(e) => setRegisterInput({key: 'username', value: e.target.value})}/>
                </div>
            </div>
        );
    }
}
