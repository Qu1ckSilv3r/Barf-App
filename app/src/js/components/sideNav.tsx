import * as React from 'react';

export interface SideNavProps {
    content: any
}

export const SideNav = (props: SideNavProps) => {
    return (
        <div className="sideNav">
            <div className="contentWrapper">
                {props.content}
            </div>
            <div className="footer">
                <div className="logo"/>
            </div>
        </div>
    )
}