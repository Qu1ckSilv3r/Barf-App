import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {
    closeSideDialog
} from './sideDialogActions';
import {State} from "../../reducer";
import SideDialog from './sideDialog';
import {SideDialogButton} from "./sideDialogReducer";

interface OwnContainerProps {
    content: any,
    buttons: SideDialogButton[],
    header: string,
}

interface MapStateToProps {
    content: any,
    buttons: SideDialogButton[],
    header: string,
    opened: boolean
}

const mapStateToProps = (state: State, ownProps: OwnContainerProps): MapStateToProps => {
    return {
        content: ownProps.content,
        buttons: ownProps.buttons,
        header: ownProps.header,
        opened: state.sideDialog.opened
    }
};


interface MapDispatchToProps {
    closeSideDialog: typeof closeSideDialog
}

const mapDispatchToProps = (dispatch: any, ownProps: OwnContainerProps): MapDispatchToProps => {
    return bindActionCreators({
        closeSideDialog
    }, dispatch)
};


const SideDialogContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(SideDialog);

export default SideDialogContainer