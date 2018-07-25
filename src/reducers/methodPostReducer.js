import {
    POST_DATA_SUCCESS,
    POST_DATA,
    POST_DATA_FAILURE,
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
    error: null,
    name: '',
    description: '',
    date: '',
    register: '',
    images: '',
    place: ''
}

export default function methodPostReducer(state = initialState, action) {
    switch(action.type) {        
        case POST_DATA_SUCCESS: 
            return { ...state, loading: false, data: action.payload, name: '', description: '', date: '', register: '', images: '', place: ''}
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
        case REGISTRATION_CHANGED:
            return { ...state, register: action.payload }
        case IMAGES_CHANGED:
            return { ...state, images: action.payload }
        case PLACE_CHANGED:
            return { ...state, place: action.payload }
        case ARROW_FUNCTION:
            return { ...state, name: '', description: '', date: '', register: '', images: '', place: '' }
        default: 
            return state;
    }
};