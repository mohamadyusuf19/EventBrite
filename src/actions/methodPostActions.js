import { Actions } from "react-native-router-flux";

export const DES_CHANGED = 'DES_CHANGED';
export const NAME_CHANGED = 'NAME_CHANGED';
export const POST_DATA_SUCCESS = 'POST_DATA_SUCCESS';
export const POST_DATA = 'POST_DATA';
export const POST_DATA_FAILURE = 'POST_DATA_FAILURE';
export const DATE_CHANGED = 'DATE_CHANGED';
export const REGISTRATION_CHANGED = 'REGISTRATION_CHANGED';
export const IMAGES_CHANGED = 'IMAGES_CHANGED';
export const PLACE_CHANGED = 'PLACE_CHANGED';

const url = 'http://211.11.1.87:3000/eventbrite';

export const methodPost = ({ name, description, date, register, day, images, place, color }) => {
    return dispatch => {
        Actions.main()
        dispatch(postData());
        return fetch(url, { 
            method: 'POST',
            headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              name: name,
              description: description,
              date: date,
              register: register,
              day: day,
              images: images,
              place: place,
              color: color              
            }),
        })
            .then((data) => {
                dispatch({
                    type: POST_DATA_SUCCESS,
                    payload: data
                })                
            })        
            .catch(error => dispatch(postDataFailure(error)))
    }
}

export const postData = () => {
    return {
        type: POST_DATA
    }
}

export const postDataSuccess = (data) => {
    return {
        type: POST_DATA_SUCCESS,
        payload: data
    }
}

export const postDataFailure = (error) => {
    return {
        type: POST_DATA_FAILURE,
        payload: error
    }
}

export const nameChanged = (text) => {
    return {
        type: NAME_CHANGED,
        payload: text
    }
}

export const descriptionChanged = (text) => {
    return {
        type: DES_CHANGED,
        payload: text
    }
}

export const dateChanged = (text) => {
    return {
        type: DATE_CHANGED,
        payload: text
    }
}

export const registerChanged = (text) => {
    return {
        type: REGISTRATION_CHANGED,
        payload: text
    }
}

export const imagesChanged = (text) => {
    return {
        type: IMAGES_CHANGED,
        payload: text
    }
}

export const placeChanged = (text) => {
    return {
        type: PLACE_CHANGED,
        payload: text
    }
}