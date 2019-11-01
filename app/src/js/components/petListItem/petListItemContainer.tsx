import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {State} from "../../reducer";
import PetListItem from './petListItem';
import {Pet} from "../../modules/petsAndPlans/petsAndPlansReducer";
import {setActivePet} from "../../modules/petsAndPlans/petsAndPlansActions";

interface OwnContainerProps {
    pet: Pet,
    edit: () => void
}

interface MapStateToProps {
    pet: Pet,
    active: boolean,
}

const mapStateToProps = (state: State, ownProps: OwnContainerProps): MapStateToProps => {
    return {
        pet: ownProps.pet,
        active: state.petsAndPlans.activePet === ownProps.pet._id,
    }
};


interface MapDispatchToProps {
    setActive: typeof setActivePet
    edit: () => void
}

const mapDispatchToProps = (dispatch: any, ownProps: OwnContainerProps): MapDispatchToProps => {
    return bindActionCreators({
        setActive: setActivePet,
        edit: ownProps.edit
    }, dispatch)
};


const PetListItemContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(PetListItem);

export default PetListItemContainer