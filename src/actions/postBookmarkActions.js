import { Actions } from "react-native-router-flux";

export const DES_CHANGED = 'DES_CHANGED';
export const NAME_CHANGED = 'NAME_CHANGED';
export const POST_DATA_SUCCESS_BOOKMARK = 'POST_DATA_SUCCESS_BOOKMARK';
export const POST_DATA_BOOKMARK = 'POST_DATA_BOOKMARK';
export const POST_DATA_FAILURE_BOOKMARK = 'POST_DATA_FAILURE_BOOKMARK';
export const DATE_CHANGED = 'DATE_CHANGED';
export const REGISTRATION_CHANGED = 'REGISTRATION_CHANGED';
export const IMAGES_CHANGED = 'IMAGES_CHANGED';
export const PLACE_CHANGED = 'PLACE_CHANGED';

const url = 'http://211.11.1.87:3001/bookmark';

export const postBookmark = ({ name, description, date, register, day, images, place, id, color }) => {
    return dispatch => {
        Actions.bookmark()
        dispatch(postDataBookmark());
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
              id: id,
              color: color
            }),
        })            
            .then(data => dispatch(postDataSuccessBookmark(data)))        
            .catch(error => dispatch(postDataFailureBookmark(error)))
    }
}

export const postDataBookmark = () => {
    return {
        type: POST_DATA_BOOKMARK
    }
}

export const postDataSuccessBookmark = (data) => {
    return {
        type: POST_DATA_SUCCESS_BOOKMARK,
        payload: data
    }
}

export const postDataFailureBookmark = (error) => {
    return {
        type: POST_DATA_FAILURE_BOOKMARK,
        payload: error
    }
}
