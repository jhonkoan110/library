import { AUTH_DATA } from "./actionTypes";

const initialState = {
    user: localStorage.getItem('library-user') || null,
    token: localStorage.getItem('library-token') || null
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case AUTH_DATA: 
            return {...state, ...action.payload};

        default: 
            return state;
    }
}

export default authReducer;