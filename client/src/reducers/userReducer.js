import { SEARCH_BY_QUERY } from '../constants';
const initialState = {
    products: [],
    searchResults: [],
    productDetail: {},
};

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEARCH_BY_QUERY:
            return {
                ...state,
                searchResults: action.payload,
            }
        default:
            return { ...state };

    };
}

export default userReducer;