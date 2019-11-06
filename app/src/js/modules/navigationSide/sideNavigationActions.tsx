import {actionCreatorFactory} from 'typescript-fsa';
const actionCreator = actionCreatorFactory();

//import { LOCATION_CHANGE } from 'connected-react-router';

export const setSideNavigation = actionCreator<any>("SET_SIDE_NAVIGATION");
export const clearSideNavigation = actionCreator("CLEAR_SIDE_NAVIGATION");
export const closeSideNavigation = actionCreator("CLOSE_SIDE_NAVIGATION");
export const setSearchValue = actionCreator<string>("SET_SEARCH_VALUE");
//export const locationChange = actionCreator(LOCATION_CHANGE)