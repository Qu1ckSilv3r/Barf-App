import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {State} from "../../reducer";
import PetListItem from './petListItem';
import {editPet, setActivePet} from "../../modules/petsAndPlans/petsAndPlansActions";
import {Animal} from "../../../../datamodels";

interface OwnContainerProps {
    pet: Animal,
    edit: () => void
}

interface MapStateToProps {
    pet: Animal,
    active: boolean,
}

const mapStateToProps = (state: State, ownProps: OwnContainerProps): MapStateToProps => {
    return {
        pet: ownProps.pet,
        active: state.petsAndPlans.activePet === ownProps.pet.animal_id,
    }
};


interface MapDispatchToProps {
    setActive: typeof setActivePet,
    setPetToEdit: typeof editPet,
    edit: () => void
}

const mapDispatchToProps = (dispatch: any, ownProps: OwnContainerProps): MapDispatchToProps => {
    return bindActionCreators({
        setActive: setActivePet,
        setPetToEdit: editPet,
        edit: ownProps.edit
    }, dispatch)
};


const PetListItemContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(PetListItem);

export default PetListItemContainer