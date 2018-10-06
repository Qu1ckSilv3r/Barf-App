import * as React from 'react';

import {testAction} from "../actions/indexActions";

export interface IndexProps {
    foo: string,
    testAction: typeof testAction
}

export default class IndexTest extends React.Component<IndexProps, {}> {
    public render() {
        return (
            <div className="TEST">
               <button onClick={() => this.props.testAction(Math.random())}>
                   TEST BUTTON
               </button>
            </div>
        );
    }
}
