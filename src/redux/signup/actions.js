import {
    SET_RESPONSE_TEXT,
    SIGNUP_HAS_ERRORED,
    SIGNUP_IS_LOADING,
    SIGNUP_UPDATE_EMAIL_TEXT,
    SIGNUP_UPDATE_FIRSTNAME_TEXT,
    SIGNUP_UPDATE_LASTNAME_TEXT,
    SIGNUP_UPDATE_LOGIN_TEXT,
    SIGNUP_UPDATE_PASSWORD_TEXT
} from "./actionTypes";

export const updateFirstnameText = text => ({ type: SIGNUP_UPDATE_FIRSTNAME_TEXT, text });
export const updateLastnameText = text => ({ type: SIGNUP_UPDATE_LASTNAME_TEXT, text });
export const updateLoginText = text => ({ type: SIGNUP_UPDATE_LOGIN_TEXT, text });
export const updateEmailText = text => ({ type: SIGNUP_UPDATE_EMAIL_TEXT, text });
export const updatePasswordText = text => ({ type: SIGNUP_UPDATE_PASSWORD_TEXT, text });
export const signupHasErrored = bool => ({ type: SIGNUP_HAS_ERRORED, hasErrored: bool });
export const signupIsLoading = bool => ({ type: SIGNUP_IS_LOADING, isLoading: bool });
export const setResponseText = text => ({ type: SET_RESPONSE_TEXT, text });


export const signupFetchPostData = (url, signupFormData) => dispatch => {
    dispatch(signupIsLoading(true));

    fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(signupFormData)
    })
    .then(response => {
        if (!response.ok) 
            throw Error(response.statusText);
        
        dispatch(signupIsLoading(false));
        dispatch(setResponseText('Вы успешно зарегистрировались.'))
        return response;
    })
    .then( () => {
            dispatch(updateFirstnameText(''));
            dispatch(updateLastnameText(''));
            dispatch(updateLoginText(''));
            dispatch(updateEmailText(''));
            dispatch(updatePasswordText(''));   
        }
    )
    .catch( () => {
        dispatch(signupHasErrored(true));
        dispatch(setResponseText('Во время загрузки произошла ошибка. Обновите страницу.'));
    } );
}