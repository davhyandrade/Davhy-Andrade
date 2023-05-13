import { combineReducers } from 'redux';
import menuReducer from './menu/reducer';
import modalEmailReducer from './modal-email/reducer';

const rootReducer = combineReducers({ menuReducer, modalEmailReducer });

export default rootReducer;
