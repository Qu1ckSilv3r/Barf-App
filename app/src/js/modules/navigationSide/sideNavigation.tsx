import * as React from 'react';
import './sideNavigation.scss'
import {clearSideNavigation, closeSideNavigation} from "./sideNavigationActions";
//import TouchClick from "../../components/touchClick";

export interface SideNavigationProps {
    content: any,
    opened: boolean,
    clearSideNavigation: typeof clearSideNavigation,
    closeSideNavigation: typeof closeSideNavigation
}

export default class SideNavigation extends React.Component<SideNavigationProps, {}> {
    endAnimation = (element: string,) => {
        const node = document.querySelector(element);
        node && node.classList.remove('withWidth');

        this.props.clearSideNavigation();


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

    UNSAFE_componentWillUpdate(nextProps: Readonly<SideNavigationProps>, nextState: Readonly<{}>, nextContext: any): void {
        if (this.props.opened !== nextProps.opened) {
            if (nextProps.opened) {
                this.animateCSS('.sideNavWrapper', 'slideInLeft')
            } else if (!nextProps.opened) {
                this.animateCSS('.sideNavWrapper', 'slideOutLeft', () => this.endAnimation('.sideNavWrapper'))
            }
        }
    }

    render() {
        const {
            content,
            //closeSideNavigation
        } = this.props;

        return (
            <div className="sideNavWrapper">
                {content ?
                    <div className="sideNav">
                        <div className="contentWrapper">
                            {content}
                        </div>
                        {
                            /*
                        <TouchClick className="close" onClick={() => closeSideNavigation()}>
                            close
                        </TouchClick>*/
                        }

                        <div className="footer">
                            <div className="logo"/>
                        </div>
                    </div>
                    : null}

            </div>

        )

    }
}
