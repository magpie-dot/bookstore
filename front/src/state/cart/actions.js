import types from './types'

export const addProductToCart = (bookId) => (dispatch) => {
    dispatch({ type: types.ADD_PRODUCT, id: bookId })
};

export const increaseQuantityOfProduct = (bookId) => (dispatch) => {
    dispatch({ type: types.INCREASE_QUANTITY_OF_PRODUCT, id: bookId })
};

export const decreaseQuantityOfProduct = (bookId) => (dispatch) => {
    dispatch({ type: types.DECREASE_QUANTITY_OF_PRODUCT, id: bookId })
};

export default {
    addProductToCart,
    increaseQuantityOfProduct,
    decreaseQuantityOfProduct
}