import userReducers from './userReducer';

import { combineReducers } from "redux";

const mainReducers = combineReducers({
    user: userReducers,
});

export default mainReducers;