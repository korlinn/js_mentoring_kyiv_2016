import React, { Component } from 'react';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';

import data from './../../data/avatarData'

const styles = {
    wrapper: {
        margin: '10px 0'
    },
    title: {
        font: '20px sans-serif',
        color: '#6aa501',
        margin: '10px 20px',
        textTransform: 'uppercase'
    },
    downloadButtonWrapper: {
        margin: '20px 0'
    },
    downloadButton: {
        backgroundColor: '#6aa501'
    },
    downloadButtonLabel: {
        labelColor: '#fff',
        font: '25px sans-serif'
    }
};

const PATH_TO_IMAGES = new URL(document.URL).origin + '/img/faces/';

export default class AvatarComponent extends Component {
    constructor(props) {
        super(props);

        this.handleDownload = this.handleDownload.bind(this);
        this.face = new Image();
    }

    drawImages() {
        let width = this.face.width,
            height = this.face.height;

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
        this.canvasElem = document.getElementById('avatar');
        this.canvasContext = this.canvasElem.getContext('2d');
        this.face.src = PATH_TO_IMAGES + data.faceFileName;

        this.parts = {
            eyes: this.props.avatarData.eyes,
            nose: this.props.avatarData.nose,
            mouth: this.props.avatarData.mouth,
            hair: this.props.avatarData.hair,
            glasses: this.props.avatarData.glasses
        };

        this.face.onload = function () {
            this.drawImages();
        }.bind(this);
    }

    render() {
        return (
            <MuiThemeProvider>
                <div style={styles.wrapper}>
                    <h3 style={styles.title}>Avatar</h3>
                    <div>
                        <canvas id="avatar" width={data.avatarWidth} height={data.avatarHeight}>Avatar</canvas>
                    </div>
                    <div style={styles.downloadButtonWrapper}>
                        <RaisedButton backgroundColor={styles.downloadButton.backgroundColor}
                                      labelColor={styles.downloadButtonLabel.labelColor} label="download"
                                      onClick={this.handleDownload} />
                    </div>
                </div>
            </MuiThemeProvider>
        );
    }

    handleDownload() {
        console.log('Download action is under construction');
    }
}
