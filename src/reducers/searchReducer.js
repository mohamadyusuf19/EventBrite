import {
    GET_SEARCH_BEGIN,
    GET_SEARCH_SUCCESS,
    GET_SEARCH_FAILURE,
    SEARCH_TEXT,
    GET_DATA_SEARCH
} from '../actions/searchActions'

const initialState = {
    data: [],
    loading: false,
    error: null,
    query: '',
    fulldata: [],
    refresh: false
}

export default function searchReducer (state=initialState, action) {
    console.log(action) 
    switch(action.type) {
        case GET_SEARCH_BEGIN:
            return { ...state, loading: true, refresh: true }
        case GET_SEARCH_SUCCESS:
            return { ...state, data: action.payload.reverse(), loading: false, refresh: false }
        case GET_SEARCH_FAILURE:
            return { ...state, error: action.payload, loading: false, refresh: false }
        case SEARCH_TEXT:
            return { ...state, query: action.payload.toLowerCase() }
        case GET_DATA_SEARCH:
            return { ...state, fulldata: action.payload, refresh: false }
        default: 
            return state
    }
}