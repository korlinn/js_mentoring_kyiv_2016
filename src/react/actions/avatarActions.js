export const SELECT_EYES = 'SELECT_EYES';
export const SELECT_NOSE = 'SELECT_SELECT_NOSE';
export const SELECT_MOUTH = 'SELECT_SELECT_MOUTH';
export const SELECT_HAIR = 'SELECT_SELECT_HAIR';
export const SELECT_GLASSES = 'SELECT_SELECT_GLASSES';

export const selectEyes = (payload) => {
    return {
        type: SELECT_EYES,
        payload
    }
};

export const selectNose = (payload) => {
    return {
        type: SELECT_NOSE,
        payload
    }
};

export const selectMouth = (payload) => {
    return {
        type: SELECT_MOUTH,
        payload
    }
};

export const selectHair = (payload) => {
    return {
        type: SELECT_HAIR,
        payload
    }
};

export const selectGlasses = (payload) => {
    return {
        type: SELECT_GLASSES,
        payload
    }
};
