import * as React from 'react';
import './sideDialog.scss'
import {ExtendingButton} from "../../components/extendingButton";
import {SideDialogButton} from "./sideDialogReducer";
import {closeSideDialog} from "./sideDialogActions";
import TouchClick from "../../components/touchClick";
import "animate.css";

export interface SideDialogProps {
    content: any,
    buttons: SideDialogButton[],
    header: string,
    opened: boolean,
    closeSideDialog: typeof closeSideDialog
}

export default class SideDialog extends React.Component<SideDialogProps, {}> {

    endAnimation = (element: string,) => {
        const node = document.querySelector(element);
        node && node.classList.remove('withWidth')

    }

    animateCSS = (element: string, animationName: string, callback?: () => void) => {
        const node = document.querySelector(element)
        node && node.classList.add('animated', animationName, 'withWidth', 'faster')

        function handleAnimationEnd() {
            node && node.classList.remove('animated', animationName, 'faster')
            node && node.removeEventListener('animationend', handleAnimationEnd)
            if (typeof callback === 'function') callback()
        }

        node && node.addEventListener('animationend', handleAnimationEnd)
    }

    UNSAFE_componentWillUpdate(nextProps: Readonly<SideDialogProps>, nextState: Readonly<{}>, nextContext: any): void {
        if (this.props.opened !== nextProps.opened) {
            if (nextProps.opened) {
                this.animateCSS('.sideDialogWrapper', 'slideInRight')
            } else if (!nextProps.opened) {
                this.animateCSS('.sideDialogWrapper', 'slideOutRight', () => this.endAnimation('.sideDialogWrapper'))
            }
        }
    }


    render() {
        const {
            content,
            opened,
            buttons,
            closeSideDialog,
            header
        } = this.props;

        const buttonsToRender = buttons && buttons.map((button, index) => {
            return (
                <ExtendingButton label={button.label} icon={button.icon} onClick={() => button.onClick()}
                                 key={'sideDialogButton' + index}/>
            )
        });

        return (
            <div className={"sideDialogWrapper"}>
                {content && opened ?
                    <div className="sideDialog">
                        <div className="topBar">
                            <TouchClick className="close" onClick={() => closeSideDialog()}/>
                            <div className="header">
                                {header}
                            </div>
                        </div>
                        <div className="dialogContent">
                            <div className="buttonBar">
                                {buttonsToRender}
                            </div>
                            <div className="contentWrapper">
                                {content}
                            </div>
                        </div>


                    </div>
                    : null}


            </div>
        );
    }
}
