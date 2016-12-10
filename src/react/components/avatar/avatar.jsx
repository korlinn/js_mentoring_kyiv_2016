import React, { Component } from 'react';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';

const styles = {
    downloadButton: {
        backgroundColor: '#6aa501',
    },
    downloadButtonLabel: {
        labelColor: '#fff',
        font: '25px sans-serif',
    }
};

export default class AvatarComponent extends Component {
    constructor(props) {
        super(props);

        this.handleDownload = this.handleDownload.bind(this);
    }

    componentDidMount() {
        this.canvasElem = document.getElementById('avatar');
        this.canvasContext = this.canvasElem.getContext('2d');

        const origin = new URL(document.URL).origin + '/img/faces/';
        this.face = new Image();
        this.face.src = origin + this.props.avatarData.faceFileName;
        this.eyes.src = origin + this.props.avatarData.currentEyes;
        this.nose.src = origin + this.props.avatarData.currentNose;
        this.mouth.src = origin + this.props.avatarData.currentMouth;
        this.hair.src = origin + this.props.avatarData.currentHair;
        this.glasses.src = origin + this.props.avatarData.currentGlasses;

        this.face.onload = function () {
            this.canvasContext.drawImage(this.face, 0, 0, this.face.width, this.face.height);
        }.bind(this);
    }

    render() {
        return (
            <MuiThemeProvider>
                <div>
                    <div>
                        <canvas id="avatar" width={this.props.avatarWidth} height={this.props.avatarHeight}>Avatar</canvas>
                    </div>
                    <div>
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
