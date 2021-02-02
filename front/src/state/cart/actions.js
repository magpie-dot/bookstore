import types from './types'

export const addProductToCart = (bookId) => (dispatch) => {
    dispatch({ type: types.ADD_PRODUCT, id: bookId })
};

export const increaseAmountOfProduct = (bookId) => (dispatch) => {
    dispatch({ type: types.INCREASE_AMOUNT_OF_PRODUCT, id: bookId })
};

export const decreaseAmountOfProduct = (bookId, booksInCart) => (dispatch) => {
    let newBooksInCart = booksInCart;
    if (booksInCart[bookId].amount > 1) { newBooksInCart = {...booksInCart, [bookId]: { amount: booksInCart[bookId].amount - 1 } } } else {
        delete booksInCart[bookId]
    }
    dispatch({ type: types.DECREASE_AMOUNT_OF_PRODUCT, booksInCart: newBooksInCart })
};

export default {
    addProductToCart,
    increaseAmountOfProduct,
    decreaseAmountOfProduct
}