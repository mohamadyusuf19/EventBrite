import { Actions } from "react-native-router-flux";

export const DELETE_DATA_SUCCESS_BOOKMARK = 'DELETE_DATA_SUCCESS_BOOKMARK';
export const DELETE_DATA_BOOKMARK = 'DELETE_DATA_BOOKMARK';
export const DELETE_DATA_FAILURE_BOOKMARK = 'DELETE_DATA_FAILURE_BOOKMARK';

const url = 'http://211.11.1.87:3001/bookmark';

export const deleteBookmark = ({ name, description, date, register, day, images, place, id }) => {
    return dispatch => {
        Actions.bookmark()
        dispatch(deleteDataBookmark());
        return fetch(url+"/"+id, { 
            method: 'DELETE',
            headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              id: id,
              name: name,
              description: description,
              date: date,
              register: register,
              day: day,
              images: images,
              place: place
            }),
        })
            .then(data => dispatch(deleteDataSuccessBookmark(data)))             
            .catch(error => dispatch(deleteDataFailureBookmark(error)))
    }
}

export const deleteDataBookmark = () => {
    return {
        type: DELETE_DATA_BOOKMARK
    }
}

export const deleteDataSuccessBookmark = (data) => {
    return {
        type: DELETE_DATA_SUCCESS_BOOKMARK,
        payload: data
    }
}

export const deleteDataFailureBookmark = (error) => {
    return {
        type: DELETE_DATA_FAILURE_BOOKMARK,
        payload: error
    }
}