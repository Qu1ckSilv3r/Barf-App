import * as React from 'react';
import './sideDialog.scss'
import {ExtendingButton} from "../../components/extendingButton";
import {SideDialogButton} from "./sideDialogReducer";
import {clearSideDialog} from "./sideDialogActions";
import TouchClick from "../../components/touchClick";
import "animate.css";

export interface SideDialogProps {
    content: any,
    buttons: SideDialogButton[]
    clearSideDialog: typeof clearSideDialog,
    opened: boolean
}

export default class SideDialog extends React.Component<SideDialogProps, {}> {

    animateCSS = (element: string, animationName: string, callback?: () => void) => {
        const node = document.querySelector(element)
        node && node.classList.add('animated', animationName)

        function handleAnimationEnd() {
            node && node.classList.remove('animated', animationName)
            node && node.removeEventListener('animationend', handleAnimationEnd)

            if (typeof callback === 'function') callback()
        }

        node && node.addEventListener('animationend', handleAnimationEnd)
    }

    componentWillUpdate(nextProps: Readonly<SideDialogProps>, nextState: Readonly<{}>, nextContext: any): void {
        if(this.props.opened !== nextProps.opened){
            if(nextProps.opened){
                this.animateCSS('.sideDialogWrapper', 'slideInRight')
            }
            else if(!nextProps.opened){
                this.animateCSS('.sideDialogWrapper', 'slideOutRight')
            }
            
        }

    }

    componentDidMount(): void {

    }

    componentWillUnmount(): void {

    }

    render() {
        const {
            content,
            buttons,
            clearSideDialog,
            opened
        } = this.props;

        const buttonsToRender = buttons && buttons.map((button, index) => {
            return (
                <ExtendingButton label={button.label} icon={button.icon} onClick={() => button.onClick()}
                                 key={'sideDialogButton' + index}/>
            )
        })



        return (
            opened ?
                <div className="sideDialogWrapper">

                    <TouchClick onClick={() => clearSideDialog()}>close</TouchClick>
                    <div className="buttonWrapper">
                        {buttonsToRender}
                    </div>
                    {content}
                </div>
                    :<div className="sideDialogWrapper"/>

        );
    }
}
