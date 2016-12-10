import {SELECT_EYES, SELECT_NOSE, SELECT_MOUTH, SELECT_HAIR, SELECT_GLASSES} from './../actions/avatarActions';
import data from './../data/avatarData'

const initialState = {
    avatarWidth: data.avatarWidth,
    avatarHeight: data.avatarHeight,
    faceFileName: data.faceFileName,
    currentEyes: data.eyes[0],
    currentNose: data.noses[0],
    currentMouth: data.mouths[0],
    currentHair: data.hairs[0],
    currentGlasses: data.glasses[0]
};

export default function avatarReducer(state = initialState, action) {
    switch (action.type) {
        case SELECT_EYES:
            return Object.assign({}, state, {
                currentEyes: action.payload.currentEyes
            });

        case SELECT_NOSE:
            return Object.assign({}, state, {
                currentNose: action.payload.currentNose
            });

        case SELECT_MOUTH:
            return Object.assign({}, state, {
                currentMouth: action.payload.currentMouth
            });

        case SELECT_HAIR:
            return Object.assign({}, state, {
                currentHair: action.payload.currentHair
            });

        case SELECT_GLASSES:
            return Object.assign({}, state, {
                currentGlasses: action.payload.currentGlasses
            });

        default:
            return state;
    }
}

export function getAvatarWidth(state) {
    return state.avatarReducer.avatarWidth;
}

export function getAvatarHeight(state) {
    return state.avatarReducer.avatarHeight;
}

export function getFace(state) {
    return state.avatarReducer.faceFileName;
}

export function getCurrentEyes(state) {
    return state.currentEyes;
}

export function getCurrentNose(state) {
    return state.currentNose;
}

export function getCurrentMouth(state) {
    return state.currentMouth;
}

export function getCurrentHair(state) {
    return state.currentHair;
}

export function getCurrentGlasses(state) {
    return state.currentGlasses;
}
