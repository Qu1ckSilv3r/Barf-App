import * as React from 'react';

export interface CheckboxProps {
    label: string,
    value: boolean,
    onChange: any,
    valid?: boolean,
    validityInfo?: any
}

export const Checkbox = (props: CheckboxProps) => {
    return(
        <div className="checkboxWrapper">
            {props.label}

            <input type={'checkbox'} checked={props.value} onChange={() => props.onChange(!props.value)}/>
            {props.valid === undefined || props.valid ?
                null:
                <div className="validityInfo">
                    {props.validityInfo}
                </div>
            }

        </div>
    )
}