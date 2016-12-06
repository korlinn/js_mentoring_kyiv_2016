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

export default class AboutComponent extends Component {
    render() {
        return (
            <div style={styles.content}>
                <h1 style={styles.title}>About component works!</h1>
                <p style={styles.text}>Application build with React, Redux, material-ui.</p>
            </div>
        );
    }
}