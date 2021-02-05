import types from './types'

const INITIAL_STATE = {
    booksList: [],
    isOrder: false,
    error: null,
};

const booksReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case types.SET_DATA:
            return {
                ...state,
                booksList: action.payload,
                isOrder: false,
            };
        case types.SET_ORDER:
            return {
                ...state,
                isOrder: true,
            }
        case types.SET_ERROR:
            return {
                ...state,
                booksList: [],
                error: action.payload,
            };
        default:
            return state;
    }
};

export default booksReducer