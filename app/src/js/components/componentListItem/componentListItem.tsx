import TouchClick from "../touchClick";
import * as React from "react";
import {ComponentCategory} from "../../modules/components/componentsReducer";
import {setActiveComponentCategory} from "../../modules/components/componentsActions";

interface ComponentListItemProps {
    category: ComponentCategory,
    setActive: typeof setActiveComponentCategory
    active: boolean,
}

export default class ComponentListItem extends React.Component<ComponentListItemProps, {}> {

    render() {
        const {
            category,
            active,
            setActive,
        } = this.props;

        return <TouchClick className={"componentListItem" + (active ? ' activeEntry' : '')}
                           onClick={() => setActive(category._id)}
                           key={'pet' + category._id}>
            <div className={"image" + (active ? ' activeEntry' : '')}
                 style={{backgroundImage: "url('/assets/" + category.type + ".png')"}}/>
            <div className="textWrapper">
                <div className={"name" + (active ? ' activeEntry' : '')}>
                    {category.name}
                </div>
            </div>
        </TouchClick>
    }


}