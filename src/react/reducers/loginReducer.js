import {SUBMIT_LOGIN, LOGIN_SUCCESS, LOGIN_FAILURE, RECEIVE_ERROR} from './../actions/loginActions';
import cookie from 'react-cookie';

const AUTH_COOKIE = {
    NAME: 'loggedUser',
    EXPIRE_FROM_NOW: 10
};

const initialState = {
    user: 'Unknown User',
    isLoggedIn: false,
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
            let expirationDate = new Date();
            expirationDate.setMinutes(expirationDate.getMinutes() + AUTH_COOKIE.EXPIRE_FROM_NOW);
            cookie.save(AUTH_COOKIE.NAME, action.payload.user, 10);

            return Object.assign({}, state, {
                user: action.payload.user,
                isLoggedIn: true,
                pendingRequest: false,
                errorData: false
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