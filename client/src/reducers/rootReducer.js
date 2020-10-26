
import { combineReducers } from "redux";

const mainReducers = combineReducers({
    products: productReducers,
    category: categoryReducers,
    search: searchReducer,
    cart: cartReducers,
    users: userReducers,
    order: orderReducer,
    jwt: jwtUserRducers,
});

export default mainReducers;