import * as React from 'react';
import './petsAndPlans.scss'
import {savePet, setActivePet, setPetInput} from "./petsAndPlansActions";
import TouchClick from "../../components/touchClick";
import {pushHistory} from "../landing/landingActions";
import PetListItemContainer from "../../components/petListItem/petListItemContainer";
import LanguageHelper from "../../languageHelper";
import {clearSideNavigation, closeSideNavigation, setSideNavigation} from "../navigationSide/sideNavigationActions";
import {ListAddButton} from "../../components/listAddButton";
import {Animal} from "../../../../datamodels";
import {Input} from "../../components/input";
import {ExtendingButton} from "../../components/extendingButton";
import SideDialogContainer from "../sideDialog/sideDialogContainer";
import {openSideDialog} from "../sideDialog/sideDialogActions";
import {Button} from "../../components/button";
import {PlanDay} from "./planComponents/planDay";

export interface LandingProps {
    pets: Animal[],
    activePet: number
    setActivePet: typeof setActivePet,
    editObj: Animal,

    openSideDialog: typeof openSideDialog,
    closeSideNavigation: typeof closeSideNavigation,
    clearSideNavigation: typeof clearSideNavigation,
    setSideNavigation: typeof setSideNavigation,
    pushHistory: typeof pushHistory,

    setPetInput: typeof setPetInput,
    savePet: typeof savePet,
}


export default class PetsAndPlans extends React.Component<LandingProps, {}> {


    componentDidMount(): void {
        const {
            pets,
            openSideDialog,
            setSideNavigation
        } = this.props;


        const petsToRender = pets && pets.map((pet, index) => {
            return <PetListItemContainer
                key={'petListItem' + pet.animal_id}
                pet={pet}
                edit={() => {
                    openSideDialog()
                }}/>
        })

        //

        const list = [<ListAddButton key={'listAdd0_petsAndPlans'} onClick={() =>
            openSideDialog()
        } icon={'assets/icons/plus.png'}
                                     label={LanguageHelper.getString('button_addPet')}/>, ...petsToRender];


        setSideNavigation(list)
    }

    render() {
        const {
            pushHistory,
            editObj,
            setPetInput
        } = this.props;

        let sideDialogContent = <div/>

        if(editObj){
            sideDialogContent = (<div>
                <Input label={'Name'} onChange={(text: string) => setPetInput({key: 'name', value: text})} type={'text'}
                       valid={true} value={editObj.name || ""}/>
                <Input label={'Alter'} onChange={(text: string) => setPetInput({key: 'age', value: text})} type={'text'}
                       valid={true} value={editObj.age || ""}/>
                <Input label={'Gewicht'} onChange={(text: string) => setPetInput({key: 'weight', value: text})}
                       type={'text'} valid={true} value={editObj.weight || ""}/>
                <Input label={'Zielgewicht'} onChange={(text: string) => setPetInput({key: 'target_weight', value: text})}
                       type={'text'} valid={true} value={editObj.target_weight || ""}/>

                <p>animal_id {editObj.animal_id}</p>
                petsAndPlans.scss
                <p>birthday {editObj.birthday}</p>
                <p>age {editObj.age}</p>

                <p>species {editObj.species}</p>

                <p>image {editObj.image}</p>

                <p>activity {editObj.activity}</p>
            </div>)
        }
       else{
           sideDialogContent = <div>something else</div>
        }


        return (
            <div className="petsAndPlans">
                <div className="extendingButtonGroupWrapper">
                    <ExtendingButton onClick={() => console.log("open settings")} icon={'assets/icons/settings.png'}
                                     label={LanguageHelper.getString('button_planSettings')}/>

                    <ExtendingButton onClick={() => console.log("generate plan")} icon={'assets/icons/repeat.png'}
                                     label={LanguageHelper.getString('button_generate')}/>

                    <ExtendingButton onClick={() => console.log("delete all")} icon={'assets/icons/delete.png'}
                                     label={LanguageHelper.getString('button_deleteAll')}/>

                    <ExtendingButton onClick={() => console.log("open grocery list")} icon={'assets/icons/heart.png'}
                                     label={LanguageHelper.getString('button_grocery')}/>

                    <ExtendingButton onClick={() => console.log("open print")} icon={'assets/icons/image.png'}
                                     label={LanguageHelper.getString('button_print')}/>
                </div>
                <div className="contentWrapper">
                    <TouchClick onClick={() => pushHistory('/')}>go to landing</TouchClick>

                    <div className="weekSelectorWrapper">
                        <div className="weekSelector">
                            <Button icon={'assets/icons/arrow_left.png'} onClick={() => console.log("week back")}/>
                            <div className="label">
                                Woche X
                            </div>
                            <Button icon={'assets/icons/arrow_right.png'} onClick={() => console.log("week next")}/>
                        </div>
                    </div>

                    <PlanDay
                        animalComponents={[{name: 'animalComponent_a', amount: 12}, {name: 'animalComponent_b', amount: 23}, {name: 'animalComponent_c', amount: 5}, {name: 'animalComponent_d', amount: 90}]}
                        plantComponents={[{name: 'plantComponent_a', amount: 42}, {name: 'plantComponent_b', amount: 10}]}
                        supplementComponents={[{name: 'supplementComponent_a', amount: 30}, {name: 'supplementComponent_b', amount: 80}]}
                        weekday={'Montag'}
                    />

                </div>


                <SideDialogContainer buttons={[
                    {
                        label: LanguageHelper.getString('button_save'),
                        onClick: () => console.log('save'),
                        icon: '/assets/icons/save.png'
                    }
                ]} content={sideDialogContent} header={editObj.name || LanguageHelper.getString('newPet')}/>
            </div>
        );
    }
}
