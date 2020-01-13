import TouchClick from "../touchClick";
import * as React from "react";
import {Button} from "../button";
import {editPet, setActivePet} from "../../modules/petsAndPlans/petsAndPlansActions";
import {Animal} from "../../../../datamodels";

export interface PetListItemProps {
    pet: Animal,
    setActive: typeof setActivePet
    active: boolean,
    edit: () => void,
    setPetToEdit: typeof editPet,
}

export default class PetListItem extends React.Component<PetListItemProps, {}> {

    editPet = () => {
        const {
            pet,
            setActive,
            edit,
            setPetToEdit
        } = this.props;

        setActive(pet.animal_id || -1);
        setPetToEdit(pet.animal_id || -1)
        edit();
    }

    render() {
        const {
            pet,
            active,
            setActive,
        } = this.props;

        return <TouchClick className={"petListItem" + (active ? ' activePet' : '')}
                           onClick={() => setActive(pet.animal_id || -1)}
                           key={'pet' + pet.animal_id}>
            <div className="image"
                 style={{backgroundImage: pet.image ? 'url(' + pet.image + ')' : 'url(/assets/demoImages/pet_placeholder.jpg)'}}/>
            <div className="textWrapper">
                <div className={"name" + (active ? ' activePet' : '')}>
                    {pet.name}
                </div>
                <div className={"lastGenerated" + (active ? ' activePet' : '')}>
                    (letzte Generierung...)
                </div>
            </div>
            <div className="buttonWrapper">
                <Button onClick={() => this.editPet()} icon={'/assets/icons/edit.png'}/>
                {/*<Button bigger onClick={() => console.log('ouchies')} icon={'/assets/icons/ouchies.png'}/>*/}
            </div>
        </TouchClick>
    }


}