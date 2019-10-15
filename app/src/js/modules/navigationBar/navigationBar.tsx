import * as React from 'react';
import './navigationBar.scss'
import TouchClick from "../../components/touchClick";
import {pushHistory} from "../landing/landingActions";
import LanguageHelper from "../../languageHelper";
import {NavItem} from "./navigationBarReducer";
import {setActiveNavItem} from "./navigationBarActions";

export interface LandingProps {
    navItems: NavItem[],
    activeNavItem: number
    setActiveNavItem: typeof setActiveNavItem,
    pushHistory: typeof pushHistory,
}


export default class NavigationBar extends React.Component<LandingProps, {}> {

    setNavItem = (id: number, path: string) => {
        this.props.setActiveNavItem(id);
        this.props.pushHistory(path);
    }

    componentDidMount(): void {
        switch(window.location.pathname){
            case '/petsAndPlans':
                this.props.setActiveNavItem(0)
                break;
            case '/components':
                this.props.setActiveNavItem(1)
                break;
            case '/encyclopedia':
                this.props.setActiveNavItem(2)
                break;
            case '/settings':
                this.props.setActiveNavItem(3)
                break;
        }
    }

    render() {
        const {
            navItems,
            activeNavItem,
        } = this.props;

        const navItemsToRender = navItems && navItems.map((item, index) => {
            if (item.name === 'settings') {
                return <TouchClick className={"navItem settings" + (activeNavItem === item._id ? ' active' : '')}
                                   key={'navItem' + item._id} onClick={() => this.setNavItem(item._id, item.path)}>
                    <div className={"name" + (activeNavItem === item._id ? ' active' : '')}>
                        {LanguageHelper.getString('nav_' + item.name)}
                    </div>
                    <div className={"icon settings" + (activeNavItem === item._id ? ' active' : '')}
                         style={{backgroundImage: "url('" + item.icon + (activeNavItem === item._id ? '_white' : '') + ".png')"}}/>
                </TouchClick>
            } else {
                return <TouchClick className={"navItem" + (activeNavItem === item._id ? ' active' : '')}
                                   key={'navItem' + item._id} onClick={() => this.setNavItem(item._id, item.path)}>
                    <div className={"icon" + (activeNavItem === item._id ? ' active' : '')}
                         style={{backgroundImage: "url('" + item.icon + (activeNavItem === item._id ? '_white' : '') + ".png')"}}/>
                    <div className={"name" + (activeNavItem === item._id ? ' active' : '')}>
                        {LanguageHelper.getString('nav_' + item.name)}
                    </div>
                </TouchClick>
            }

        })

        return (
            <div className="navigationBarWrapper">
                {navItemsToRender}
            </div>
        );
    }
}
