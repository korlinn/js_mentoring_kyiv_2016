import { combineReducers } from 'redux';
import loginReducer from './loginReducer';
import avatarReducer from './avatarReducer';

export default combineReducers({
    loginReducer,
    avatarReducer
});