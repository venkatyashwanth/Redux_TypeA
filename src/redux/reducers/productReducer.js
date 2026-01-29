import { FETCH_PRODUCTS_REQUEST, FETCH_PRODUCTS_SUCCESS, FETCH_PRODUCTS_FAILURE, SET_SELECTED_PRODUCT, CLEAR_SELECTED_PRODUCT } from "../constants/productConstants";
const initialState = {
    loading: false,
    products: [],
    selectedProduct: null,
    error: null
}

export const productReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_PRODUCTS_REQUEST:
            return { ...state, loading: true };
        case FETCH_PRODUCTS_SUCCESS:
            return {
                ...state,
                loading: false,
                products: action.payload,
                error: null
            }
        case FETCH_PRODUCTS_FAILURE:
            return {
                ...state,
                loading: false,
                products: [],
                error: action.payload
            }
        case SET_SELECTED_PRODUCT:
            return {
                ...state,
                selectedProduct: action.payload
            }
        case CLEAR_SELECTED_PRODUCT:
            return {
                ...state,
                selectedProduct: null
            }
        default:
            return state;
    }
}