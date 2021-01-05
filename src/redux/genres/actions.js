import { GENRES_FETCH_DATA_SUCCESS, GENRES_HAS_ERRORED, GENRES_IS_LOADING } from './actionTypes';

export const genresHasErrored = (bool) => {
    return {
        type: GENRES_HAS_ERRORED,
        hasErrored: bool,
    };
};
export const genresIsLoading = (bool) => {
    return {
        type: GENRES_IS_LOADING,
        isLoading: bool,
    };
};
export const genresFetchDataSuccess = (genres) => {
    return {
        type: GENRES_FETCH_DATA_SUCCESS,
        genres,
    };
};

export const genresFetchData = (url) => (dispatch) => {
    dispatch(genresIsLoading(true));

    fetch(url)
        .then((response) => {
            if (!response.ok) {
                throw Error(response.statusText);
            }

            dispatch(genresIsLoading(false));

            return response;
        })
        .then((response) => response.json())
        .then((genres) => dispatch(genresFetchDataSuccess(genres)))
        .catch(() => dispatch(genresHasErrored(true)));
};
