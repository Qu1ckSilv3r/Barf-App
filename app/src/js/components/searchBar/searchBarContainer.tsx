import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {State} from "../../reducer";
import SearchBar from './searchBar';
import {setSearchValue} from "../../modules/navigationSide/sideNavigationActions";

interface OwnContainerProps {
    placeholder: string
}

interface MapStateToProps {
    value: string,
    placeholder: string
}

const mapStateToProps = (state: State, ownProps: OwnContainerProps): MapStateToProps => {
    return {
        value: state.sideNavigation.searchValue,
        placeholder: ownProps.placeholder
    }
};


interface MapDispatchToProps {
    onChange: typeof setSearchValue
}

const mapDispatchToProps = (dispatch: any, ownProps: OwnContainerProps): MapDispatchToProps => {
    return bindActionCreators({
        onChange: setSearchValue
    }, dispatch)
};


const SearchBarContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(SearchBar);

export default SearchBarContainer