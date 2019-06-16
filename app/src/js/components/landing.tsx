import * as React from 'react';
import '../../scss/components/landing.scss'
import {testAction} from "../actions/landingActions";

export interface LandingProps {
    foo: string,
    testAction: typeof testAction
}

export default class Landing extends React.Component<LandingProps, {}> {
    public render() {
        return (
            <div className="landing">
                <div className="section1">
                    Start here :)
                </div>
            </div>
        );
    }
}
