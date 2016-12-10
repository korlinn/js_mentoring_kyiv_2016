import React, { Component } from 'react';
import { connect } from 'react-redux';

import { getAvatarWidth, getAvatarHeight, getFace, getCurrentEyes, getCurrentNose,
         getCurrentMouth, getCurrentHair, getCurrentGlasses
       } from '../reducers/avatarReducer';

import AvatarComponent from './../components/avatar/avatar'

const styles = {
    title: {
        font: '28px sans-serif',
        color: '#6aa501',
        margin: '10px 20px'
    },
    avatar: {
        display: 'inline-block',
        width: '30%'
    },
    parts: {
        display: 'inline-block',
        width: '70%'
    }
};

class AvatarCreatorContainer extends Component {
    render() {
        return (
            <div>
                <h1 style={styles.title}>Avatar Creator</h1>

                <section>
                    <AvatarComponent avatarData={this.props.avatarData} />
                </section>

                <aside>

                </aside>
            </div>
        )
    }
}

const mapStateToProps = function(state) {
    return {
        avatarData: {
            avatarWidth: getAvatarWidth(state),
            avatarHeight: getAvatarHeight(state),
            faceFileName: getFace(state),
            currentEyes: getCurrentEyes(state),
            currentNose: getCurrentNose(state),
            currentMouth: getCurrentMouth(state),
            currentHair: getCurrentHair(state),
            currentGlasses: getCurrentGlasses(state)
        }
    };
};

const mapDispatchToProps = (dispatch) => ({
    onSendAction(data) {
        dispatch(data);
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(AvatarCreatorContainer);