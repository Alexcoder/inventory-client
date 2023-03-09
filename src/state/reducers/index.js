import {combineReducers} from 'redux';
import dashboard from './dashboard'; 
import history from './history'; 
import auth from './auth'; 
import stateReducer from './state'; 

export const reducers = combineReducers({dashboard,history, auth, stateReducer})