import React, { Component } from 'react';

import data from './../../data/avatarData'

const PATH_TO_IMAGES = new URL(document.URL).origin + '/img/faces/';

const styles = {
    wrapper: {
        display: 'inline-block',
        margin: '0 20px',
        cursor: 'pointer'
    }
};

export default class AvatarPartComponent extends Component {
    constructor(props) {
        super(props);

        this.canvasId = `${this.props.name}${this.props.number}`;
        this.face = new Image();
        this.part = new Image();
        this.face.src = PATH_TO_IMAGES + data.faceFileName;
        this.part.src = PATH_TO_IMAGES + this.props.part;

        this.sendAction = this.sendAction.bind(this);
    }

    componentDidMount() {
        this.canvasElem = document.getElementById(this.canvasId);
        this.canvasContext = this.canvasElem.getContext('2d');

        this.face.onload = function () {
            this.canvasContext.drawImage(this.face, 0, 0, this.face.width, this.face.height);

            this.part.onload = function () {
                this.canvasContext.drawImage(this.part, 0, 0, this.part.width, this.part.height);
            }.bind(this);
        }.bind(this);
    }

    render() {
        return (
            <div style={styles.wrapper}>
                <canvas id={this.canvasId} width={data.avatarWidth} height={data.avatarHeight}
                        onClick={this.sendAction}>FacePart</canvas>
            </div>
        );
    }

    sendAction() {
        let data = {
            partName: this.props.name,
            part: this.part
        };

        this.props.onSendAction(data);
    }
}
