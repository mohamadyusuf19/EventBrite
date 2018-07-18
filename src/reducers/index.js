import { combineReducers } from 'redux';
import methodGetReducer from './methodGetReducer';
import methodPostReducer from './methodPostReducer';

export default combineReducers({
    methodGetReducer,
    methodPostReducer
});

