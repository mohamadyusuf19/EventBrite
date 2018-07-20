import { combineReducers } from 'redux';
import methodGetReducer from './methodGetReducer';
import methodPostReducer from './methodPostReducer';
import selectReducer from './selectReducer';

export default combineReducers({
    methodGetReducer,
    methodPostReducer,
    selectReducer    
});

