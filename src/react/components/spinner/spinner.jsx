import React, { Component } from 'react';

const styles = {
    wrapper: {
        position: 'absolute',
        left: '0',
        right: '0',
        top: '0',
        bottom: '0',
        backgroundColor: 'rgba(255, 255, 255, 0.5)'
    },
    spinner: {
        fontSize: '40px',
        position: 'absolute',
        left: '50%',
        top: '50%',
        margin: '-10px 0 0 -35px',
   }
};

export default class Spinner extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div style={this.props.applicationStatus ? styles.wrapper : {}}>
                <div style={styles.spinner} className={this.props.applicationStatus ? "fa fa-spinner fa-spin" : ""}>
                </div>
            </div>
        )
    }
}