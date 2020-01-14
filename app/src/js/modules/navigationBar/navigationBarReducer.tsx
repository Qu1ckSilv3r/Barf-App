import * as navigationActions from "./navigationBarActions";
import {reducerWithInitialState} from "typescript-fsa-reducers"


export interface NavItem {
    _id: number,
    name: string,
    path: string,
    icon: string
}

export interface NavigationState {
    navItems: NavItem[],
    activeNavItem: number
}


const defaultState: NavigationState = {
    navItems: [
        {
            _id: 0,
            name: 'petsAndPlans',
            path: '/petsAndPlans',
            icon: '/assets/nav_plans'
        },
        {
            _id: 1,
            name: 'components',
            path: '/components',
            icon: '/assets/nav_components'
        },
        {
            _id: 2,
            name: 'encyclopedia',
            path: '/encyclopedia',
            icon: '/assets/nav_encyclopedia'
        },
        {
            _id: 3,
            name: 'settings',
            path: '/settings',
            icon: '/assets/nav_settings'
        }
    ],
    activeNavItem: 0
};

export const NavigationBarReducer = reducerWithInitialState(defaultState)
    .case(navigationActions.setActiveNavItem, (state, payload) => {
        return {
            ...state,
            activeNavItem: payload
        }
    })


