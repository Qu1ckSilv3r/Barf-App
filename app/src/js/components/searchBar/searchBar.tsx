
import * as React from "react";

interface SearchBarProps {
    value: string,
    onChange: (value: string) => void,
    placeholder: string
}

export default class SearchBar extends React.Component<SearchBarProps, {}> {

    render() {
        const {
            value,
            onChange,
            placeholder
        } = this.props;

        return <div className="searchBar">
            <div className="searchIcon"/>
            <div className="input">
                <input type="text" value={value} onChange={(e) => onChange(e.target.value)} placeholder={placeholder}/>
            </div>
        </div>
    }


}