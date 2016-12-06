import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getUserName, getErrorMsg } from '../../reducers/loginReducer';
import ErrorMsg from './../errorMessage/errorMessage';

const styles = {
    content: {
        margin: '20px 20px 10px 20px'
    },
    text: {
        font: '20px sans-serif',
        color: '#4b4e4f'
    }
};

class HomeComponent extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div style={styles.content}>
                <ErrorMsg errorMsg = {this.props.errorMsg} />
                <p style={styles.text}>Hello <b>{this.props.user}</b></p>
            </div>
        );
    }
}

const mapStateToProps = function(state) {
    return {
        user: getUserName(state),
        errorMsg: getErrorMsg(state)
    };
};

export default connect(mapStateToProps)(HomeComponent);
