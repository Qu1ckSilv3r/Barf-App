import * as React from 'react';
import './components.scss'
import TouchClick from "../../components/touchClick";
import {pushHistory} from "../landing/landingActions";
import {openSideDialog} from "../sideDialog/sideDialogActions";
import LanguageHelper from "../../languageHelper";
import {clearSideNavigation, closeSideNavigation, setSideNavigation} from "../navigationSide/sideNavigationActions";
import {ComponentCategory} from "./componentsReducer";
import ComponentListItemContainer from "../../components/componentListItem/componentListItemContainer";
import SearchBarContainer from "../../components/searchBar/searchBarContainer";
import {ListAddButton} from "../../components/listAddButton";

export interface LandingProps {
    componentCategories: ComponentCategory[],
    activeEntry: number

    clearSideNavigation: typeof clearSideNavigation,
    openSideDialog: typeof openSideDialog,
    setSideNavigation: typeof setSideNavigation,
    closeSideNavigation: typeof closeSideNavigation,
    pushHistory: typeof pushHistory
}


export default class Components extends React.Component<LandingProps, {}> {

    componentDidMount(): void {
        const {
            componentCategories,
            //activeEntry,
            //setSideDialog,
            setSideNavigation
        } = this.props;

        const categoriesToRender = componentCategories && componentCategories.map((category, index) => {
            return (
                <ComponentListItemContainer key={'category' + category._id} category={category}
                                            edit={() => console.log("edit (?) componentCategory " + category._id)}/>
            )


        })

        setSideNavigation(<div className="wrapper">
            <SearchBarContainer placeholder={LanguageHelper.getString('placeholder_searchComponents')}/>
            <ListAddButton label={LanguageHelper.getString('button_addComponent')} icon={'assets/icons/plus.png'} onClick={() => console.log("add component")}/>
            {categoriesToRender}
        </div>)
    }


    render() {
        const {

            pushHistory,

        } = this.props;


        return (
            <div className="components">
                {LanguageHelper.getString('nav_components')}
                <TouchClick onClick={() => pushHistory('/')}>go to landing</TouchClick>
            </div>
        );
    }
}
