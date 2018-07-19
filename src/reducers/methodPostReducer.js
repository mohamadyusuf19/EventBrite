import {
    POST_DATA_SUCCESS,
    POST_DATA,
    POST_DATA_FAILURE,
    NAME_CHANGED,
    DES_CHANGED,
    DATE_CHANGED
} from '../actions/types';

const initialState = {
    data: [],
    loading: false,
    error: null,
    name: '',
    description: '',
    date: ''
}

export default function methodPostReducer(state = initialState, action) {
    console.log(action)
    switch(action.type) {        
        case POST_DATA_SUCCESS: 
            return { ...state, loading: false, data: action.payload, name: '', description: '', date: '' }
        case POST_DATA:
            return { ...state, loading: true }
        case POST_DATA_FAILURE:
            return { ...state, loading: false, error: action.payload }
        case NAME_CHANGED:
            return { ...state, name: action.payload }
        case DES_CHANGED:
            return { ...state, description: action.payload }
        case DATE_CHANGED:
            return { ...state, date: action.payload }
        default: 
            return state;
    }
};