export const GET_DATA_SUCCESS = 'GET_DATA_SUCCESS';
export const GET_DATA_BEGIN = 'GET_DATA_BEGIN';
export const GET_DATA_FAILURE = 'GET_DATA_FAILURE';
export const GET_UPDATE = 'GET_UPDATE'
export const GET_UPDATE_SUCCESS = 'GET_UPDATE_SUCCESS'

const url = 'http://211.11.1.87:3000/eventbrite';

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

export const methodUpdate = ({ id, color, name, description, date, register, day, images, place }) => {
    return dispatch => {
        dispatch(getUpdateBegin())
            return fetch(url+"/"+id, {
                method: 'PUT',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    color: color,
                    name: name,
                    description: description,
                    date: date,
                    register: register,
                    day: day,
                    images: images,
                    place: place  
                }),
            })
                .then(data => getUpdateSuccess(data));                   
    }
}

const getUpdateBegin = () => {
    return {
        type: GET_UPDATE
    }
}

const getUpdateSuccess = (data) => {
    return {
        type: GET_UPDATE_SUCCESS,
        payload: data
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
