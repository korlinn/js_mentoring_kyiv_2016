import React, { Component } from 'react';

const styles = {
    content: {
        margin: '20px 20px 10px 20px'
    },
    title: {
        font: '22px sans-serif',
        textTransform: 'uppercase',
        color: '#6aa501'
    },
    text: {
        font: '20px sans-serif',
        color: '#4b4e4f'
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
