import { combineReducers } from "redux";
import cartReducer from "./state/cart/";
import formularReducer from "./state/formular"
import booksReducer from "./state/books"

const rootReducer = combineReducers({
    cart: cartReducer,
    formular: formularReducer,
    books: booksReducer
})

export default rootReducer