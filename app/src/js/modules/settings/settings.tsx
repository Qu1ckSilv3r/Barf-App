import * as React from 'react';
import './settings.scss'
import TouchClick from "../../components/touchClick";
import {pushHistory} from "../login/loginActions";
import {openSideDialog} from "../sideDialog/sideDialogActions";
import LanguageHelper from "../../languageHelper";
import {clearSideNavigation, closeSideNavigation, setSideNavigation} from "../navigationSide/sideNavigationActions";
import {logout} from "../login/loginActions";

export interface LandingProps {
    settings: any[],
    activeSetting: number

    clearSideNavigation: typeof clearSideNavigation,
    openSideDialog: typeof openSideDialog,
    setSideNavigation: typeof setSideNavigation,
    closeSideNavigation: typeof closeSideNavigation,
    pushHistory: typeof pushHistory,

    logout: typeof logout,
}


export default class Settings extends React.Component<LandingProps, {}> {

    componentDidMount(): void {
        this.props.closeSideNavigation()
    }


    render() {
        const {
            logout,
        } = this.props;


        return (
            <div className="settings">
                {LanguageHelper.getString('nav_settings')}
                <TouchClick onClick={() => logout()}><b>logout</b></TouchClick>
            </div>
        );
    }
}
