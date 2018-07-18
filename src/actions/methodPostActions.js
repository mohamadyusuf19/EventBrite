import { Actions } from "react-native-router-flux";

export const DES_CHANGED = 'DES_CHANGED';
export const NAME_CHANGED = 'NAME_CHANGED';
export const POST_DATA_SUCCESS = 'POST_DATA_SUCCESS';
export const POST_DATA = 'POST_DATA';
export const POST_DATA_FAILURE = 'POST_DATA_FAILURE';

const url = 'http://211.11.1.87:3000/employees';

export const methodPost = ({ name, description }) => {
    return dispatch => {
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
            }),
        })
            .then((data) => {
                dispatch({
                    postDataSuccess(data)
                });
                Actions.main()
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


