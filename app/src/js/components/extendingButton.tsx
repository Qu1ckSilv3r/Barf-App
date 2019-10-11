import * as React from 'react';
import TouchClick from "./touchClick";

export interface ExtendingButtonProps {
    label: string,
    onClick: () => void,
    icon: string,
}

export const ExtendingButton = (props: ExtendingButtonProps) => {

    return (
        <div className="extendingButtonWrapper">
            <TouchClick className="extendingButton" onClick={() => props.onClick()}>
                <div className="icon" style={{backgroundImage: 'url(' + props.icon + ')'}}/>
                <div className="label">
                    {props.label}
                </div>
            </TouchClick>
        </div>

    )
}