import { SELECT_ID } from "../actions/selectActions";

export default (state=null, action) => {
    switch(action.type) {
        case SELECT_ID:
            return action.payload
        default:
            return state
    }
};