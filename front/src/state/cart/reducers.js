import types from './types'

const INITIAL_STATE = {
    totalBooks: 0,
    booksInCart: {},
}

const cartReducer = (state = INITIAL_STATE, action) => {
    const { booksInCart, totalBooks } = state;

    const decreaseQuantityOfProduct = (id) => {
        if (booksInCart[id].quantity > 1) { return {...booksInCart, [id]: { quantity: booksInCart[id].quantity - 1 } } } else {
            delete booksInCart[id]
            return booksInCart
        }
    }

    switch (action.type) {
        case types.ADD_PRODUCT:
            return {
                ...state,
                totalBooks: totalBooks + 1,
                booksInCart: booksInCart[action.id] ? {...booksInCart, [action.id]: { quantity: booksInCart[action.id].quantity + 1 } } : {...booksInCart, [action.id]: { quantity: 1 } }
            }
        case types.INCREASE_QUANTITY_OF_PRODUCT:
            return {
                ...state,
                totalBooks: totalBooks + 1,
                booksInCart: {...booksInCart, [action.id]: { quantity: booksInCart[action.id].quantity + 1 } }
            }
        case types.DECREASE_QUANTITY_OF_PRODUCT:
            return {
                ...state,
                totalBooks: totalBooks - 1,
                booksInCart: decreaseQuantityOfProduct(action.id)
            }
        case types.CLEAR_CART:
            return {
                totalBooks: 0,
                booksInCart: {}
            }
        default:
            return state
    }
}

export default cartReducer