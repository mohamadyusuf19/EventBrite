import _ from 'lodash';
export const GET_SEARCH_BEGIN = 'GET_SEARCH_BEGIN'
export const GET_SEARCH_SUCCESS = 'GET_SEARCH_SUCCESS'
export const GET_SEARCH_FAILURE = 'GET_SEARCH_FAILURE'
export const SEARCH_TEXT = 'SEARCH_TEXT'
export const GET_DATA_SEARCH = 'GET_DATA_SEARCH'

const url = 'http://211.11.1.87:3000/eventbrite';

export const searchActions = () => {
    return  dispatch => {
        dispatch(getSearchBegin())
        return fetch(url, {
            method: 'GET'
        })
            .then(res => res.json())
            .then(data => {
                dispatch(getSearchSuccess(data))
                return data                    
            })
            .catch(error => getSearchFailure(error))            
    }    
}

export const getSearchBegin = () => {
    return {
        type: GET_SEARCH_BEGIN
    }
}

export const getSearchSuccess = (data) => {
    return {
        type: GET_SEARCH_SUCCESS,
        payload: data
    }
}

export const getDataSearch = ({ fulldata }) => {
    return {
        type: GET_DATA_SEARCH,
        payload: fulldata
    }
}

export const getSearchFailure = (error) => {
    return {
        type: GET_SEARCH_FAILURE,
        payload: error
    }
}

export const searchChanged = (text) => {
    return {
        type: SEARCH_TEXT,
        payload: text
    }
}

export const contains = ({ name, date, place }, query) => {
    if(name.includes(query) || date.includes(query) || place.includes(query) ) {
        return  true
    } 
    return false;
}

export const getUsers = (limit = 20, query = "") => {
    return new Promise((resolve, reject) => {
        if(query.length===0) {
            resolve(_.take(users, limit ));
        } else {
            const formatQuery = query.toLowerCase();
            const results = _.filter(users, user => {
                return contains(user, formatQuery);
            });
            resolve(_.take(results, limit));
        }
    })
}
