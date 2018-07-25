import { combineReducers } from 'redux';
import methodGetReducer from './methodGetReducer';
import methodPostReducer from './methodPostReducer';
import getBookmarkReducer from './getBookmarkReducer';
import postBookmarkReducer from './postBookmarkReducer';
import deleteBookmarkReducer from './deleteBookmarkReducer';
import selectReducer from './selectReducer';
import searchReducer from './searchReducer';

export default combineReducers({
    methodGetReducer,
    methodPostReducer,    
    getBookmarkReducer,
    postBookmarkReducer,
    deleteBookmarkReducer,
    selectReducer,
    searchReducer
});

