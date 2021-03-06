import types from './types'

const API_URL = `data/books.json`;

const fetchBooks = () => (dispatch) => {
    dispatch({ type: types.SET_LOADING })

    fetch(API_URL)
        .then((res) => res.json())
        .then((books) => {
            dispatch({ type: types.SET_DATA, payload: books });
        })
        .catch((err) => {
            dispatch({ type: types.SET_ERROR, payload: err });
        });
};

export default fetchBooks