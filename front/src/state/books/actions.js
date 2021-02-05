import types from './types'

const API_URL = `http://localhost:3001/api/book`;

const fetchBooks = () => (dispatch) => {
    fetch(API_URL)
        .then((res) => res.json())
        .then((books) => {
            const booksList = Object.keys(books.data).map((key) => ({
                id: key,
                ...books.data[key],
            }));
            dispatch({ type: types.SET_DATA, payload: booksList });
        })
        .catch((err) => {
            dispatch({ type: types.SET_ERROR, payload: err });
        });
};

export default fetchBooks