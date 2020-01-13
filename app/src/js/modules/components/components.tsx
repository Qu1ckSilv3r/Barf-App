import * as React from 'react';
import './components.scss'
import {pushHistory} from "../login/loginActions";
import {openSideDialog} from "../sideDialog/sideDialogActions";
import LanguageHelper from "../../languageHelper";
import {clearSideNavigation, closeSideNavigation, setSideNavigation} from "../navigationSide/sideNavigationActions";
import {ComponentCategory} from "./componentsReducer";
import ComponentListItemContainer from "../../components/componentListItem/componentListItemContainer";
import SearchBarContainer from "../../components/searchBar/searchBarContainer";
import {ListAddButton} from "../../components/listAddButton";
import {AlphabeticalDivider} from "../../components/alphabeticalDivider";
import {appApi} from "../../appApi";
import {setComponentsInState} from "./componentsActions";
import {Component} from "../../../../datamodels";
import TouchClick from "../../components/touchClick";

export interface LandingProps {
    userId: number,
    componentCategories: ComponentCategory[],
    activeEntry: number,
    setComponentsInState: typeof setComponentsInState,
    activeCategory: ComponentCategory,

    components: Component[]
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
            setSideNavigation,
            userId,
            setComponentsInState
        } = this.props;

        appApi.getComponentsByUser(userId)
            .then((re) => {
                setComponentsInState(re)
            })
            .catch((er) => console.error(er))


        const categoriesToRender = componentCategories && componentCategories.map((category, index) => {
            return (
                <ComponentListItemContainer key={'category' + category._id} category={category}
                                            edit={() => console.log("edit (?) componentCategory " + category._id)}/>
            )


        })

        setSideNavigation(<div className="wrapper">
            <SearchBarContainer placeholder={LanguageHelper.getString('placeholder_searchComponents')}/>
            <ListAddButton label={LanguageHelper.getString('button_addComponent')} icon={'assets/icons/plus.png'}
                           onClick={() => console.log("add component")}/>
            {categoriesToRender}
        </div>)
    }

    createComponents = () => {
        const component1 = {
            categorie: 'veg',
            name: 'Gurke',
            user_id: 1
        };
        const component2 = {
            categorie: 'veg',
            name: 'Karotte',
            user_id: 1
        };
        const component3 = {
            categorie: 'fru',
            name: 'Apfel',
            user_id: 1
        };
        const component4 = {
            categorie: 'fru',
            name: 'Mango',
            user_id: 1
        };
        const component5 = {
            categorie: 'bon',
            name: 'Putenhals',
            animal_sort: 'pute',
            user_id: 1
        };
        const component6 = {
            categorie: 'bon',
            name: 'Lammrippe',
            animal_sort: 'lamm',
            user_id: 1
        };
        const component7 = {
            categorie: 'mus',
            name: 'Rindfleisch',
            animal_sort: 'rind',
            user_id: 1
        };
        const component8 = {
            categorie: 'mus',
            name: 'Putenfleisch',
            animal_sort: 'pute',
            user_id: 1
        };
        const component9 = {
            categorie: 'int',
            name: 'Rinderpansen (grün)',
            animal_sort: 'rind',
            user_id: 1
        };
        const component10 = {
            categorie: 'int',
            name: 'Rinderniere',
            animal_sort: 'rind',
            user_id: 1
        };

        appApi.createComponent(component1);
        appApi.createComponent(component2);
        appApi.createComponent(component3);
        appApi.createComponent(component4);
        appApi.createComponent(component5);
        appApi.createComponent(component6);
        appApi.createComponent(component7);
        appApi.createComponent(component8);
        appApi.createComponent(component9);
        appApi.createComponent(component10);
    }

    compare = (a: Component, b: Component) => {
        const nameA = a.name!.toUpperCase();
        const nameB = b.name!.toUpperCase();

        let comparison = 0;
        if (nameA > nameB) {
            comparison = 1;
        } else if (nameA < nameB) {
            comparison = -1;
        }
        return comparison;
    }

    render() {
        const {
            components,
            activeCategory
        } = this.props;

        const componentsSorted = components.sort((a, b) => this.compare(a, b))
        let alphabeticalDividers: any[] = [];
        let currentLetter = '';
        const componentsToRender = componentsSorted.filter((component) => component.categorie === activeCategory.type).map((component, index) => {


                if (currentLetter !== component.name![0]) {
                    currentLetter = component.name![0];
                    alphabeticalDividers.push({letter: component.name![0], position: index})
                }
                return <TouchClick onClick={() => console.log('would open edit')}
                                   key={'component' + component.component_id} className="componentItem">
                    <div className="componentName">
                        {component.name}
                    </div>
                </TouchClick>

        }).filter((obj) => obj !== undefined);

        let shift = 0;
        alphabeticalDividers.forEach((divider) => {
            componentsToRender.splice(divider.position + shift, 0, <AlphabeticalDivider key={'divider' + divider.letter + divider.position} letter={divider.letter}/>);
            shift = shift + 1;
        })


        return (
            <div className="components">
                <TouchClick onClick={() => this.createComponents()}>create components (!use only once!)</TouchClick>
                {componentsToRender.length < 1 ?
                    <div className="componentsWrapper">
                        <div className="emptyListInfo">{LanguageHelper.getString('emptyListInfo')}</div>
                    </div>
                    :
                    <div className="componentsWrapper">
                        <div className="itemWrapper">
                            {componentsToRender}
                        </div>

                    </div>
                }
            </div>
        );
    }
}
