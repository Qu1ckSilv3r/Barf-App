import * as React from 'react';
import './petsAndPlans.scss'
import {setActivePet} from "./petsAndPlansActions";
import TouchClick from "../../components/touchClick";
import {pushHistory} from "../landing/landingActions";
import PetListItemContainer from "../../components/petListItem/petListItemContainer";
import {setSideDialog} from "../sideDialog/sideDialogActions";
import LanguageHelper from "../../languageHelper";
import {clearSideNavigation, closeSideNavigation, setSideNavigation} from "../navigationSide/sideNavigationActions";
import {ListAddButton} from "../../components/listAddButton";
import {Animal} from "../../../../datamodels";

export interface LandingProps {
    pets: Animal[],
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


        const petsAndPlansEditContent = (pet: Animal) => {
            return (<div>
                <p>animal_id {pet.animal_id}</p>
                <p>birthday {pet.birthday}</p>
                <p>age {pet.age}</p>
                <p>species {pet.species}</p>
                <p>name {pet.name}</p>
                <p>image {pet.image}</p>
                <p>weight {pet.weight}</p>
                <p>target_weight {pet.target_weight}</p>
                <p>activity {pet.activity}</p>
            </div>)
        }

        const petsToRender = pets && pets.map((pet, index) => {
            return <PetListItemContainer
                key={'petListItem' + pet.animal_id}
                pet={pet}
                edit={() => setSideDialog({
                    content: petsAndPlansEditContent(pet),
                    buttons: [
                        {
                            label: LanguageHelper.getString('button_save'),
                            onClick: () => console.log('save'),
                            icon: '/assets/test_image.png'
                        }
                    ],
                    header: pet.name || LanguageHelper.getString('newPet')
                })}/>
        })

        const list = [<ListAddButton key={'listAdd0_petsAndPlans'} onClick={() =>
            setSideDialog({
                content: 'Pet Edit NEW',
                buttons: [
                    {
                        label: LanguageHelper.getString('button_save'),
                        onClick: () => console.log('save'),
                        icon: '/assets/test_image.png'
                    }
                ],
                header: LanguageHelper.getString('newPet')
            })
        } icon={'assets/icons/plus.png'}
                                     label={LanguageHelper.getString('button_addPet')}/>, ...petsToRender];


        setSideNavigation(list)
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
