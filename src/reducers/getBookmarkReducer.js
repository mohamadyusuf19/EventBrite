import {
    GET_DATA_BEGIN_BOOKMARK,
    GET_DATA_SUCCESS_BOOKMARK,
    GET_DATA_FAILURE_BOOKMARK    
} from '../actions/types';

const initialState = {
    data: [],
    loading: false,
    error: null
}

export default function getBookmarkReducer(state = initialState, action) {
    console.log(action)
    switch(action.type) {
        case GET_DATA_BEGIN_BOOKMARK:
            return { ...state, loading: true };
        case GET_DATA_SUCCESS_BOOKMARK:
            return { ...state, loading: false, data: action.payload }
        case GET_DATA_FAILURE_BOOKMARK:
            return { ...state, loading: false, error: action.payload.error, data: []}                    
        default: 
            return state;
    }
};