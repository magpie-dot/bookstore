import { combineReducers } from "redux";
import cartReducer from "./state/cart/";
import booksReducer from "./state/books"

const rootReducer = combineReducers({
    cart: cartReducer,
    books: booksReducer
})

export default rootReducer