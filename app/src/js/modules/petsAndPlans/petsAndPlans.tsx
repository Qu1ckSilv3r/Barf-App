import * as React from 'react';
import './petsAndPlans.scss';
import '../../../scss/input-moment.scss';
import {openSettings, savePet, setActivePet, setPetInput} from "./petsAndPlansActions";
//import TouchClick from "../../components/touchClick";
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
import Dropdown from "../../components/dropdown";

import DatePicker from "react-datepicker";
import 'react-datepicker/dist/react-datepicker-cssmodules.css';
import * as moment from "moment";
import 'moment/locale/de';

import {registerLocale, setDefaultLocale} from "react-datepicker";
import de from 'date-fns/locale/de';

registerLocale('de', de);
setDefaultLocale('de');

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

    openSettings: typeof openSettings,
    settingsOpen: boolean
}

export default class PetsAndPlans extends React.Component<LandingProps, {}> {

    componentDidMount(): void {
        const {
            pets,
            openSideDialog,
            setSideNavigation
        } = this.props;

        moment.locale('de');
        console.log('moment', moment().format('DD MMM YYYY'));

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
            editObj,
            setPetInput,
            openSettings,
            settingsOpen,
            openSideDialog,
            activePet,
            pets
        } = this.props;

        let sideDialogContent = <div/>
        let sideDialogHeader = "";
        const activePetObj = pets.find((pet) => pet.animal_id === activePet);

        if (settingsOpen) {
            sideDialogHeader = LanguageHelper.getString('planSettings') + activePetObj!.name
            sideDialogContent = (<div className={'sideDialogContent'}>
                <Input label={'Settings somewhat'} onChange={(text: string) => console.log("text", text)} type={'text'}
                       valid={true} value={""}/>
                <div className="defaultValueInfo">
                    {LanguageHelper.getString('defaultValueInfo')}
                </div>
            </div>)
        } else if (editObj) {
            sideDialogHeader = editObj.name || LanguageHelper.getString('newPet')
            sideDialogContent = (<div className={'sideDialogContent'}>
                <p>image {editObj.image}</p>

                <Input label={'Name'} onChange={(text: string) => setPetInput({key: 'name', value: text})} type={'text'}
                       valid={true} value={editObj.name || ""}/>

                <Dropdown label={'Tierart'}
                          value={editObj.species || LanguageHelper.getString('dropdown_chooseElement')}
                          options={['cat', 'dog', 'ferret']}
                          onChange={(returnValue: string) => setPetInput({key: "species", value: returnValue})}/>

                <Input label={'Alter'} onChange={(text: string) => setPetInput({key: 'age', value: text})} type={'text'}
                       valid={true} value={editObj.age || ""}/>
                <p>age {editObj.age}</p>
                <p>birthday {editObj.birthday}</p>
                <DatePicker
                    dateFormat="dd. MMMM yyyy"
                    selected={editObj.birthday ? moment(editObj.birthday).toDate() : new Date()}
                    onChange={(date) =>setPetInput({key: "birthday", value:  date && date.toISOString() || ''})}
                />


                <Input label={'Gewicht'} onChange={(text: string) => setPetInput({key: 'weight', value: text})}
                       type={'text'} valid={true} value={editObj.weight || ""}/>
                <Input label={'Zielgewicht'}
                       onChange={(text: string) => setPetInput({key: 'target_weight', value: text})}
                       type={'text'} valid={true} value={editObj.target_weight || ""}/>

                <Dropdown label={'Aktivität'}
                          value={editObj.activity || LanguageHelper.getString('dropdown_chooseElement')}
                          options={['low', 'normal', 'high']}
                          onChange={(returnValue: string) => setPetInput({key: "activity", value: returnValue})}/>


            </div>)
        } else {
            sideDialogContent = <div>something else</div>
        }


        return (
            <div className="petsAndPlans">
                {activePet !== -1 ?
                    <div className="extendingButtonGroupWrapper">
                        <ExtendingButton onClick={() => {
                            openSettings();
                            openSideDialog()
                        }} icon={'assets/icons/settings.png'}
                                         label={LanguageHelper.getString('button_planSettings')}/>

                        <ExtendingButton onClick={() => console.log("generate plan")} icon={'assets/icons/repeat.png'}
                                         label={LanguageHelper.getString('button_generate')}/>

                        <ExtendingButton onClick={() => console.log("delete all")} icon={'assets/icons/delete.png'}
                                         label={LanguageHelper.getString('button_deleteAll')}/>

                        <ExtendingButton onClick={() => console.log("open grocery list")}
                                         icon={'assets/icons/heart.png'}
                                         label={LanguageHelper.getString('button_grocery')}/>

                        <ExtendingButton onClick={() => console.log("open print")} icon={'assets/icons/image.png'}
                                         label={LanguageHelper.getString('button_print')}/>
                    </div>
                    : null}

                <div className="mainContentWrapper">
                    {activePet !== -1 ?
                        <div className="plan">
                            <div className="weekSelectorWrapper">
                                <div className="weekSelector">
                                    <Button icon={'assets/icons/arrow_left.png'}
                                            onClick={() => console.log("week back")}/>
                                    <div className="label">
                                        Woche X
                                    </div>
                                    <Button icon={'assets/icons/arrow_right.png'}
                                            onClick={() => console.log("week next")}/>
                                </div>
                            </div>

                            <PlanDay
                                animalComponents={[{name: 'animalComponent_a', amount: 12}, {
                                    name: 'animalComponent_b',
                                    amount: 23
                                }, {name: 'animalComponent_c', amount: 5}, {name: 'animalComponent_d', amount: 90}]}
                                plantComponents={[{name: 'plantComponent_a', amount: 42}, {
                                    name: 'plantComponent_b',
                                    amount: 10
                                }]}
                                supplementComponents={[{
                                    name: 'supplementComponent_a',
                                    amount: 30
                                }, {name: 'supplementComponent_b', amount: 80}]}
                                weekday={'Montag'}
                            />
                            <PlanDay
                                animalComponents={[{name: 'animalComponent_a', amount: 12}, {
                                    name: 'animalComponent_b',
                                    amount: 23
                                }, {name: 'animalComponent_c', amount: 5}, {name: 'animalComponent_d', amount: 90}]}
                                plantComponents={[{name: 'plantComponent_a', amount: 42}, {
                                    name: 'plantComponent_b',
                                    amount: 10
                                }]}
                                supplementComponents={[{
                                    name: 'supplementComponent_a',
                                    amount: 30
                                }, {name: 'supplementComponent_b', amount: 80}]}
                                weekday={'Dienstag'}
                            />
                            <PlanDay
                                animalComponents={[{name: 'animalComponent_a', amount: 12}, {
                                    name: 'animalComponent_b',
                                    amount: 23
                                }, {name: 'animalComponent_c', amount: 5}, {name: 'animalComponent_d', amount: 90}]}
                                plantComponents={[{name: 'plantComponent_a', amount: 42}, {
                                    name: 'plantComponent_b',
                                    amount: 10
                                }]}
                                supplementComponents={[{
                                    name: 'supplementComponent_a',
                                    amount: 30
                                }, {name: 'supplementComponent_b', amount: 80}]}
                                weekday={'Mittwoch'}
                            />
                            <PlanDay
                                animalComponents={[{name: 'animalComponent_a', amount: 12}, {
                                    name: 'animalComponent_b',
                                    amount: 23
                                }, {name: 'animalComponent_c', amount: 5}, {name: 'animalComponent_d', amount: 90}]}
                                plantComponents={[{name: 'plantComponent_a', amount: 42}, {
                                    name: 'plantComponent_b',
                                    amount: 10
                                }]}
                                supplementComponents={[{
                                    name: 'supplementComponent_a',
                                    amount: 30
                                }, {name: 'supplementComponent_b', amount: 80}]}
                                weekday={'Donnerstag'}
                            />
                        </div>
                        : <div className="emptyListInfo">
                            {LanguageHelper.getString('emptyLisInfo_choosePet')}
                        </div>}


                </div>


                <SideDialogContainer buttons={[
                    {
                        label: LanguageHelper.getString('button_save'),
                        onClick: () => console.log('save'),
                        icon: '/assets/icons/save.png'
                    }
                ]} content={sideDialogContent} header={sideDialogHeader}/>
            </div>
        );
    }
}
