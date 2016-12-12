export const SELECT_PART = 'SELECT_PART';

export const selectPart = (payload) => {
    return {
        type: SELECT_PART,
        payload
    }
};
