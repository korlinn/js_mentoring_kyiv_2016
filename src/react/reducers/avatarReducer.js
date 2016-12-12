import {SELECT_PART} from './../actions/avatarActions';

const PARTS = {
    EYES: 'eyes',
    NOSE: 'nose',
    MOUTH: 'mouth',
    HAIR: 'hair',
    GLASSES: 'glasses'
};

const initialState = {
    eyes: '',
    nose: '',
    mouth: '',
    hair: '',
    glasses: ''
};

function getNewState(state, payload) {
    switch (payload.partName) {
        case PARTS.EYES:
            return Object.assign({}, state, {
                eyes: payload.part
            });

        case PARTS.NOSE:
            return Object.assign({}, state, {
                nose: payload.part
            });

        case PARTS.MOUTH:
            return Object.assign({}, state, {
                mouth: payload.part
            });

        case PARTS.HAIR:
            return Object.assign({}, state, {
                hair: payload.part
            });

        case PARTS.GLASSES:
            return Object.assign({}, state, {
                glasses: payload.part
            });
        default:
            return state;
    }
}

export default function avatarReducer(state = initialState, action) {
    switch (action.type) {
        case SELECT_PART:
            return getNewState(state, action.payload);
        default:
            return state;
    }
}

export function getCurrentEyes(state) {
    return state.avatarReducer.eyes;
}

export function getCurrentNose(state) {
    return state.avatarReducer.nose;
}

export function getCurrentMouth(state) {
    return state.avatarReducer.mouth;
}

export function getCurrentHair(state) {
    return state.avatarReducer.hair;
}

export function getCurrentGlasses(state) {
    return state.avatarReducer.glasses;
}
