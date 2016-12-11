import React, { Component } from 'react';

import AvatarPartComponent from './../avatarPart/avatarPart'

const styles = {
    wrapper: {
        margin: '10px 0'
    },
    title: {
        font: '20px sans-serif',
        color: '#4b4e4f',
        margin: '10px 20px',
        textTransform: 'uppercase'
    }
};

export default class AvatarPartsContainer extends Component {
    render() {
        return (
            <div style={styles.wrapper}>
                <h3 style={styles.title}>{this.props.name}</h3>
                {
                    this.props.files.map((item, i) =>
                        <AvatarPartComponent key={item.toString()} name={this.props.name}
                                             number={i.toString()} part={item} onSendAction={this.props.onSendAction}/>
                    )
                }
            </div>
        )
    }
}
