import * as React from 'react';
import './petsAndPlans.scss'
import {Pet} from "./petsAndPlansReducer";
import {setActivePet} from "./petsAndPlansActions";
import TouchClick from "../../components/touchClick";
import {pushHistory} from "../landing/landingActions";
import {petListElement} from "../../components/petListItem";
import {setSideDialog} from "../sideDialog/sideDialogActions";
import LanguageHelper from "../../languageHelper";
import SideDialogContainer from "../sideDialog/sideDialogContainer";

export interface LandingProps {
    pets: Pet[],
    activePet: number
    setActivePet: typeof setActivePet,
    setSideDialog: typeof setSideDialog,

    pushHistory: typeof pushHistory
}



export default class PetsAndPlans extends React.Component<LandingProps, {}> {

    render() {
        const {
            pets,
            activePet,
            setActivePet,
            pushHistory,
            setSideDialog
        } = this.props;

        const petsToRender = pets && pets.map((pet, index) => {
            return petListElement({
                pet:pet,
                setActive: setActivePet,
                active: pet._id === activePet,
                edit: () => setSideDialog({
                    content: 'Pet Edit',
                    buttons: [
                        {
                            label: LanguageHelper.getString('button_save'),
                            onClick: () => console.log('save'),
                            icon: '/assets/test_image.png'
                        }
                    ],
                    header: pet.name
                })
            })
        })

        return (
            <div className="petsAndPlans">
                <SideDialogContainer/>
                {petsToRender}
                <TouchClick onClick={() => pushHistory('/')}>go to landing</TouchClick>
            </div>
        );
    }
}
