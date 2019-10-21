import * as React from 'react';
import './encyclopedia.scss'
import TouchClick from "../../components/touchClick";
import {pushHistory} from "../landing/landingActions";
import {setSideDialog} from "../sideDialog/sideDialogActions";
import LanguageHelper from "../../languageHelper";
import {clearSideNavigation, closeSideNavigation, setSideNavigation} from "../navigationSide/sideNavigationActions";
import {EncyclopediaEntry} from "./encyclopediaReducer";

export interface LandingProps {
    entries: EncyclopediaEntry[],
    activeEntry: number,

    clearSideNavigation: typeof clearSideNavigation,
    setSideDialog: typeof setSideDialog,
    setSideNavigation: typeof setSideNavigation,
    closeSideNavigation: typeof closeSideNavigation,
    pushHistory: typeof pushHistory
}


export default class Encyclopedia extends React.Component<LandingProps, {}> {

    componentDidMount(): void {
        const {
            entries,
            //activeEntry,
            //setSideDialog,
            setSideNavigation
        } = this.props;

        const entriesToRender = entries && entries.map((entry, index) => {
            return <div className="encyclopediaListItem" key={'encyclopediaEntry' + entry._id}>
                <div className="header">
                    {entry.name}
                </div>
            </div>

        })

        setSideNavigation(entriesToRender)
    }


    render() {
        const {

            pushHistory,

        } = this.props;


        return (
            <div className="enyclopedia">
                {LanguageHelper.getString('nav_encyclopedia')}
                <TouchClick onClick={() => pushHistory('/')}>go to landing</TouchClick>
            </div>
        );
    }
}
