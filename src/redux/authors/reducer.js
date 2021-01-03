import { AUTHORS_FETCH_DATA_SUCCESS, AUTHORS_HAS_ERRORED, AUTHORS_IS_LOADING } from "./actionTypes";

const initialState = {
    authors: [],
    hasErrored: false,
    isLoading: false
};

const authorsReducer = (state = initialState, action) => {
    switch (action.type) {
        case AUTHORS_HAS_ERRORED: 
            return {...state, hasErrored: action.hasErrored};
        
        case AUTHORS_IS_LOADING:
            return {...state, isLoading: action.isLoading}

        case AUTHORS_FETCH_DATA_SUCCESS:{
            return {...state, authors: action.authors}
        }

        default:
            return state;
    }
}

export default authorsReducer;