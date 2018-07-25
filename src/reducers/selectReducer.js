import { GET_ID } from '../actions/selectActions';

const initialState ={
    color: false
}

export default function selectReducer(state=initialState, action) {   
    switch(action.type) {
        case GET_ID:
            return { ...state, color: true, selectedID: action.payload}
        default:
            return state
    }
}