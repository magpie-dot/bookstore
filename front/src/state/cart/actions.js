import types from './types'

const addProduct = (bookId) => (dispatch) => {
    let bookIdList = []
    bookIdList.push(bookId)
    dispatch({ type: types.ADD_PRODUCT, payload: bookIdList })
};

const removeProduct = () => (dispatch) => {
    dispatch({ type: types.REMOVE_PRODUCT })
};

export default {
    addProduct,
    removeProduct
}