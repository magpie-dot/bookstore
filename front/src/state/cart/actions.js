import types from './types'

export const addProductToCart = (booksList, bookId) => (dispatch) => {
    dispatch({ type: types.ADD_PRODUCT, payload: [...booksList, bookId] })
};

export const removeProduct = () => (dispatch) => {
    dispatch({ type: types.REMOVE_PRODUCT })
};

export default {
    addProductToCart,
    removeProduct
}