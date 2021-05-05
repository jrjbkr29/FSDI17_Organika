import { combineReducers } from "redux";
import todoReducer from './todoreducer';
import addCartReducer from './cartReducer';

const rootReducer = combineReducers({
    todo: todoReducer,
    cart: addCartReducer,


})

export default rootReducer;