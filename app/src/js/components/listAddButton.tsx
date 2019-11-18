import * as React from 'react';
import TouchClick from "./touchClick";

export interface ListAddButtonProps {
    onClick: () => void,
    icon: string,
    label: string,
}

export const ListAddButton = (props: ListAddButtonProps) => {
    return (
        <TouchClick className={"listAddButton"} onClick={() => props.onClick()}>
            <div className="iconWrapper">
                <div className="icon" style={{backgroundImage: 'url(' + props.icon + ')'}}/>
            </div>

            <div className="label">{props.label}</div>
        </TouchClick>
    )
}