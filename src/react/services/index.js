import { browserHistory } from 'react-router';
import axios from 'axios';
import {submitLoginForm, receiveData, receiveDataError} from './../actions';

export const loginUser = (requestData) => {
    return dispatch => {
        dispatch(submitLoginForm());
        axios.post('/user/authenticate', {
            email: requestData.email,
            password: requestData.password
        })
        .then(response => {
            dispatch(receiveData(response));
            browserHistory.push('/react');
        })
        .catch(error => {
            dispatch(receiveDataError(error));
        });
    }
};
