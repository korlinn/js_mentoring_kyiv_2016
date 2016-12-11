import {SELECT_EYES, SELECT_NOSE, SELECT_MOUTH, SELECT_HAIR, SELECT_GLASSES} from './../actions/avatarActions';

const initialState = {
    eyes: '',
    nose: '',
    mouth: '',
    hair: '',
    glasses: ''
};

export default function avatarReducer(state = initialState, action) {
    switch (action.type) {
        case SELECT_EYES:
            return Object.assign({}, state, {
                eyes: action.payload.currentEyes
            });

        case SELECT_NOSE:
            return Object.assign({}, state, {
                nose: action.payload.currentNose
            });

        case SELECT_MOUTH:
            return Object.assign({}, state, {
                mouth: action.payload.currentMouth
            });

        case SELECT_HAIR:
            return Object.assign({}, state, {
                hair: action.payload.currentHair
            });

        case SELECT_GLASSES:
            return Object.assign({}, state, {
                glasses: action.payload.currentGlasses
            });

        default:
            return state;
    }
}

export function getCurrentEyes(state) {
    return state.eyes;
}

export function getCurrentNose(state) {
    return state.nose;
}

export function getCurrentMouth(state) {
    return state.mouth;
}

export function getCurrentHair(state) {
    return state.hair;
}

export function getCurrentGlasses(state) {
    return state.glasses;
}
