export const GET_ID = 'GET_ID';

export const selectActions = (id) => {
    return {
        type: GET_ID,
        payload: id
    }
}