import {
    BOOKS_FETCH_DATA_SUCCESS,
    BOOKS_HAS_ERRORED,
    BOOKS_IS_LOADING,
    BOOKS_SET_CURRENT_PAGE,
} from './actionTypes';

const initialState = {
    books: [],
    hasErrored: false,
    isLoading: false,
    currentPage: 1,
    booksPerPage: 10,
};

const booksReducer = (state = initialState, action) => {
    switch (action.type) {
        case BOOKS_HAS_ERRORED:
            return { ...state, hasErrored: action.hasErrored };

        case BOOKS_IS_LOADING:
            return { ...state, isLoading: action.isLoading };

        case BOOKS_FETCH_DATA_SUCCESS:
            return { ...state, books: action.books };

        case BOOKS_SET_CURRENT_PAGE:
            return { ...state, currentPage: action.pageNumber };

        default:
            return state;
    }
};

export default booksReducer;
