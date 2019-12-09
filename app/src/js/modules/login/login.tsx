import * as React from 'react';
import './login.scss'
import * as loginActions from "./loginActions";
import {LandingTabs, RegisterInputs} from "./loginReducer";
import {pushHistory, login, register} from "./loginActions";
import {Input} from "../../components/input";
import LanguageHelper from "../../languageHelper";
import {Checkbox} from "../../components/checkbox";
import {ExtendingButton} from "../../components/extendingButton";
import {openSideDialog} from "../sideDialog/sideDialogActions";
import TouchClick from "../../components/touchClick";
import SideDialogContainer from "../sideDialog/sideDialogContainer";

export interface LandingProps {
    username: string,
    password: string,
    passwordVisibility: boolean,
    stayLoggedIn: boolean,

    registerObj: RegisterInputs,

    setLoginInput: typeof loginActions.setLoginInput,
    setRegisterInput: typeof loginActions.setRegisterInput,
    activeTab: LandingTabs
    setActiveTab: typeof loginActions.setActiveTab,

    login: typeof login,
    register: typeof register,

    loginError?: string,
    registerError?: string,
    registerSuccess?: boolean

    someField?: boolean,

    sideDialog: boolean
    openSideDialog: typeof openSideDialog,
    pushHistory: typeof pushHistory,
}

export default class Login extends React.Component<LandingProps, {}> {


    renderLoginTab = () => {
        const {
            setLoginInput,
            username,
            password,
            passwordVisibility,
            stayLoggedIn,
            login,
            loginError
        } = this.props;
        return (
            <div className="loginInputWrapper">
                <Input
                    label={LanguageHelper.getString('label_username')}
                    onChange={(text: string) => setLoginInput({key: 'username', value: text})}
                    type={'text'}
                    value={username}/>
                <Input
                    label={LanguageHelper.getString('label_password')}
                    onChange={(text: string) => setLoginInput({key: 'password', value: text})}
                    type={passwordVisibility ? 'text' : 'password'}
                    value={password}
                    validityInfo={LanguageHelper.getString('feedback_login')}/>
                {loginError ?
                    <div className="error">
                        {LanguageHelper.getString('login_error')}
                    </div> : null}
                <Checkbox label={'stay logged in'} value={stayLoggedIn}
                          onChange={(e: boolean) => setLoginInput({
                              key: "stayLoggedIn",
                              value: e
                          })}/>
                <button onClick={() => login(username, password, stayLoggedIn)}>Login</button>
                <ExtendingButton icon={'/assets/test_image.png'} label={'Testbutton'}
                                 onClick={() => openSideDialog()}/>
            </div>
        )

    }

    renderRegisterTab = () => {
        const {
            setRegisterInput,
            registerObj,
            register,
            registerError,
            registerSuccess
        } = this.props;

        return (registerSuccess ?
                <div className="registerInputWrapper">
                    <div className="registerSuccess">
                        Dein Konto wurde erfolgreich registriert. Du kannst dich jetzt anmelden.
                    </div>
                </div> :
                <div className="registerInputWrapper">
                    <Input
                        label={LanguageHelper.getString('label_username')}
                        onChange={(text: string) => setRegisterInput({key: 'username', value: text})}
                        type={'text'}
                        value={registerObj.username}

                        validityInfo={LanguageHelper.getString('feedback_username')}/>
                    <Input
                        label={LanguageHelper.getString('label_email')}
                        onChange={(text: string) => setRegisterInput({key: 'email', value: text})}
                        type={'text'}
                        value={registerObj.email}

                        validityInfo={LanguageHelper.getString('feedback_email')}/>
                    <Input
                        label={LanguageHelper.getString('label_password')}
                        onChange={(text: string) => setRegisterInput({key: 'password', value: text})}
                        type={registerObj.passwordVisibility ? 'text' : 'password'}
                        value={registerObj.password}

                        validityInfo={LanguageHelper.getString('feedback_password')}/>
                    <Input
                        label={LanguageHelper.getString('label_passwordRepeat')}
                        onChange={(text: string) => setRegisterInput({
                            key: "repeatedPassword",
                            value: text
                        })}
                        type={registerObj.repeatedPasswordVisibility ? 'text' : 'password'}
                        value={registerObj.repeatedPassword}

                        validityInfo={LanguageHelper.getString('feedback_passwordRepeat')}/>
                    <button onClick={() => register(registerObj)}>Register</button>
                    <Checkbox label={'agreed'} value={registerObj.policyAgreed}
                              onChange={(e: boolean) => setRegisterInput({
                                  key: "policyAgreed",
                                  value: e
                              })}

                              validityInfo={LanguageHelper.getString('feedback_policyAgreed')}/>
                    {registerError ?
                        <div className="error">{LanguageHelper.getString(registerError)}</div> : null}
                </div>

        )

    }

    render() {
        const {

            activeTab,
            setActiveTab,
            pushHistory
        } = this.props;
        return (
            <div className="login">
                <div className="section1">

                    <div className="contentWrapper">
                        <div className="logo"/>
                        <div className="loginRegisterWrapper">
                            <div className="tabs">
                                <div className={"tab login" + (activeTab === 'login' ? " active" : "")}
                                     onClick={() => setActiveTab('login')}>
                                    {LanguageHelper.getString('button_login')}
                                </div>
                                <div className={"tab register" + (activeTab === 'register' ? " active" : "")}
                                     onClick={() => setActiveTab('register')}>
                                    {LanguageHelper.getString('button_register')}
                                </div>
                            </div>
                            {activeTab === 'login' ?
                                this.renderLoginTab() :
                                this.renderRegisterTab()}

                        </div>
                    </div>
                    <TouchClick onClick={() => pushHistory('/petsAndPlans')}> go to pets and plans</TouchClick>
                </div>

                <SideDialogContainer buttons={[]} content={<div>I AM CONTENT :D</div>} header={'SideDialog'}/>
            </div>
        );
    }
}
