export const REQUEST_SOURCES           = 'REQUEST_SOURCES';
export const RECEIVE_SOURCES           = 'RECEIVE_SOURCES';
export const RECEIVE_SOURCES_FAILURE   = 'RECEIVE_FAILURE';
export const REQUEST_README            = 'REQUEST_README';
export const RECEIVE_README            = 'RECEIVE_README';
export const RECEIVE_README_FAILURE    = 'RECEIVE_README_FAILURE';
export const REQUEST_EXPLOITS          = 'REQUEST_EXPLOITS';
export const RECEIVE_EXPLOITS          = 'RECEIVE_EXPLOITS';
export const RECEIVE_EXPLOITS_FAILURE  = 'RECEIVE_EXPLOITS_FAILURE';
export const REQUEST_CSPHEADER         = 'REQUEST_CSPHEADER';
export const RECEIVE_CSPHEADER         = 'RECEIVE_CSPHEADER';
export const RECEIVE_CSPHEADER_FAILURE = 'RECEIVE_CSPHEADER_FAILURE';
export const UPDATE_CSP_HEADER         = 'UPDATE_CSP_HEADER';
export const UPDATE_CSP_HEADER_SUCCESS = 'UPDATE_CSP_HEADER_SUCCESS';
export const UPDATE_CSP_HEADER_FAILURE = 'UPDATE_CSP_HEADER_FAILURE';


import {makeActionCreator} from '../util';
import * as exploits from '../exploits';

export const requestSources          = makeActionCreator(REQUEST_SOURCES,           'example');
export const receiveSources          = makeActionCreator( RECEIVE_SOURCES,            'example', 'sources', );
export const receiveSourcesFailure   = makeActionCreator(RECEIVE_SOURCES_FAILURE,   'example');
export const requestReadme           = makeActionCreator(REQUEST_README,            'example');
export const receiveReadme           = makeActionCreator(RECEIVE_README,              'example', 'readme');
export const receiveReadmeFailure    = makeActionCreator(RECEIVE_README_FAILURE,    'example'); export const requestExploits         = makeActionCreator(REQUEST_EXPLOITS,          'example');
export const receiveExploits         = makeActionCreator(RECEIVE_EXPLOITS,            'example', 'exploits');
export const receiveExploitsFailure  = makeActionCreator(RECEIVE_EXPLOITS_FAILURE,  'example');
export const requestCSPHeader        = makeActionCreator(REQUEST_CSPHEADER,         'example');
export const receiveCSPHeader        = makeActionCreator(RECEIVE_CSPHEADER,           'example', 'csp');
export const receiveCSPHeaderFailure = makeActionCreator(RECEIVE_CSPHEADER_FAILURE, 'example');
export const updateCSPHeader         = makeActionCreator(UPDATE_CSP_HEADER,           'example', 'csp');
export const updateCSPHeaderSuccess  = makeActionCreator(UPDATE_CSP_HEADER_SUCCESS,   'example', 'csp');
export const updateCSPHeaderFailure  = makeActionCreator(UPDATE_CSP_HEADER_FAILURE,   'example', 'csp');

export const fetchSources = example => {
  return (dispatch, getState) => {
    dispatch(requestSources(example));
    return exploits.fetchExploitSources(example).then(
      sources => dispatch(receiveSources(example, sources)),
      error => dispatch(receiveSourcesFailure(example)),
    );
  };
};

export const fetchReadme = example => {
  return (dispatch, getState) => {
    dispatch(requestReadme(example));
    return exploits.fetchReadme(example).then(
      readme => dispatch(receiveReadme(example, readme)),
      error => dispatch(receiveReadmeFailure(example)),
    );
  };
};

export const fetchExploits = (example, onReceive) => {
  return (dispatch, getState) => {
    dispatch(requestExploits(example));
    return exploits.fetchExploits(example).then(
      exploits => { dispatch(receiveExploits(example, exploits)); if(onReceive) onReceive(exploits); },
      error => dispatch(receiveExploitsFailure(example)),
    );
  };
};

export const fetchCSPHeader = (example,setState) => {
  return (dispatch, getState) => {
    dispatch(requestCSPHeader(example));
    return exploits.fetchCSPHeader(example).then(
      json => { dispatch(receiveCSPHeader(example, json.csp)); setState(json.csp); },
      error => dispatch(receiveExploitsFailure(example)),
    );
  };
};

export const postCSPHeader = (example,csp) => {
  return (dispatch, getState) => {
    dispatch(updateCSPHeader(example, csp));
    return exploits.updateCSPHeader(example, csp).then(
      resp => dispatch(updateCSPHeaderSuccess(example, csp, resp)),
      error => dispatch(updateCSPHeaderFailure(example, csp)),
    );
  };
};

