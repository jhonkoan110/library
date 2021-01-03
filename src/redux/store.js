import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import authReducer from "./auth/reducer";
import authorsReducer from "./authors/reducer";
import booksReducer from "./books/reducer";
import genresReducer from "./genres/reducer";
import loginReducer from "./login/reducer";
import signupReducer from "./signup/reducer";


const reducers = combineReducers({
    books: booksReducer,
    authors: authorsReducer,
    genres: genresReducer,
    signup: signupReducer,
    login: loginReducer,
    auth: authReducer
});

const store = createStore(reducers, applyMiddleware(thunk));

window.store = store;

export default store;
