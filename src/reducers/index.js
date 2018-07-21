import { combineReducers } from 'redux';
import methodGetReducer from './methodGetReducer';
import methodPostReducer from './methodPostReducer';
import getBookmarkReducer from './getBookmarkReducer';
import postBookmarkReducer from './postBookmarkReducer';
import deleteBookmarkReducer from './deleteBookmarkReducer';

export default combineReducers({
    methodGetReducer,
    methodPostReducer,    
    getBookmarkReducer,
    postBookmarkReducer,
    deleteBookmarkReducer    
});

