import { combineReducers } from "redux";
import cartReducer from "./state/cart/";
import formularReducer from "./state/formular"

const rootReducer = combineReducers({
    cart: cartReducer,
    formular: formularReducer
})

export default rootReducer