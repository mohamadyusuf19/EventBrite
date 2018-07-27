import {
    POST_DATA_SUCCESS_BOOKMARK,
    POST_DATA_BOOKMARK,
    POST_DATA_FAILURE_BOOKMARK    
} from '../actions/types';

const initialState = {
    data: [],
    loading: false,
    error: null,
    color: false         
}

export default function postBookmarkReducer(state = initialState, action) {
    switch(action.type) {        
        case POST_DATA_SUCCESS_BOOKMARK: 
            return { ...state, loading: false, data: action.payload, color: true }
        case POST_DATA_BOOKMARK:
            return { ...state, loading: true }
        case POST_DATA_FAILURE_BOOKMARK:
            return { ...state, loading: false, error: action.payload }               
        default: 
            return state;
    }
};