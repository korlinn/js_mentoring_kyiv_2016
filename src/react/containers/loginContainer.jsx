import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loginUser } from './../services/loginService';
import { getApplicationStatus, getErrorData, getUserName } from '../reducers/loginReducer';

import LoginComponent from '../components/login/login';

export class LoginContainer extends Component {
    render() {
        return (
            <div>
                <LoginComponent applicationStatus={this.props.applicationStatus} onSendAction={this.props.onSendAction}/>
            </div>
        )
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
    onSendAction(data) {
        dispatch(loginUser(data));
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer);