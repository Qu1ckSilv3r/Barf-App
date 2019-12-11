import * as React from 'react';
import './petsAndPlans.scss';
import '../../../scss/input-moment.scss';
import {
    createPet, deletePet,
    editPet, getPlanSettingAndPassToState,
    openSettings,
    savePet, savePlanSettings,
    setActivePet,
    setAnimalsInState,
    setPetInput, setSettingInput
} from "./petsAndPlansActions";
//import TouchClick from "../../components/touchClick";
import {pushHistory} from "../login/loginActions";
import PetListItemContainer from "../../components/petListItem/petListItemContainer";
import LanguageHelper from "../../languageHelper";
import {clearSideNavigation, closeSideNavigation, setSideNavigation} from "../navigationSide/sideNavigationActions";
import {ListAddButton} from "../../components/listAddButton";
import {Animal, PlanSetting} from "../../../../datamodels";
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
import {SideDialogButton} from "../sideDialog/sideDialogReducer";
import {appApi} from "../../appApi";

registerLocale('de', de);
setDefaultLocale('de');
moment.locale('de');

export interface LandingProps {
    userId: number,
    pets: Animal[],
    activePet: number
    setActivePet: typeof setActivePet,
    editObj: Animal,

    editPet: typeof editPet
    openSideDialog: typeof openSideDialog,
    closeSideNavigation: typeof closeSideNavigation,
    clearSideNavigation: typeof clearSideNavigation,
    setSideNavigation: typeof setSideNavigation,
    pushHistory: typeof pushHistory,

    setPetInput: typeof setPetInput,
    savePet: typeof savePet,
    createPet: typeof createPet,
    deletePet: typeof deletePet,
    getPlanSettingAndPassToState: typeof getPlanSettingAndPassToState,
    savePlanSettings: typeof savePlanSettings,
    settingEditObj: PlanSetting,
    setSettingInput: typeof setSettingInput,

    openSettings: typeof openSettings,
    settingsOpen: boolean,

    setAnimalsInState: typeof setAnimalsInState
}

export default class PetsAndPlans extends React.Component<LandingProps, {}> {


    componentDidMount() {
        const {
            userId,
            setAnimalsInState
        } = this.props;

        appApi.getAnimalsByUser(userId)
            .then((re) => {
                setAnimalsInState(re)
            })
            .catch((er) => console.error(er))


    }

    componentDidUpdate(prevProps: Readonly<LandingProps>, prevState: Readonly<{}>, snapshot?: any): void {
        const {
            pets,
            openSideDialog,
            setSideNavigation,
            setActivePet,
            editPet
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

        const list = [<ListAddButton key={'listAdd0_petsAndPlans'} onClick={() => {
            openSideDialog()
            setActivePet(-1);
            editPet(-1)
        }

        } icon={'assets/icons/plus.png'}
                                     label={LanguageHelper.getString('button_addPet')}/>, ...petsToRender];


        setSideNavigation(list);
    }

    render() {


        const {
            editObj,
            setPetInput,
            openSettings,
            settingsOpen,
            openSideDialog,
            activePet,
            pets,
            //userId,
            savePet,
            createPet,
            deletePet,
            getPlanSettingAndPassToState,
            savePlanSettings,
            settingEditObj,
            setSettingInput
        } = this.props;

        let sideDialogContent = <div/>
        let sideDialogHeader = "";
        let sideDialogButtons: SideDialogButton[] = [];
        const activePetObj = pets.find((pet) => pet.animal_id === activePet);


        if (settingsOpen) {
            sideDialogHeader = LanguageHelper.getString('planSettings') + activePetObj!.name;
            sideDialogButtons = [
                {
                    label: LanguageHelper.getString('button_save'),
                    onClick: () => savePlanSettings(settingEditObj),
                    icon: '/assets/icons/save.png'
                },
                {
                    label: LanguageHelper.getString('button_reset'),
                    onClick: () => console.log('restore default plan settings'),
                    icon: '/assets/icons/refresh.png'
                }
            ]
            sideDialogContent = (<div className={'sideDialogContent'}>
                <div className="generalSettings">
                    <div className="header">
                        Allgemein
                    </div>
                    {/*
                          <div className="radio">radiobuttons</div>
                    <div className="checkbox">checkbox</div>
                    */}

                    own_component - {settingEditObj.own_component !== undefined && settingEditObj.own_component.toString()} | plan_view - {settingEditObj.plan_view !== undefined && settingEditObj.plan_view.toString()}


                    <Dropdown label={'Interval (Wochen)'} value={settingEditObj.intervall || 'chooseElement'}
                              options={['1', '2', '3', '4']}
                              onChange={(value: string) => setSettingInput({key: 'intervall', value: value})}/>
                </div>
                <div className="amountSettings">
                    <div className="header">
                        Bedarfsrelevant
                    </div>


                    <Input label={'Pflanzlicher Anteil'}
                           onChange={(text: string) => setSettingInput({key: 'plant_amount', value: text})}
                           type={'text'}
                           value={settingEditObj.plant_amount || ''}/>
                    <Input label={'Tierischer Anteil'}
                           onChange={(text: string) => setSettingInput({key: 'animal_amount', value: text})}
                           type={'text'}
                           value={settingEditObj.animal_amount || ''}/>
                    <div className="spacer" style={{height: 16}}/>
                    <Input label={'Fett (pro Tag)'}
                           onChange={(text: string) => setSettingInput({key: 'fet_per_day', value: text})} type={'text'}
                           value={settingEditObj.fet_per_day || ''}/>
                    <Input label={'Protein (pro Tag)'}
                           onChange={(text: string) => setSettingInput({key: 'protein_per_day', value: text})}
                           type={'text'}
                           value={settingEditObj.protein_per_day || ''}/>
                    <Input label={'Mengenfaktor'}
                           onChange={(text: string) => setSettingInput({key: 'factor', value: text})} type={'text'}
                           value={settingEditObj.factor || ''}/>
                    <Dropdown label={'Bedarfsdeckung über'} value={settingEditObj.fullfil_demant || 'chooseComponent'}
                              options={['1', '2', '3', '4']}
                              onChange={(value: string) => setSettingInput({key: 'fullfil_demant', value: value})}/>

                    <div className="defaultValueInfo">
                        {LanguageHelper.getString('defaultValueInfo')}
                    </div>
                </div>
            </div>)
        } else if (activePet === -1) {
            sideDialogHeader = editObj.name || LanguageHelper.getString('newPet');
            sideDialogButtons = [
                {
                    label: LanguageHelper.getString('button_save'),
                    onClick: () => createPet(editObj),
                    icon: '/assets/icons/save.png'
                }
            ]
            sideDialogContent = (<div className={'sideDialogContent'}>
                <div className="imageWrapper">
                    <div className="label">
                        {LanguageHelper.getString('label_image')}
                    </div>
                    <div className="innerWrapper">
                        <div className="image"
                             style={{backgroundImage: 'url("/assets/icons/image.png")', backgroundSize: '80%'}}/>
                        <div className="buttonWrapper">
                            <ExtendingButton label={LanguageHelper.getString('button_uploadImage')}
                                             onClick={() => console.log('upload image')}
                                             icon={'assets/icons/upload.png'}/>
                        </div>
                    </div>

                </div>

                <Input label={'Name'} onChange={(text: string) => setPetInput({key: 'name', value: text})} type={'text'}
                       value={editObj.name || ""}/>

                <Dropdown label={'Tierart'}
                          value={editObj.spezies && editObj.spezies.toLowerCase() || 'chooseElement'}
                          options={['cat', 'dog', 'ferret']}
                          onChange={(returnValue: string) => setPetInput({key: "spezies", value: returnValue})}/>

                <Input label={'Alter'} onChange={(text: string) => setPetInput({key: 'age', value: text})} type={'text'}
                       value={editObj.age || ""}/>

                <div className="inputWrapper">
                    <div className="label">
                        Geburtstag
                    </div>
                    <div className="wrapper">
                        <DatePicker
                            showYearDropdown
                            dateFormat="dd. MMMM yyyy"
                            selected={editObj.birthday ? moment(editObj.birthday).toDate() : null}
                            placeholderText={LanguageHelper.getString('placeholder_date')}
                            onChange={(date) => setPetInput({key: "birthday", value: date && moment(date).toISOString(true) || ''})}
                        />
                        <div className="icon"/>
                    </div>


                </div>


                <Input label={'Gewicht'} onChange={(text: string) => setPetInput({key: 'weight', value: text})}
                       type={'text'} value={editObj.weight || ""}/>
                <Input label={'Zielgewicht'}
                       onChange={(text: string) => setPetInput({key: 'target_weight', value: text})}
                       type={'text'} value={editObj.target_weight || ""}/>

                <Dropdown label={'Aktivität'}
                          value={editObj.aktivity && editObj.aktivity.toLowerCase() || 'chooseElement'}
                          options={['low', 'normal', 'high']}
                          onChange={(returnValue: string) => setPetInput({key: "aktivity", value: returnValue})}/>


            </div>)
        } else if (editObj) {
            sideDialogHeader = editObj.name || LanguageHelper.getString('newPet');
            sideDialogButtons = [
                {
                    label: LanguageHelper.getString('button_save'),
                    onClick: () => savePet(editObj),
                    icon: '/assets/icons/save.png'
                },
                {
                    label: LanguageHelper.getString('button_delete'),
                    onClick: () => deletePet(activePet),
                    icon: '/assets/icons/delete.png'
                }
            ]
            sideDialogContent = (<div className={'sideDialogContent'}>
                <div className="imageWrapper">
                    <div className="label">
                        {LanguageHelper.getString('label_image')}
                    </div>
                    <div className="innerWrapper">
                        <div className="image"
                             style={{backgroundImage: editObj.image ? 'url(' + editObj.image + ')' : 'url(/assets/demoImages/pet_placeholder.jpg)'}}/>
                        <div className="buttonWrapper">
                            <ExtendingButton label={LanguageHelper.getString('button_uploadImage')}
                                             onClick={() => console.log('upload image')}
                                             icon={'assets/icons/upload.png'}/>
                        </div>
                    </div>

                </div>

                <Input label={'Name'} onChange={(text: string) => setPetInput({key: 'name', value: text})} type={'text'}
                       value={editObj.name || ""}/>

                <Dropdown label={'Tierart'}
                          value={editObj.spezies && editObj.spezies.toLowerCase() || LanguageHelper.getString('dropdown_chooseElement')}
                          options={['cat', 'dog', 'ferret']}
                          onChange={(returnValue: string) => setPetInput({key: "spezies", value: returnValue})}/>

                <Input label={'Alter'} onChange={(text: string) => setPetInput({key: 'age', value: text})} type={'text'}
                       value={editObj.age || ""}/>

                <div className="inputWrapper">
                    <div className="label">
                        Geburtstag
                    </div>
                    <div className="wrapper">
                        <DatePicker
                            showYearDropdown
                            dateFormat="dd. MMMM yyyy"
                            selected={editObj.birthday ? moment(editObj.birthday).toDate() : null}
                            placeholderText={LanguageHelper.getString('placeholder_date')}
                            onChange={(date) => setPetInput({key: "birthday", value: date && moment(date).toISOString(true) || ''})}
                        />
                        <div className="icon"/>
                    </div>


                </div>


                <Input label={'Gewicht'} onChange={(text: string) => setPetInput({key: 'weight', value: text})}
                       type={'text'} value={editObj.weight || ""}/>
                <Input label={'Zielgewicht'}
                       onChange={(text: string) => setPetInput({key: 'target_weight', value: text})}
                       type={'text'} value={editObj.target_weight || ""}/>

                <Dropdown label={'Aktivität'}
                          value={editObj.aktivity || LanguageHelper.getString('dropdown_chooseElement')}
                          options={['low', 'normal', 'high']}
                          onChange={(returnValue: string) => setPetInput({key: "aktivity", value: returnValue})}/>


            </div>)
        } else {
            sideDialogContent = <div>something else</div>
        }


        return (
            <div className="petsAndPlans">
                {activePet !== -1 ?
                    <div className="extendingButtonGroupWrapper">
                        <ExtendingButton onClick={() => {
                            getPlanSettingAndPassToState(editObj.setting_id || -1),
                                openSettings();
                            openSideDialog();
                        }} icon={'assets/icons/settings.png'}
                                         label={LanguageHelper.getString('button_planSettings')}/>

                        <ExtendingButton onClick={() => console.log("generate plan")} icon={'assets/icons/repeat.png'}
                                         label={LanguageHelper.getString('button_generate')}/>

                        <ExtendingButton onClick={() => console.log("delete all")} icon={'assets/icons/delete.png'}
                                         label={LanguageHelper.getString('button_deleteAll')}/>

                        <ExtendingButton onClick={() => console.log("open grocery list")}
                                         icon={'assets/icons/basket.png'}
                                         label={LanguageHelper.getString('button_grocery')}/>

                        <ExtendingButton onClick={() => console.log("open print")} icon={'assets/icons/print.png'}
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


                <SideDialogContainer buttons={sideDialogButtons} content={sideDialogContent} header={sideDialogHeader}/>
            </div>
        );
    }
}
