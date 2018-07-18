import {
    GET_DATA_BEGIN,
    GET_DATA_SUCCESS,
    GET_DATA_FAILURE
} from '../actions';

const initialState = {
    data: [],
    loading: false,
    error: null
}

export default function methodReducer(state = initialState, action) {
    console.log(action)
    switch(action.type) {
        case GET_DATA_BEGIN:
            return { ...state, loading: true };
        case GET_DATA_SUCCESS:
            return { ...state, loading: false, data: action.payload }
        case GET_DATA_FAILURE:
            return { ...state, loading:false, error: action.payload.error, data: []}
        default: 
            return state;
    }
};