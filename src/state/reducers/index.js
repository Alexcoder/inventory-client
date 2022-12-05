import {combineReducers} from 'redux';
import posts from './posts'; 
import auth from './auth'; 
import stateReducer from './state'; 

export const reducers = combineReducers({posts, auth, stateReducer})