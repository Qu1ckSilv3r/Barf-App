import * as React from 'react';
import './encyclopedia.scss'
import TouchClick from "../../components/touchClick";
import {pushHistory} from "../landing/landingActions";
import {openSideDialog} from "../sideDialog/sideDialogActions";
import LanguageHelper from "../../languageHelper";
import {clearSideNavigation, closeSideNavigation, setSideNavigation} from "../navigationSide/sideNavigationActions";
import {EncyclopediaEntry} from "./encyclopediaReducer";
import EncyclopediaListItemContainer from "../../components/encyclopediaListItem/encyclopediaListItemContainer";
import SearchBarContainer from "../../components/searchBar/searchBarContainer";

export interface LandingProps {
    entries: EncyclopediaEntry[],
    activeEntry: number,

    clearSideNavigation: typeof clearSideNavigation,
    openSideDialog: typeof openSideDialog,
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
            setSideNavigation,
        } = this.props;

        const entriesToRender = entries && entries.map((entry, index) => {
            return (
                <EncyclopediaListItemContainer key={'encyclopediaEntry' + entry._id} entry={entry}/>
            )
        })

        setSideNavigation(
            <div className="wrapper">
                <SearchBarContainer placeholder={LanguageHelper.getString('placeholder_searchEncyclopedia')}/>
                {entriesToRender}
            </div>
        )
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
