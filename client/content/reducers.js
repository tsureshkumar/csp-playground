import {combineReducers} from 'redux';

const actions = require('./actions');

const initialState = {
  sources: [],
  readme: '',
  exploits: [],
};

export const content = function(state = initialState, action) {
  switch (action.type) {
    case actions.REQUEST_SOURCES:
      return state;
    case actions.RECEIVE_SOURCES: {
      return {...state, sources: action.sources};
    }
    case actions.RECEIVE_README:
      return {...state, readme: action.readme};
    case actions.RECEIVE_EXPLOITS:
      return {...state, exploits: action.exploits};
    case actions.RECEIVE_CSPHEADER:
      return {...state, csp: action.csp};
  }
  return state;
};
