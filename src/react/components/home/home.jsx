import React, { Component } from 'react';

const styles = {
    content: {
        margin: '20px 20px 10px 20px'
    },
    title: {
        font: '22px Dosis, sans-serif',
        textTransform: 'uppercase',
        color: '#6aa501'
    },
    text: {
        font: '20px Dosis, sans-serif',
        color: '#2b2e2f'
    }
};

export default class HomeComponent extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div style={styles.content}>
                <p style={styles.text}>Hello <b>{this.props.user.name}</b></p>
            </div>
        );
    }
}

const mapStateToProps = function(state) {
    return {
        user: getUserName(state)
    };
};

export default connect(mapStateToProps)(HomeComponent);
