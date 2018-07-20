export const SELECT_ID = 'SELECT_ID';

export const selectId = (id) => {
    return {
        type: SELECT_ID,
        payload: id
    }
}