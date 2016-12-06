import React, { Component } from 'react';
import { Link } from 'react-router';

import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import Spinner from './../spinner/spinner';

const styles = {
    form: {
        width: '300px',
        height: '200px',
        margin: '30px auto',
    },
    title: {
        font: '25px sans-serif',
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
        font: '25px sans-serif',
    },
    forgotPasswordLink: {
        font: '18px sans-serif',
        color: '#6aa501',
        margin: '20px 0'
    }
};

export default class LoginComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            emailError: '',
            passwordError: ''
        };

        this.sendAction = this.sendAction.bind(this);
        this.handleEmail = this.handleEmail.bind(this);
        this.handlePassword = this.handlePassword.bind(this);
    }

    componentDidMount() {
        this.emailInput = document.getElementById('email');
        this.passwordInput = document.getElementById('password');
    }

    render() {
        return (
            <MuiThemeProvider>
                <div>
                <Spinner applicationStatus = {this.props.applicationStatus} />

                <div style={styles.form}>
                    <div style={styles.title}>Login form</div>
                    <div style={styles.formLine}>
                        <TextField
                            type="text"
                            hintText="Login"
                            id="email"
                            onKeyUp={this.handleEmail}
                            onChange={this.handleEmail}
                            errorText={this.state.emailError} />
                    </div>
                    <div style={styles.formLine}>
                        <TextField
                            type="password"
                            hintText="Password"
                            id="password"
                            onKeyUp={this.handlePassword}
                            onChange={this.handlePassword}
                            errorText={this.state.passwordError} />
                    </div>
                    <div style={styles.formLine}>
                        <RaisedButton backgroundColor={styles.submitButton.backgroundColor}
                                      labelColor={styles.submitButtonLabel.labelColor} label="login"
                                      onClick={this.sendAction} />
                    </div>
                    <Link to={'/react/forgot-password'} style={styles.forgotPasswordLink}>Forgot password?</Link>
                </div>
                </div>
            </MuiThemeProvider>
        );
    }
    validateEmail() {
        let fieldValue = this.emailInput.value;
        let regExp = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

        if(fieldValue.trim() === '') {
            this.setState({emailError: 'Email is required'});
            return false;
        }
        if(!regExp.test(fieldValue)) {
            this.setState({emailError: 'Incorrect email format'});
            return false;
        }
        this.setState({emailError: ''});

        return true;
    }

    validatePassword() {
        let fieldValue = this.passwordInput.value;

        if(fieldValue.trim() === '') {
            this.setState({passwordError: 'Password is required'});
            return false;
        }

        if(fieldValue.length < 5) {
            this.setState({passwordError: 'Password should be 5 characters or more'});
            return false;
        }

        this.setState({passwordError: ''});

        return true;

    }

    handleEmail() {
        return this.validateEmail();
    }

    handlePassword() {
        return this.validatePassword();
    }

    sendAction() {
        if(!this.validateEmail() || !this.validatePassword()) {
            return false;
        }

        var requestData = {
            email: this.emailInput.value,
            password: this.passwordInput.value
        };

        this.props.onSendAction(requestData);
    }
}
