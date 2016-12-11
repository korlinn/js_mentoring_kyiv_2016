import React, { Component } from 'react';
import { browserHistory } from 'react-router';
import { connect } from 'react-redux';
import { getLoggedUser } from './../services/loginService';

import { selectEyes, selectNose, selectMouth, selectHair, selectGlasses } from './../actions/avatarActions'

import { getCurrentEyes, getCurrentNose, getCurrentMouth,
         getCurrentHair, getCurrentGlasses } from '../reducers/avatarReducer';

import AvatarComponent from './../components/avatar/avatar';
import AvatarPartsList from './../components/avatarPartsList/avatarPartsList';

import data from './../data/avatarData'

const styles = {
    title: {
        font: '28px sans-serif',
        color: '#6aa501',
        margin: '10px 20px'
    },
    avatar: {
        float: 'left',
        textAlign: 'center',
        width: '30%'
    },
    parts: {
        display: 'inline-block',
        width: '70%'
    }
};

class AvatarCreatorContainer extends Component {
    componentWillMount() {
        this.loggedUser = getLoggedUser();
        if (!this.loggedUser) {
            browserHistory.push('/react/login');
            return null;
        }     }

    render() {
        return (
            <div>
                <h1 style={styles.title}>Avatar Creator</h1>

                <div style={styles.avatar}>
                    <AvatarComponent avatarData={this.props.avatarData}/>
                </div>

                <div style={styles.parts}>
                    {
                        data.parts.map((item) =>
                            <AvatarPartsList key={item.name} name={item.name} files={item.files}
                                             onSendAction={this.props.onSendAction}/>
                        )
                    }
                </div>
            </div>
        );
    }
}

const mapStateToProps = function(state) {
    return {
        avatarData: {
            eyes: getCurrentEyes(state),
            nose: getCurrentNose(state),
            mouth: getCurrentMouth(state),
            hair: getCurrentHair(state),
            glasses: getCurrentGlasses(state)
        }
    };
};

const mapDispatchToProps = (dispatch) => ({
    onSendAction(data) {
        let sendFunction;

        switch (data.partName) {
            case 'eyes': sendFunction = selectEyes; break;
            case 'nose': sendFunction = selectNose; break;
            case 'mouth': sendFunction = selectMouth; break;
            case 'hair': sendFunction = selectHair; break;
            case 'glasses': sendFunction = selectGlasses; break;
            default:
                sendFunction = console.error;
                data.part = `Can not recognize ${data.partName} like part of face`;
        }
        dispatch(sendFunction(data.part));
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(AvatarCreatorContainer);