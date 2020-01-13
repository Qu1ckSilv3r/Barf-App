import * as React from 'react';
import "./generalComponents.scss"
import TouchClick from "./touchClick";
import LanguageHelper from "../languageHelper";

//import LanguageHelper from "../languageHelper";

export interface DropdownProps {
    label: string,
    value: string | number,
    options: string[],
    onChange: (value: string) => void
}

export default class Dropdown extends React.Component<DropdownProps, {}> {
    state = {
        open: false
    }

    toggleDropDown = () => {
        this.setState({open: !this.state.open})
    }

    onChange = (value: string) => {
        this.props.onChange(value)
        this.toggleDropDown();
        return value
    }

    render() {
        const {
            label,
            value,
            options
        } = this.props

        const dropdownElements = options.map((option, index) => {
            return (
                <TouchClick className={"dropdownElement" + (option === value ? ' bold' : '')}
                            key={'dropdownElement' + index} onClick={() => this.onChange(option)}>

                    {LanguageHelper.getString('dropdown_' + option)}
                </TouchClick>
            )
        })

        return (
            <div className="dropDownWrapper">
                <div className="label">
                    {label}
                </div>
                <TouchClick className={"wrapper" + (this.state.open ? ' open' : '')}
                            onClick={() => this.toggleDropDown()}>
                    <div className="value">{LanguageHelper.getString('dropdown_' + value)}</div>
                    <div className={'arrow' + (this.state.open ? ' down' : '')}/>
                </TouchClick>

                <div className={'dropdown' + (this.state.open ? ' open' : '')}>
                    {dropdownElements}
                </div>

            </div>
        )
    }

}