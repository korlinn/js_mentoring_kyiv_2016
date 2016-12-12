import React, { Component } from 'react';

import data from './../../data/avatarData'

const styles = {
    wrapper: {
        margin: '10px 0'
    },
    title: {
        font: '20px sans-serif',
        color: '#4b4e4f',
        margin: '10px 20px',
        textTransform: 'uppercase'
    },
    downloadButtonWrapper: {
        margin: '20px 0'
    },
    downloadButtonLabel: {
        color: '#6aa501',
        font: '25px sans-serif',
        textDecoration: 'underline',
        cursor: 'pointer'
    }
};

const PATH_TO_IMAGES = new URL(document.URL).origin + '/img/faces/';
const CANVAS_ELEMENT_ID = 'avatar';

export default class AvatarComponent extends Component {
    constructor(props) {
        super(props);

        this.handleDownload = this.handleDownload.bind(this);
        this.face = new Image();
    }

    drawImages() {
        let width = this.face.width,
            height = this.face.height;

        this.canvasContext.fillStyle="#FFF";
        this.canvasContext.fillRect(0, 0, width, height);
        this.canvasContext.drawImage(this.face, 0, 0, width, height);

        for (let key in this.parts) {
            if (this.parts.hasOwnProperty(key)) {
                if (typeof this.parts[key] == "object") {
                    this.canvasContext.drawImage(this.parts[key], 0, 0, width, height);
                }
            }
        }

        // it need because the glasses should be over other parts
        if (typeof this.parts.glasses == "object") {
            this.canvasContext.drawImage(this.parts.glasses, 0, 0, width, height);
        }
    }

    componentDidMount() {
        this.canvasElem = document.getElementById(CANVAS_ELEMENT_ID);
        this.canvasContext = this.canvasElem.getContext('2d');
        this.face.src = PATH_TO_IMAGES + data.faceFileName;

        this.parts = {
            eyes: this.props.avatarData.eyes,
            nose: this.props.avatarData.nose,
            mouth: this.props.avatarData.mouth,
            hair: this.props.avatarData.hair,
            glasses: this.props.avatarData.glasses
        };

        this.face.onload = this.drawImages.bind(this);
    }

    componentDidUpdate() {
        this.parts = {
            eyes: this.props.avatarData.eyes,
            nose: this.props.avatarData.nose,
            mouth: this.props.avatarData.mouth,
            hair: this.props.avatarData.hair,
            glasses: this.props.avatarData.glasses
        };

        this.drawImages();
    }

    render() {
        return (
            <div style={styles.wrapper}>
                <h3 style={styles.title}>Avatar</h3>
                <div>
                    <canvas id={CANVAS_ELEMENT_ID} width={data.avatarWidth} height={data.avatarHeight}>Avatar</canvas>
                </div>
                <div style={styles.downloadButtonWrapper}>
                    <a style={styles.downloadButtonLabel} onClick={this.handleDownload}>Download</a>
                </div>
            </div>
        );
    }

    handleDownload(e) {
        let link = e.target;
        let hashSurrogate = new Date().getTime();

        link.href = this.canvasElem.toDataURL();
        link.download = `avt${hashSurrogate}.png`;
    }
}
