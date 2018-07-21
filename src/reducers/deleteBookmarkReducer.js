import {
    DELETE_DATA_SUCCESS_BOOKMARK,
    DELETE_DATA_BOOKMARK,
    DELETE_DATA_FAILURE_BOOKMARK
} from '../actions/types';

const initialState = {
    data: [],
    loading: false,
    error: null,
    refresh: false
}

export default function deleteBookmarkReducer(state=initialState, action) {
    switch(action.type) {
        case DELETE_DATA_BOOKMARK:
            return { ...state, loading: true, refresh: true  }
        case DELETE_DATA_SUCCESS_BOOKMARK:
            return { ...state, data: action.payload, loading: false, refresh: false }
        case DELETE_DATA_FAILURE_BOOKMARK:
            return { ...state, loading: false, error: action.payload, refresh: false }
        default:
            return state
    }
}