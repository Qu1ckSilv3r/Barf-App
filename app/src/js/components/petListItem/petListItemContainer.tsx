import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {State} from "../../reducer";
import PetListItem, {PetListItemProps} from './petListItem';
import {editPet, savePet, setActivePet, setPetInput} from "../../modules/petsAndPlans/petsAndPlansActions";
import {Animal} from "../../../../datamodels";
import {mergePropsFunc} from "../../mergeFunction";

interface OwnContainerProps {
    pet: Animal,
    edit: () => void
}


const mapStateToProps = (state: State, ownProps: OwnContainerProps)/*: MapStateToProps*/ => {
    return {
        pet: ownProps.pet,
        active: state.petsAndPlans.activePet === ownProps.pet.animal_id,
        edit: ownProps.edit
    }
};

const mapDispatchToProps = (dispatch: any, ownProps: OwnContainerProps)/*: MapDispatchToProps*/ => {
    return bindActionCreators({
        setActive: setActivePet,
        setPetToEdit: editPet,
        setPetInput:setPetInput,
        savePet:savePet
    }, dispatch)
};


const PetListItemContainer = connect<ReturnType<typeof mapStateToProps>,ReturnType<typeof mapDispatchToProps>,OwnContainerProps,PetListItemProps,State>(
    mapStateToProps,
    mapDispatchToProps,
    mergePropsFunc
)(PetListItem);

export default PetListItemContainer