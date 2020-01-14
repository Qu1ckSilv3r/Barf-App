import TouchClick from "../touchClick";
import * as React from "react";
import {setActivePet} from "../../modules/petsAndPlans/petsAndPlansActions";
import {EncyclopediaEntry} from "../../modules/encyclopedia/encyclopediaReducer";

interface EncyclopediaListItemProps {
    entry: EncyclopediaEntry,
    setActive: typeof setActivePet
    active: boolean,
}

export default class EncyclopediaListItem extends React.Component<EncyclopediaListItemProps, {}> {

    render() {
        const {
            entry,
            active,
            setActive,
        } = this.props;

        return <TouchClick className={"encyclopediaListItem" + (active ? ' activeEntry' : '')}
                           onClick={() => setActive(entry._id)}
                           key={'pet' + entry._id}>
            <div className={"image" + (active ? ' activeEntry' : '')}
                 style={{backgroundImage: entry.type === 'info' ? "url('/assets/info.png')" : "url('/assets/alert.png')"}}/>
            <div className="textWrapper">
                <div className={"name" + (active ? ' activeEntry' : '')}>
                    {entry.name}
                </div>
            </div>
        </TouchClick>
    }


}