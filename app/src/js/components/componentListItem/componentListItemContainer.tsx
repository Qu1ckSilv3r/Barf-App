import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {State} from "../../reducer";

import ComponentListItem from "./componentListItem";
import {setActiveComponentCategory} from "../../modules/components/componentsActions";
import {ComponentCategory} from "../../modules/components/componentsReducer";

interface OwnContainerProps {
    category: ComponentCategory,
    edit: () => void
}

interface MapStateToProps {
    category: ComponentCategory,
    active: boolean,
}

const mapStateToProps = (state: State, ownProps: OwnContainerProps): MapStateToProps => {
    return {
        category: ownProps.category,
        active: state.components.activeCategory === ownProps.category._id,
    }
};


interface MapDispatchToProps {
    setActive: typeof setActiveComponentCategory,
}

const mapDispatchToProps = (dispatch: any, ownProps: OwnContainerProps): MapDispatchToProps => {
    return bindActionCreators({
        setActive: setActiveComponentCategory,
    }, dispatch)
};


const ComponentListItemContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(ComponentListItem);

export default ComponentListItemContainer