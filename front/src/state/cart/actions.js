import types from './types'

export const addProductToCart = (bookId) => (dispatch) => {
    dispatch({ type: types.ADD_PRODUCT, id: bookId })
};

export const increaseAmountOfProduct = (bookId) => (dispatch) => {
    dispatch({ type: types.INCREASE_AMOUNT_OF_PRODUCT, id: bookId })
};

export const decreaseAmountOfProduct = (bookId) => (dispatch) => {
    dispatch({ type: types.DECREASE_AMOUNT_OF_PRODUCT, id: bookId })
};

export default {
    addProductToCart,
    increaseAmountOfProduct,
    decreaseAmountOfProduct
}