import { AUTHORS_FETCH_DATA_SUCCESS, AUTHORS_HAS_ERRORED, AUTHORS_IS_LOADING } from './actionTypes';

export const authorsHasErrored = (bool) => {
    return {
        type: AUTHORS_HAS_ERRORED,
        hasErrored: bool,
    };
};
export const authorsIsLoading = (bool) => {
    return {
        type: AUTHORS_IS_LOADING,
        isLoading: bool,
    };
};
export const authorsFetchDataSuccess = (authors) => {
    return {
        type: AUTHORS_FETCH_DATA_SUCCESS,
        authors,
    };
};

export const authorsFetchData = (url) => (dispatch) => {
    dispatch(authorsIsLoading(true));

    fetch(url)
        .then((response) => {
            if (!response.ok) {
                throw Error(response.statusText);
            }

            dispatch(authorsIsLoading(false));

            return response;
        })
        .then((response) => response.json())
        .then((authors) => dispatch(authorsFetchDataSuccess(authors)))
        .catch(() => dispatch(authorsHasErrored(true)));
};
