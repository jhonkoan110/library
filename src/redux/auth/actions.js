import { AUTH_DATA, LOGIN_HAS_ERRORED, LOGIN_IS_LOADING } from './actionTypes';

export const setAuthData = (token = null, user = null) => {
    if (token === null && user === null) {
        localStorage.clear();
    }
    return {
        type: AUTH_DATA,
        payload: { token, user },
    };
};

export const loginHasErrored = (bool) => {
    return {
        type: LOGIN_HAS_ERRORED,
        hasErrored: bool,
    };
};
export const loginIsLoading = (bool) => {
    return {
        type: LOGIN_IS_LOADING,
        isLoading: bool,
    };
};

export const loginFetchPostData = (url, loginFormData) => (dispatch) => {
    dispatch(loginIsLoading(true));

    fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(loginFormData),
    })
        .then((response) => {
            if (!response.ok) throw Error(response.statusText);

            dispatch(loginIsLoading(false));
            return response;
        })
        .then((response) => response.json())
        .then((data) => {
            localStorage.setItem('library-token', data.token);
            localStorage.setItem('library-user', data.login);
            dispatch(setAuthData(data.token, data.login));
        })
        .catch(() => dispatch(loginHasErrored(true)));
};
