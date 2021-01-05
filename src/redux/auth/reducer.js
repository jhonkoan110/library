import { AUTH_DATA, LOGIN_HAS_ERRORED, LOGIN_IS_LOADING } from './actionTypes';

const initialState = {
    user: localStorage.getItem('library-user') || null,
    token: localStorage.getItem('library-token') || null,
    hasErrored: false,
    isLoading: false,
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case AUTH_DATA:
            return { ...state, ...action.payload };

        case LOGIN_HAS_ERRORED: {
            return { ...state, hasErrored: action.hasErrored };
        }

        case LOGIN_IS_LOADING: {
            return { ...state, isLoading: action.isLoading };
        }

        default:
            return state;
    }
};

export default authReducer;
