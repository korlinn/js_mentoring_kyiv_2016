import React, { Component } from 'react';

const styles = {
    show: {
        display: 'block',
        textAlign: 'center'
    },
    hide: {
        display: 'none'
    },
    text: {
        font: '18px Dosis, sans-serif',
        color: '#d32d31',
        margin: '20px'
    }
};

export default class ErrorMsg extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div style={this.props.errorMsg ? styles.show : styles.hide}>
                <p style={styles.text}>{this.props.errorMsg}</p>
            </div>
        )
    }
}