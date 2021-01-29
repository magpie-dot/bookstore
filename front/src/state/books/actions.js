import types from './types'

const fetchBooks = () => (dispatch) => {
    fetch(`http://localhost:3001/api/book`)
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