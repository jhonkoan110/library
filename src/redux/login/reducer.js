import { LOGIN_HAS_ERRORED, LOGIN_IS_LOADING, LOGIN_UPDATE_PASSWORD_TEXT, LOGIN_UPDATE_USERNAME_TEXT } from "./actionTypes";

const initialState = {
    usernameText: '',
    passwordText: '',
    hasErrored: false,
    isLoading: false
};

const loginReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN_UPDATE_USERNAME_TEXT:
            return {...state, usernameText: action.text};

        case LOGIN_UPDATE_PASSWORD_TEXT:
            return {...state, passwordText: action.text};

        case LOGIN_HAS_ERRORED:
            return {...state, hasErrored: action.hasErrored};

        case LOGIN_IS_LOADING:
            return {...state, isLoading: action.isLoading};

        default:
            return state;
    }
}

export default loginReducer;