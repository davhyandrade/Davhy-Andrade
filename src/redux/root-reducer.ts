import { combineReducers } from 'redux';
import menuReducer from './menu/reducer';

const rootReducer = combineReducers({ menuReducer });

export default rootReducer;
