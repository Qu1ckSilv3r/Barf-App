import * as React from 'react';
import './sideNavigation.scss'

export interface SideNavigationProps {
    content: any,
}

export default class SideNavigation extends React.Component<SideNavigationProps, {}> {

    render() {
        const {
            content,
        } = this.props;

        if (content) {
            return (
                <div className="sideNav">
                    <div className="contentWrapper">
                        {content}
                    </div>
                    <div className="footer">
                        <div className="logo"/>
                    </div>
                </div>
            );
        } else {
            return null
        }

    }
}
