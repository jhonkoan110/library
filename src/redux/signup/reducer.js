import { SET_RESPONSE_TEXT, SIGNUP_HAS_ERRORED, SIGNUP_IS_LOADING } from './actionTypes';

const initialState = {
    isLoading: false,
    hasErrored: false,
};

const signupReducer = (state = initialState, action) => {
    switch (action.type) {
        case SIGNUP_HAS_ERRORED:
            return { ...state, hasErrored: action.hasErrored };

        case SIGNUP_IS_LOADING:
            return { ...state, isLoading: action.isLoading };

        case SET_RESPONSE_TEXT:
            return { ...state, responseText: action.text };

        default:
            return state;
    }
};

export default signupReducer;
