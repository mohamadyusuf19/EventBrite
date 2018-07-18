export const GET_DATA_SUCCESS = 'GET_DATA_SUCCESS';
export const GET_DATA_BEGIN = 'GET_DATA_BEGIN';
export const GET_DATA_FAILURE = 'GET_DATA_FAILURE';

const url = 'http://211.11.1.87:3000/employees';

export const methodGet = () => {
    return dispatch => {
        dispatch(getDataBegin());
        return fetch(url, { 
            method: 'GET' 
        })
            .then(res => res.json())
            .then(data => {
                dispatch(getDataSuccess(data));
                return data
            })
            .catch(error => dispatch(getDataFailure(error)))
    }
}

export const getDataBegin = () => {
    return {
        type: GET_DATA_BEGIN
    }
}

export const getDataSuccess = (data) => {
    return {
        type: GET_DATA_SUCCESS,
        payload: data
    }
}

export const getDataFailure = error => {
    return {
        type: GET_DATA_FAILURE,
        payload: {error}
    }
}

