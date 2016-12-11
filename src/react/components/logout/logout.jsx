import React, { Component } from 'react';

import RaisedButton from 'material-ui/RaisedButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import Spinner from './../spinner/spinner';

const styles = {
    form: {
        width: '300px',
        height: '200px',
        margin: '30px auto',
    },
    submitButton: {
        backgroundColor: '#6aa501',
    },
    submitButtonLabel: {
        labelColor: '#fff',
        font: '25px sans-serif',
    }
};

export default class LogoutComponent extends Component {
    constructor(props) {
        super(props);

        this.sendAction = this.sendAction.bind(this);
    }

    render() {
        return (
            <MuiThemeProvider>
                <div style={styles.form}>
                    <Spinner applicationStatus = {this.props.applicationStatus} />

                    <div>
                        <RaisedButton backgroundColor={styles.submitButton.backgroundColor}
                                      labelColor={styles.submitButtonLabel.labelColor} label="logout"
                                      onClick={this.sendAction} />
                    </div>
                </div>
            </MuiThemeProvider>
        );
    }

    sendAction() {
        this.props.onSendAction();
    }
}
