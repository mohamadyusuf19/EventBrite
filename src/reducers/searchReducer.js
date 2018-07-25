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
    fulldata: []
}

export default function searchReducer (state=initialState, action) {
    console.log(action) 
    switch(action.type) {
        case GET_SEARCH_BEGIN:
            return { ...state, loading: true }
        case GET_SEARCH_SUCCESS:
            return { ...state, data: action.payload, loading: false }
        case GET_SEARCH_FAILURE:
            return { ...state, error: action.payload, loading: false }
        case SEARCH_TEXT:
            return { ...state, query: action.payload }
        case GET_DATA_SEARCH:
            return { ...state, fulldata: action.payload }
        default: 
            return state
    }
}