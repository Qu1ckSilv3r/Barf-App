import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {State} from "../../reducer";
import EncyclopediaListItem from './encyclopediaListItem';
import {EncyclopediaEntry} from "../../modules/encyclopedia/encyclopediaReducer";
import {setActiveEntry} from "../../modules/encyclopedia/encyclopediaActions";

interface OwnContainerProps {
    entry: EncyclopediaEntry,
}

interface MapStateToProps {
    entry: EncyclopediaEntry,
    active: boolean,
}

const mapStateToProps = (state: State, ownProps: OwnContainerProps): MapStateToProps => {
    return {
        entry: ownProps.entry,
        active: state.encyclopedia.activeEntry === ownProps.entry._id,
    }
};


interface MapDispatchToProps {
    setActive: typeof setActiveEntry,
}

const mapDispatchToProps = (dispatch: any, ownProps: OwnContainerProps): MapDispatchToProps => {
    return bindActionCreators({
        setActive: setActiveEntry
    }, dispatch)
};


const EncyclopediaListItemContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(EncyclopediaListItem);

export default EncyclopediaListItemContainer