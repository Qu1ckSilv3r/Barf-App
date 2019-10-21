import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {State} from "../../reducer";
import {pushHistory} from "../landing/landingActions";
import {setSideDialog} from "../sideDialog/sideDialogActions";
import {clearSideNavigation, closeSideNavigation, setSideNavigation} from "../navigationSide/sideNavigationActions";
import Encyclopedia from "./encyclopedia";
import {EncyclopediaEntry} from "./encyclopediaReducer";
import {setSearchValue} from "./encyclopediaActions";

interface OwnContainerProps {
}

interface MapStateToProps {

    entries: EncyclopediaEntry[],
    activeEntry: number,

    searchValue: string,
}

const mapStateToProps = (state: State, ownProps: OwnContainerProps): MapStateToProps => {
    return {

        entries: state.encyclopedia.entries,
        activeEntry: state.encyclopedia.activeEntry,

        searchValue: state.encyclopedia.searchValue,
    }
};


interface MapDispatchToProps {
    pushHistory: typeof pushHistory,
    setSideNavigation: typeof setSideNavigation,
    setSideDialog: typeof setSideDialog,


    setSearchValue: typeof setSearchValue

    clearSideNavigation: typeof clearSideNavigation,
    closeSideNavigation: typeof closeSideNavigation,
}

const mapDispatchToProps = (dispatch: any, ownProps: OwnContainerProps): MapDispatchToProps => {
    return bindActionCreators({
        pushHistory,
        setSideDialog,
        setSideNavigation,
        clearSideNavigation,
        closeSideNavigation,
        setSearchValue
    }, dispatch)
};


export const EncyclopediaContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Encyclopedia);
