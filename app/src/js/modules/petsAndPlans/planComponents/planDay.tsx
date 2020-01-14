import * as React from 'react';
import './planComponents.scss'
import LanguageHelper from "../../../languageHelper";

export type planComponent = {
    feed_part: string,
    amount: number
}

export interface PlanDayProps {
    weekday: string,
    animalComponents: planComponent[],
    plantComponents: planComponent[],
    supplementComponents: planComponent[]
}

export const PlanDay = (props: PlanDayProps) => {
    const animalComponentsToRender = props.animalComponents.map((component, index) => {
        return <div key={'animalComponents' + index} className={'planComponent'}>
            <div className="name">
                {component.feed_part}
            </div>
            <div className="amount">
                {component.amount}
            </div>
        </div>
    })
    const plantComponentsToRender = props.plantComponents.map((component, index) => {
        return <div key={'plantComponents' + index}
                    className={'planComponent'}> <div className="name">
            {component.feed_part}
        </div>
            <div className="amount">
                {component.amount}
            </div></div>
    })
    const supplementComponentsToRender = props.supplementComponents.map((component, index) => {
        return <div key={'supplementComponents' + index}
                    className={'planComponent'}> <div className="name">
            {component.feed_part}
        </div>
            <div className="amount">
                {component.amount}
            </div></div>
    })

    return (
        <div className="planDayWrapper">
            <div className="weekday">
                <div className="label">
                    {props.weekday}
                </div>
            </div>
            <div className="tableWrapper">
                <div className="plant">
                    <div className="colHeader">
                        {LanguageHelper.getString('planDay_animalComponents')}
                    </div>
                    {animalComponentsToRender}
                </div>
                <div className="animal">
                    <div className="colHeader">
                        {LanguageHelper.getString('planDay_plantComponents')}
                    </div>
                    {plantComponentsToRender}
                </div>
                <div className="supplement">
                    <div className="colHeader">
                        {LanguageHelper.getString('planDay_supplementComponents')}
                    </div>
                    {supplementComponentsToRender}
                </div>
            </div>

        </div>
    )
}