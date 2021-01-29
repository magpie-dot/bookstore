import types from './types'

const INITIAL_STATE = {
    booksList: [],
    error: null,
};

const booksReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case types.SET_DATA:
            return {
                ...state,
                booksList: action.payload,
            };
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