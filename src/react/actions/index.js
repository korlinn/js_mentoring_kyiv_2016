export const SUBMIT_LOGIN = 'SUBMIT_LOGIN';
export const RECEIVE_DATA = 'RECEIVE_DATA';
export const RECEIVE_ERROR = 'RECEIVE_ERROR';

export const submitLoginForm = () => ({
    type: SUBMIT_LOGIN
});

export const receiveData = (payload) => {
    return {
        type: RECEIVE_DATA,
        payload
    }
};

export const receiveDataError = (payload) => {
    return {
        type: RECEIVE_ERROR,
        payload
    }
};
