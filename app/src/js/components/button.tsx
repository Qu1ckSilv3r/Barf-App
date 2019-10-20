import * as React from 'react';
import TouchClick from "./touchClick";

export interface ButtonProps {
    onClick: () => void,
    icon: string,
    bigger?: boolean
}

export const Button = (props: ButtonProps) => {
    return (
        <TouchClick className={"button" + (props.bigger ? ' bigger' : '')} onClick={() => props.onClick()}>
            <div className="icon" style={{backgroundImage: 'url(' + props.icon + ')'}}/>
        </TouchClick>
    )
}