import { SET_RESPONSE_TEXT, SIGNUP_HAS_ERRORED, SIGNUP_IS_LOADING } from './actionTypes';

export const signupHasErrored = (bool) => {
    return {
        type: SIGNUP_HAS_ERRORED,
        hasErrored: bool,
    };
};
export const signupIsLoading = (bool) => {
    return {
        type: SIGNUP_IS_LOADING,
        isLoading: bool,
    };
};
export const setResponseText = (text) => {
    return {
        type: SET_RESPONSE_TEXT,
        text,
    };
};

export const signupFetchPostData = (url, signupFormData) => (dispatch) => {
    dispatch(signupIsLoading(true));

    fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(signupFormData),
    })
        .then((response) => {
            if (!response.ok) throw Error(response.statusText);

            dispatch(signupIsLoading(false));
            dispatch(setResponseText('Вы успешно зарегистрировались.'));
            return response;
        })
        .catch(() => {
            dispatch(signupHasErrored(true));
            dispatch(setResponseText('Во время загрузки произошла ошибка. Обновите страницу.'));
        });
};
