import {
    POST_DATA_SUCCESS_BOOKMARK,
    POST_DATA_BOOKMARK,
    POST_DATA_FAILURE_BOOKMARK,
    NAME_CHANGED,
    DES_CHANGED,
    DATE_CHANGED,
    REGISTRATION_CHANGED,
    IMAGES_CHANGED,
    PLACE_CHANGED,
    ARROW_FUNCTION
} from '../actions/types';

const initialState = {
    data: [],
    loading: false,
    error: null    
}

export default function postBookmarkReducer(state = initialState, action) {
    console.log(action)
    switch(action.type) {        
        case POST_DATA_SUCCESS_BOOKMARK: 
            return { ...state, loading: false, data: action.payload}
        case POST_DATA_BOOKMARK:
            return { ...state, loading: true }
        case POST_DATA_FAILURE_BOOKMARK:
            return { ...state, loading: false, error: action.payload }        
        default: 
            return state;
    }
};