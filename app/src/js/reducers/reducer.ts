import {IndexState, IndexReducer} from "./indexReducer";

export interface State {
    index: IndexState,
}

export default {
    index: IndexReducer,
}