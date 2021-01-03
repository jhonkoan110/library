import { GENRES_FETCH_DATA_SUCCESS, GENRES_HAS_ERRORED, GENRES_IS_LOADING } from "./actionTypes";

const initialState = {
    genres: [],
    hasErrored: false,
    isLoading: false
};

const genresReducer = (state = initialState, action) => {
    switch (action.type) {
        case GENRES_HAS_ERRORED: 
            return {...state, hasErrored: action.hasErrored};

        case GENRES_IS_LOADING:
            return {...state, isLoading: action.isLoading};

        case GENRES_FETCH_DATA_SUCCESS:
            return {...state, genres: action.genres};
        
        default:
            return state;
    }
}

export default genresReducer;