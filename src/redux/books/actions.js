import {
    BOOKS_FETCH_DATA_SUCCESS,
    BOOKS_HAS_ERRORED,
    BOOKS_IS_LOADING,
    BOOKS_SET_CURRENT_PAGE,
} from './actionTypes';

export const booksHasErrored = (bool) => {
    return {
        type: BOOKS_HAS_ERRORED,
        hasErrored: bool,
    };
};
export const booksIsLoading = (bool) => {
    return {
        type: BOOKS_IS_LOADING,
        isLoading: bool,
    };
};
export const booksFetchDataSuccess = (books) => {
    return {
        type: BOOKS_FETCH_DATA_SUCCESS,
        books,
    };
};
export const booksSetCurrentPage = (pageNumber) => {
    return {
        type: BOOKS_SET_CURRENT_PAGE,
        pageNumber,
    };
};

export const booksFetchData = (url) => (dispatch) => {
    dispatch(booksIsLoading(true));

    fetch(url)
        .then((response) => {
            if (!response.ok) {
                throw Error(response.statusText);
            }

            dispatch(booksIsLoading(false));

            return response;
        })
        .then((response) => response.json())
        .then((books) => dispatch(booksFetchDataSuccess(books)))
        .catch(() => dispatch(booksHasErrored(true)));
};
