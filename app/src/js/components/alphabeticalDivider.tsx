import * as React from 'react';

export interface AlphabeticalDividerProps {
    letter: string,
}

export const AlphabeticalDivider = (props: AlphabeticalDividerProps) => {
    return (
        <div className="alphabaticalDividerWrapper">
            <div className="letter">
                {props.letter}
            </div>
            <div className="line"/>
        </div>
    )
}