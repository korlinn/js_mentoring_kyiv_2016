import axios from 'axios';
import { browserHistory } from 'react-router';
import cookie from 'react-cookie';
import {submitLoginForm, loginSuccess, loginFailure, logout, receiveDataError} from './../actions/loginActions';

const AUTH_COOKIE = {
    NAME: 'loggedUser',
    EXPIRE_FROM_NOW: 10
};

export const loginUser = (requestData) => {
    return dispatch => {
        dispatch(submitLoginForm());
        axios.post('/user/authenticate', {
            email: requestData.email,
            password: requestData.password
        })
        .then(response => {
            if (response.data.user) {
                cookie.save(AUTH_COOKIE.NAME, response.data.user, AUTH_COOKIE.EXPIRE_FROM_NOW);
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

export const logoutUser = function() {
    return dispatch => {
        dispatch(submitLoginForm());
        axios.get('/user/logout')
            .then(response => {
                cookie.remove(AUTH_COOKIE.NAME, response.data.user);
                dispatch(logout());
                browserHistory.push('/react');
            })
            .catch(error => {
                dispatch(receiveDataError(error));
            });
    }
};

export const getLoggedUser = function() {
    return cookie.load(AUTH_COOKIE.NAME);
};