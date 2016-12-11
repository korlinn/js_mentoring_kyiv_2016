import {SUBMIT_LOGIN, LOGIN_SUCCESS, LOGIN_FAILURE, RECEIVE_ERROR, LOGOUT_USER} from './../actions/loginActions';
import { getLoggedUser } from './../services/loginService';

let loggedUser = getLoggedUser();

const initialState = {
    user: loggedUser ? loggedUser : 'Unknown User',
    isLoggedIn: !!loggedUser,
    pendingRequest: false,
    errorData: false,
    errorMsg: ''
};

export default function loginReducer(state = initialState, action) {
    switch (action.type) {
        case SUBMIT_LOGIN:
            return Object.assign({}, state, {
                pendingRequest: true,
                errorData: false
            });

        case LOGIN_SUCCESS:
            return Object.assign({}, state, {
                user: action.payload.user,
                isLoggedIn: true,
                pendingRequest: false,
                errorData: false,
                errorMsg: ''
            });

        case LOGIN_FAILURE:
            return Object.assign({}, state, {
                user: 'Unknown User',
                isLoggedIn: false,
                pendingRequest: false,
                errorData: true,
                errorMsg: 'Login failure. Check your data.'
            });

        case RECEIVE_ERROR:
            return Object.assign({}, state, {
                user: 'Unknown User',
                isLoggedIn: false,
                pendingRequest: false,
                errorData: true
            });

        case LOGOUT_USER:
            return Object.assign({}, state, {
                user: 'Unknown User',
                isLoggedIn: false,
                pendingRequest: false,
                errorData: false
            });

        default:
            return state;
    }
}

export function getUserName(state) {
    return state.loginReducer.user
}

export function getApplicationStatus(state) {
    return state.loginReducer.pendingRequest;
}

export function getErrorData(state) {
    return state.loginReducer.errorData;
}

export function getErrorMsg(state) {
    return state.loginReducer.errorMsg;
}