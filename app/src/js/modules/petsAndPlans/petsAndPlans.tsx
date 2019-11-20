import * as React from 'react';
import './petsAndPlans.scss'
import {savePet, setActivePet, setPetInput} from "./petsAndPlansActions";
import TouchClick from "../../components/touchClick";
import {pushHistory} from "../landing/landingActions";
import PetListItemContainer from "../../components/petListItem/petListItemContainer";
import {setSideDialog} from "../sideDialog/sideDialogActions";
import LanguageHelper from "../../languageHelper";
import {clearSideNavigation, closeSideNavigation, setSideNavigation} from "../navigationSide/sideNavigationActions";
import {ListAddButton} from "../../components/listAddButton";
import {Animal} from "../../../../datamodels";
import {Input} from "../../components/input";

export interface LandingProps {
    pets: Animal[],
    activePet: number
    setActivePet: typeof setActivePet,
    setSideDialog: typeof setSideDialog,
    editObj: Animal,

    closeSideNavigation: typeof closeSideNavigation,
    clearSideNavigation: typeof clearSideNavigation,
    setSideNavigation: typeof setSideNavigation,
    pushHistory: typeof pushHistory,

    setPetInput: typeof setPetInput,
    savePet: typeof savePet,
}


export default class PetsAndPlans extends React.Component<LandingProps, {}> {

    onEdit = (pet:Animal)=>{
        const {
            setSideDialog,
            setPetInput,
            savePet,
            editObj
        } = this.props;
        const petsAndPlansEditContent = (pet: Animal) => {
            return (<div>
                <Input label={'Name'} onChange={(text: string) => setPetInput({key: 'name', value: text})} type={'text'} valid={true} value={pet.name || ""}/>
                <Input label={'Alter'} onChange={(text: string) => setPetInput({key: 'age', value: text})} type={'text'} valid={true} value={pet.age || ""}/>
                <Input label={'Gewicht'} onChange={(text: string) => setPetInput({key: 'weight', value: text})} type={'text'} valid={true} value={pet.weight || ""}/>
                <Input label={'Zielgewicht'} onChange={(text: string) => setPetInput({key: 'target_weight', value: text})} type={'text'} valid={true} value={pet.target_weight || ""}/>

                <p>animal_id {pet.animal_id}</p>

                <p>birthday {pet.birthday}</p>
                <p>age {pet.age}</p>

                <p>species {pet.species}</p>

                <p>image {pet.image}</p>

                <p>activity {pet.activity}</p>
            </div>)
        }

        console.log("editObject",editObj)
        setSideDialog({
            content: petsAndPlansEditContent(editObj),
            buttons: [
                {
                    label: LanguageHelper.getString('button_save'),
                    onClick: () => savePet(),
                    icon: '/assets/icons/save.png'
                },
                {
                    label: LanguageHelper.getString('button_delete'),
                    onClick: () => console.log('delete'),
                    icon: '/assets/icons/delete.png'
                }
            ],
            header: pet.name || LanguageHelper.getString('newPet')
        })
    }
    componentDidMount(): void {
        const {
            pets,
            setSideDialog,
            setSideNavigation
        } = this.props;





        const petsToRender = pets && pets.map((pet, index) => {
            return <PetListItemContainer
                key={'petListItem' + pet.animal_id}
                pet={pet}
                edit={() => {
                    this.onEdit(pet)
                }}/>
        })

        const list = [<ListAddButton key={'listAdd0_petsAndPlans'} onClick={() =>
            setSideDialog({
                content: 'Pet Edit NEW',
                buttons: [
                    {
                        label: LanguageHelper.getString('button_save'),
                        onClick: () => console.log('save'),
                        icon: '/assets/icons/save.png'
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
