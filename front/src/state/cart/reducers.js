import types from './types'

const INITIAL_STATE = {
    bookIdList: [],
}

const cartReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case types.ADD_PRODUCT:
            return {
                ...state,
                cart: action.dispatch
            }
        case types.REMOVE_PRODUCT:
            return {
                ...state,
                cart: []
            }
        default:
            return state
    }
}

export default cartReducer