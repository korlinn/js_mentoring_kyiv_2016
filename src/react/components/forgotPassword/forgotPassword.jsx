import React from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Link } from 'react-router';

const styles = {
    form: {
        width: '300px',
        height: '200px',
        margin: '30px auto'
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
        backgroundColor: '#6aa501'
    },
    submitButtonLabel: {
        labelColor: '#fff',
        font: '25px sans-serif'
    },
    loginLink: {
        font: '18px sans-serif',
        color: '#6aa501',
        margin: '20px 0'
    }
};


class ForgotPasswordComponent extends React.Component{
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <MuiThemeProvider>
                <div style={styles.form}>
                    <div style={styles.title}>Restore password</div>
                    <div style={styles.formLine}>
                        <TextField
                            type="text"
                            hintText="Enter your email" />
                    </div>
                    <div style={styles.formLine}>
                        <RaisedButton to={'/react/login'}
                                      backgroundColor={styles.submitButton.backgroundColor}
                                      labelColor={styles.submitButtonLabel.labelColor} label="get password"/>
                    </div>
                    <div style={styles.formLine}>
                        <Link to={'/react/login'} style={styles.loginLink}>Back to login form</Link>
                    </div>
                </div>
            </MuiThemeProvider>
        );
    }
}

export default ForgotPasswordComponent;