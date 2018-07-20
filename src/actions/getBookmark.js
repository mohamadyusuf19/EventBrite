export const GET_DATA_SUCCESS_BOOKMARK = 'GET_DATA_SUCCESS_BOOKMARK';
export const GET_DATA_BEGIN_BOOKMARK = 'GET_DATA_BEGIN_BOOKMARK';
export const GET_DATA_FAILURE_BOOKMARK = 'GET_DATA_FAILURE_BOOKMARK';

const url = 'http://211.11.1.87:3001/bookmark';

export const getBookmark = () => {
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
        type: GET_DATA_BEGIN_BOOKMARK
    }
}

export const getDataSuccess = (data) => {
    return {
        type: GET_DATA_SUCCESS_BOOKMARK,
        payload: data
    }
}

export const getDataFailure = error => {
    return {
        type: GET_DATA_FAILURE_BOOKMARK,
        payload: {error}
    }
}
