import { Actions } from 'react-native-router-flux';
export const ARROW_FUNCTION = 'ARROW_FUNCTION';

export const getArrow = () => {
    return dispatch => {
        Actions.pop()
        dispatch({
            type: ARROW_FUNCTION
        })    
    }    
}