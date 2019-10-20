import {actionCreatorFactory} from 'typescript-fsa';
const actionCreator = actionCreatorFactory();

//import { LOCATION_CHANGE } from 'connected-react-router';

export const setSideNavigation = actionCreator<any>("SET_SIDE_NAVIGATION");
//export const locationChange = actionCreator(LOCATION_CHANGE)