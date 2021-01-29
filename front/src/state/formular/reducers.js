import types from './types'

const INITIAL_STATE = {
    name: null,
    city: null,
}

const cartReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case types.SAVE_DATA:
            return {
                ...state,
                city: "Gdańsk",
            }
        case types.POST_FORMULAR:
            return {
                ...state
            }
        default:
            return state
    }
}

export default cartReducer