import axios from 'axios';
import { browserHistory } from 'react-router';
import {submitLoginForm, loginSuccess, loginFailure, receiveDataError} from './../actions';

export const loginUser = (requestData) => {
    return dispatch => {
        dispatch(submitLoginForm());
        axios.post('/user/authenticate', {
            email: requestData.email,
            password: requestData.password
        })
        .then(response => {
            if (response.data.user) {
                dispatch(loginSuccess(response.data));
            } else {
                dispatch(loginFailure());
            }
            browserHistory.push('/react');
        })
        .catch(error => {
            dispatch(receiveDataError(error));
        });
    }
};
