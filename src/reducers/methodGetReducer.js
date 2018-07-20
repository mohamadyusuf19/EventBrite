import {
    GET_DATA_BEGIN,
    GET_DATA_SUCCESS,
    GET_DATA_FAILURE,
    SELECT_ID
} from '../actions/types';

const initialState = {
    data: {},
    loading: false,
    error: null,
    refresh: false
}

export default function methodGetReducer(state = initialState, action) {
    console.log(action)
    switch(action.type) {
        case GET_DATA_BEGIN:
            return { ...state, loading: true, refresh: true };
        case GET_DATA_SUCCESS:
            return { ...state, loading: false, data: action.payload.reverse(), refresh: false }
        case GET_DATA_FAILURE:
            return { ...state, loading: false, error: action.payload.error, data: [], refresh: false}                
        case SELECT_ID:
            return action.payload
        default: 
            return state;
    }
};