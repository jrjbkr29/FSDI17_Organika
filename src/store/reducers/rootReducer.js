import { combineReducers } from "redux";
import todoReducer from './todoreducer';
import addCartReducer from './cartReducer';
import totalReducer from './totalReducer';

const rootReducer = combineReducers({
    todo: todoReducer,
    cart: addCartReducer,
    total: totalReducer
})

export default rootReducer;