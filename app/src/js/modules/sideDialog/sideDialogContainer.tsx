import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {
    clearSideDialog, closeSideDialog
} from './sideDialogActions';
import {State} from "../../reducer";
import SideDialog from './sideDialog';
import {SideDialogButton} from "./sideDialogReducer";

interface OwnContainerProps {

}

interface MapStateToProps {
    content: any,
    buttons: SideDialogButton[],
    header: string,
    opened: boolean
}

const mapStateToProps = (state: State, ownProps: OwnContainerProps): MapStateToProps => {
    return {
        content: state.sideDialog.content,
        buttons: state.sideDialog.buttons,
        header: state.sideDialog.header,
        opened: state.sideDialog.opened
    }
};


interface MapDispatchToProps {
    clearSideDialog: typeof clearSideDialog,
    closeSideDialog: typeof closeSideDialog
}

const mapDispatchToProps = (dispatch: any, ownProps: OwnContainerProps): MapDispatchToProps => {
    return bindActionCreators({
        clearSideDialog,
        closeSideDialog
    }, dispatch)
};


const SideDialogContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(SideDialog);

export default SideDialogContainer