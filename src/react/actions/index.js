import { browserHistory } from 'react-router';

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

export const getUserData = (requestData) => {
    return function(dispatch) {
        dispatch(submitLoginForm());
        return new Promise(
            (resolve, reject) => {
                setTimeout( () => {
                    if(requestData.email && requestData.password) {
                        return resolve({
                            email: requestData.email,
                            userName: 'User'
                        });
                    }
                    return reject(new Error('Please fill up form fields correctly'));
                }, 1000);

            }
        ).then((data) =>
            {dispatch(receiveData(data));
                browserHistory.push('/')},
            (error) => {
                dispatch(receiveDataError(error));
            } )
    }
};
