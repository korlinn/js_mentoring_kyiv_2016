export const SUBMIT_LOGIN = 'SUBMIT_LOGIN';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';
export const RECEIVE_ERROR = 'RECEIVE_ERROR';
export const LOGOUT_USER = 'LOGOUT_USER';

export const submitLoginForm = () => ({
    type: SUBMIT_LOGIN
});

export const loginSuccess = (payload) => {
    return {
        type: LOGIN_SUCCESS,
        payload
    }
};

export const loginFailure = (payload) => {
    return {
        type: LOGIN_FAILURE
    }
};

export const receiveDataError = (payload) => {
    return {
        type: RECEIVE_ERROR,
        payload
    }
};

export const logout = () => ({
    type: LOGOUT_USER,
});
