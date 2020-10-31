import axios from 'axios'
import { SEARCH_BY_QUERY } from '../constants';
const { API_URL } = process.env

export const searchByQuery = searchTerm => dispatch => {
    console.log(API_URL);
    axios.get('http://localhost:3001/api/search?q=' + searchTerm)
        .then(res => {
            console.log(res);
            dispatch({
                type: SEARCH_BY_QUERY,
                payload: res,
            })
        })
}