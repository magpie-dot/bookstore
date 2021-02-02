import types from './types'

const INITIAL_STATE = {
    totalBooks: 0,
    booksInCart: {},
}

const cartReducer = (state = INITIAL_STATE, action) => {
    const { booksInCart, totalBooks } = state;
    switch (action.type) {
        case types.ADD_PRODUCT:
            return {
                ...state,
                totalBooks: totalBooks + 1,
                booksInCart: booksInCart[action.id] ? {...booksInCart, [action.id]: { amount: booksInCart[action.id].amount + 1 } } : {...booksInCart, [action.id]: { amount: 1 } }
            }
        case types.INCREASE_AMOUNT_OF_PRODUCT:
            return {
                ...state,
                totalBooks: totalBooks + 1,
                booksInCart: {...booksInCart, [action.id]: { amount: booksInCart[action.id].amount + 1 } }
            }
        case types.DECREASE_AMOUNT_OF_PRODUCT:
            return {
                ...state,
                totalBooks: totalBooks - 1,
                booksInCart: action.booksInCart
            }
        default:
            return state
    }
}

export default cartReducer