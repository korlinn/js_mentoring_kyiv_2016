import React, { Component } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';

import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import { emailFieldValidation, passwordFieldValidation } from './loginValidate';

const styles = {
    form: {
        width: '300px',
        height: '200px',
        margin: '30px auto',
    },
    title: {
        font: '25px Dosis, sans-serif',
        textTransform: 'uppercase',
        color: '#6aa501'
    },
    formLine: {
        margin: '20px 0'
    },
    submitButton: {
        backgroundColor: '#6aa501',
    },
    submitButtonLabel: {
        labelColor: '#fff',
        font: '25px Dosis, sans-serif',
    },
    forgotPasswordLink: {
        font: '18px Dosis, sans-serif',
        color: '#6aa501',
        margin: '20px 0'
    }
};

class LoginComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            emailError: '',
            passwordError: '',
            displayErrorModal: false
        };

        this.sendAction = this.sendAction.bind(this);
        this.handleLogin = this.handleLogin.bind(this);
        this.handlePassword = this.handlePassword.bind(this);
        // this.closeModal = this.closeModal.bind(this);
    }

    componentDidMount() {
        this.emailInput = document.getElementById('email');
        this.passwordInput = document.getElementById('password');

        this.validationPassword = passwordFieldValidation.bind(this, this.passwordInput);
        this.validationEmail = emailFieldValidation.bind(this, this.emailInput);
    }

    render() {
        return (
            <MuiThemeProvider>
                <div style={styles.form}>
                    <div style={styles.title}>Login form</div>
                    <div style={styles.formLine}>
                        <TextField
                            type="text"
                            hintText="Login"
                            id="email"
                            onKeyDown={this.handleLogin}
                            errorText={this.state.emailError} />
                    </div>
                    <div style={styles.formLine}>
                        <TextField
                            type="password"
                            hintText="Password"
                            id="password"
                            onKeyDown={this.handlePassword}
                            errorText={this.state.passwordError} />
                    </div>
                    <div style={styles.formLine}>
                        <RaisedButton backgroundColor={styles.submitButton.backgroundColor}
                                      labelColor={styles.submitButtonLabel.labelColor} label="login"
                                      onClick={this.sendAction} />
                    </div>
                    <Link to={'/react/forgot-password'} style={styles.forgotPasswordLink}>Forgot password?</Link>
                </div>
            </MuiThemeProvider>
        );
    }

    handleLogin() {
        return this.validationEmail();
    }

    handlePassword() {
        return this.validationPassword();
    }

    sendAction() {
        if(!emailFieldValidation.call(this, this.emailInput) || !passwordFieldValidation.call(this, this.passwordInput)) {
            return false;
        }

        var requestData = {
            email: this.emailInput.value,
            password: this.passwordInput.value
        };

        this.props.getData(requestData);
    }
}


const mapStateToProps = function(state) {
    return {
        // applicationStatus: getApplicationStatus(state),
        // errorData: getErrorData(state),
        // user: getUserName(state)
    };
};

const mapDispatchToProps = (dispatch) => ({
    getData(data) {
        dispatch(getUserData(data));
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginComponent);