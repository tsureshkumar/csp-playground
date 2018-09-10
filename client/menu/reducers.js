import { combineReducers } from 'redux';

const actions = require('./actions')

// state shape
const sampleState = {
    active: "xss1",
    items: [ "xss1", "xss2"]
}

const initialState = {
    active: undefined,
    menu: []
}

export const menu = function (state = initialState, action) {
    console.log("got action ", JSON.stringify(action));
    switch (action.type) {
        case actions.SWITCH_MENU:
            return { ...state, active: action.id };
        case actions.LOAD_MENU:
            const active = action.menuList.length > 0 ? action.menuList[0] : undefined;
            return { ...state, items: action.menuList, active: active };
        case actions.REQUEST_MENU_ITEMS:
            return state;
        case actions.RECEIVE_MENU_ITEMS: {
            const active = action.items.length > 0 ? action.items[0] : undefined;
            return { ...state, items: action.items, active: active };
        }
    }
    return state;
}
