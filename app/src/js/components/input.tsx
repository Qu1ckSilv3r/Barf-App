import * as React from 'react';
import "../../scss/components/components.scss"

export interface InputProps {
    label: string,
    type: 'text' | 'password' | 'number',
    value: string | number,
    onChange: any,
    valid: boolean,
    validityInfo?: any
}

export const Input = (props: InputProps) => {
    return(
        <div className="inputWrapper">
            {props.label}
            <input type={props.type} value={props.value} onChange={(e) => props.onChange(e.target.value)}/>
            {props.valid ?
                null:
                <div className="validityInfo">
                    {props.validityInfo}
                </div>
            }

        </div>
    )
}