import {
    SET_RESPONSE_TEXT,
    SIGNUP_HAS_ERRORED,
    SIGNUP_IS_LOADING,
    SIGNUP_UPDATE_EMAIL_TEXT,
    SIGNUP_UPDATE_FIRSTNAME_TEXT,
    SIGNUP_UPDATE_LASTNAME_TEXT,
    SIGNUP_UPDATE_LOGIN_TEXT,
    SIGNUP_UPDATE_PASSWORD_TEXT
} from "./actionTypes";

const initialState = {
    firstNameText: '',
    lastNameText: '',
    loginText: '',
    emailText: '',
    passwordText: '',
    responseText: '',
    isLoading: false,
    hasErrored: false
}

const signupReducer = (state = initialState, action) => {
    switch (action.type) {
        case SIGNUP_UPDATE_FIRSTNAME_TEXT:
            return {...state, firstNameText: action.text};
        
        case SIGNUP_UPDATE_LASTNAME_TEXT: 
            return {...state, lastNameText: action.text};

        case SIGNUP_UPDATE_LOGIN_TEXT: 
            return {...state, loginText: action.text};

        case SIGNUP_UPDATE_EMAIL_TEXT:
            return {...state, emailText: action.text};

        case SIGNUP_UPDATE_PASSWORD_TEXT:
            return {...state, passwordText: action.text};

        case SIGNUP_HAS_ERRORED:
            return {...state, hasErrored: action.hasErrored};

        case SIGNUP_IS_LOADING:
            return {...state, isLoading: action.isLoading};

        case SET_RESPONSE_TEXT:
            return {...state, responseText: action.text};

        default: 
            return state;
    }
}

export default signupReducer;