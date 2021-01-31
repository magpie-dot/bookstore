import types from './types'

const INITIAL_STATE = {
    isEmpty: true,
    booksIdList: [],
}

const cartReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case types.ADD_PRODUCT:
            return {
                ...state,
                isEmpty: false,
                booksIdList: action.payload
            }
        case types.REMOVE_PRODUCT:
            return {
                ...state,
                booksIdList: []
            }
        default:
            return state
    }
}

export default cartReducer