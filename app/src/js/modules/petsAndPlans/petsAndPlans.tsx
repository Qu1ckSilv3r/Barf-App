import * as React from 'react';
import './petsAndPlans.scss'
import {Pet} from "./petsAndPlansReducer";
import {setActivePet} from "./petsAndPlansActions";
import TouchClick from "../../components/touchClick";
import {pushHistory} from "../landing/landingActions";
import PetListItemContainer from "../../components/petListItem/petListItemContainer";
import {setSideDialog} from "../sideDialog/sideDialogActions";
import LanguageHelper from "../../languageHelper";
import {clearSideNavigation, closeSideNavigation, setSideNavigation} from "../navigationSide/sideNavigationActions";

export interface LandingProps {
    pets: Pet[],
    activePet: number
    setActivePet: typeof setActivePet,
    setSideDialog: typeof setSideDialog,

    closeSideNavigation: typeof closeSideNavigation,
    clearSideNavigation: typeof clearSideNavigation,
    setSideNavigation: typeof setSideNavigation,
    pushHistory: typeof pushHistory
}


export default class PetsAndPlans extends React.Component<LandingProps, {}> {

    componentDidMount(): void {
        const {
            pets,
            setSideDialog,
            setSideNavigation,
        } = this.props;

        const petsToRender = pets && pets.map((pet, index) => {
            return <PetListItemContainer
                key={'petListItem' + pet._id}
                pet={pet}
                edit={() => setSideDialog({
                    content: 'Pet Edit',
                    buttons: [
                        {
                            label: LanguageHelper.getString('button_save'),
                            onClick: () => console.log('save'),
                            icon: '/assets/test_image.png'
                        }
                    ],
                    header: pet.name
                })}/>
        })
        setSideNavigation(petsToRender)
    }

    render() {
        const {

            pushHistory,

        } = this.props;


        return (
            <div className="petsAndPlans">
                <TouchClick onClick={() => pushHistory('/')}>go to landing</TouchClick>
            </div>
        );
    }
}
