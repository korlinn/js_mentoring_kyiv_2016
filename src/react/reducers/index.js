import {SUBMIT_LOGIN, RECEIVE_DATA, RECEIVE_ERROR} from './../actions';

const initialState = {
    user: 'Unknown User',
    isLoggedIn: false,
    pendingRequest: false,
    errorData: false
};

export default function authCheckReducer(state = initialState, action) {
    switch (action.type) {
        case SUBMIT_LOGIN:
            return Object.assign({}, state, {
                pendingRequest: true,
                errorData: false
            });

        case RECEIVE_DATA:
            return Object.assign({}, state, {
                user: {
                    email: action.payload.email,
                    name: action.payload.userName
                },
                isLoggedIn: true,
                pendingRequest: false
            });
        case RECEIVE_ERROR:
            return Object.assign({}, state, {
                user: '',
                isLoggedIn: false,
                pendingRequest: false,
                errorData: true
            });

        default:
            return state;
    }
}

export function getUserName(state) {
    return state.user
}

export function getApplicationStatus(state) {
    return state.pendingRequest;
}

export function getErrorData(state) {
    return state.errorData;
}