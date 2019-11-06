import {Pet} from "../../modules/petsAndPlans/petsAndPlansReducer";
import TouchClick from "../touchClick";
import * as React from "react";
import {Button} from "../button";
import {setActivePet} from "../../modules/petsAndPlans/petsAndPlansActions";

interface PetListItemProps {
    pet: Pet,
    setActive: typeof setActivePet
    active: boolean,
    edit: () => void
}

export default class PetListItem extends React.Component<PetListItemProps, {}> {

    render() {
        const {
            pet,
            active,
            setActive,
            edit
        } = this.props;

        return <TouchClick className={"petListItem" + (active ? ' activePet' : '')} onClick={() => setActive(pet._id)}
                           key={'pet' + pet._id}>
            <div className="image" style={{backgroundImage: "url('" + pet.image + "')"}}/>
            <div className="textWrapper">
                <div className={"name" + (active ? ' activePet' : '')}>
                    {pet.name}
                </div>
                <div className={"lastGenerated" + (active ? ' activePet' : '')}>
                    (letzte Generierung...)
                </div>
            </div>
            <div className="buttonWrapper">
                <Button onClick={() => edit()} icon={'/assets/icons/edit.png'}/>
                {/*<Button bigger onClick={() => console.log('ouchies')} icon={'/assets/icons/ouchies.png'}/>*/}
            </div>
        </TouchClick>
    }


}