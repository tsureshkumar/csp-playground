export const SWITCH_MENU = 'SWITCH_MENU';
export const LOAD_MENU = 'LOAD_MENU';
export const REQUEST_MENU_ITEMS = 'REQUEST_MENU_ITEMS';
export const RECEIVE_MENU_ITEMS = 'RECEIVE_MENU_ITEMS';

import {fetchExploitTitles} from '../exploits';

export const setActiveMenu = item => ({
  type: SWITCH_MENU,
  id: item,
});

export const loadMenuAction = list => ({
  type: LOAD_MENU,
  menuList: list,
});

export const requestMenuItems = () => ({
  type: REQUEST_MENU_ITEMS,
});

export const receiveMenuItems = json => ({
  type: RECEIVE_MENU_ITEMS,
  items: json,
  loadedAt: Date.now,
});

export const fetchMenuItems = () => {
  return dispatch => {
    dispatch(requestMenuItems());
    fetchExploitTitles().then(menuList => dispatch(receiveMenuItems(menuList)));
  };
};
