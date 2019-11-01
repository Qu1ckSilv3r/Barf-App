import * as React from 'react';
import './encyclopedia.scss'
import TouchClick from "../../components/touchClick";
import {pushHistory} from "../landing/landingActions";
import {setSideDialog} from "../sideDialog/sideDialogActions";
import LanguageHelper from "../../languageHelper";
import {clearSideNavigation, closeSideNavigation, setSideNavigation} from "../navigationSide/sideNavigationActions";
import {EncyclopediaEntry} from "./encyclopediaReducer";
import EncyclopediaListItemContainer from "../../components/encyclopediaListItem/encyclopediaListItemContainer";
import {setSearchValue} from "./encyclopediaActions";
import SearchBar from "../../components/searchBar";

export interface LandingProps {
    entries: EncyclopediaEntry[],
    activeEntry: number,
    searchValue: string,

    setSearchValue: typeof setSearchValue

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
            setSideNavigation,
            setSearchValue,
            searchValue
        } = this.props;

        const entriesToRender = entries && entries.map((entry, index) => {
            return (
                <EncyclopediaListItemContainer key={'encyclopediaEntry' + entry._id} entry={entry}/>
            )
        })

        setSideNavigation(
            <div className="wrapper">
                <SearchBar onChange={(value: string) => setSearchValue(value)} value={searchValue}/>
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
