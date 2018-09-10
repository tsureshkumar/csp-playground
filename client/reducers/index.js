import { combineReducers } from 'redux';
import {menu} from '../menu/reducers';
import {content} from '../content/reducers';

export const reducers = combineReducers({ menu , content});
