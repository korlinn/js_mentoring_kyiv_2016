import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loginUser, logoutUser, getLoggedUser } from './../services/loginService';
import { getApplicationStatus, getErrorData, getUserName } from '../reducers/loginReducer';

import LoginComponent from '../components/login/login';
import LogoutComponent from '../components/logout/logout';

export class LoginContainer extends Component {
    render() {
        const isLoggedUser = getLoggedUser();

        let button = null;
        if (isLoggedUser) {
            button = <LogoutComponent onClick={this.props.onSendLogout} onSendAction={this.props.onSendLogout}/>;
        } else {
            button = <LoginComponent applicationStatus={this.props.applicationStatus} onSendAction={this.props.onSendLogin}/>;
        }

        return (
            <div>
                {button}
            </div>
        );
    }
}

const mapStateToProps = function(state) {
    return {
        applicationStatus: getApplicationStatus(state),
        errorData: getErrorData(state),
        user: getUserName(state)
    };
};

const mapDispatchToProps = (dispatch) => ({
    onSendLogin(data) {
        dispatch(loginUser(data));
    },
    onSendLogout(data) {
        dispatch(logoutUser(data));
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer);