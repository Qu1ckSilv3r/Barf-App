import * as React from 'react';
import './components.scss'
import TouchClick from "../../components/touchClick";
import {pushHistory} from "../landing/landingActions";
import {setSideDialog} from "../sideDialog/sideDialogActions";
import LanguageHelper from "../../languageHelper";
import {clearSideNavigation, closeSideNavigation, setSideNavigation} from "../navigationSide/sideNavigationActions";
import {ComponentCategory} from "./componentsReducer";

export interface LandingProps {
    componentCategories: ComponentCategory[],
    activeEntry: number

    clearSideNavigation: typeof clearSideNavigation,
    setSideDialog: typeof setSideDialog,
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
            return <div className="categoryListItem" key={'encyclopediaEntry' + category._id}>
                <div className="header">
                    {category.name}
                </div>
            </div>

        })

        setSideNavigation(categoriesToRender)
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
