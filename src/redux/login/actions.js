import { setAuthData } from "../auth/actions";
import { LOGIN_HAS_ERRORED, LOGIN_IS_LOADING, LOGIN_UPDATE_PASSWORD_TEXT, LOGIN_UPDATE_USERNAME_TEXT } from "./actionTypes";

export const updateUsernameText = text => ({ type: LOGIN_UPDATE_USERNAME_TEXT, text });
export const updatePasswordText = text => ({ type: LOGIN_UPDATE_PASSWORD_TEXT, text });
export const loginHasErrored = bool => ({ type: LOGIN_HAS_ERRORED, hasErrored: bool });
export const loginIsLoading = bool => ({ type: LOGIN_IS_LOADING, isLoading: bool });

export const loginFetchPostData = (url, loginFormData) => dispatch => {
    dispatch(loginIsLoading(true));

    fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(loginFormData)
    })
    .then(response => {
        if (!response.ok) 
            throw Error(response.statusText);
        
        dispatch(loginIsLoading(false));
        return response;
    })
    .then(response => response.json())  
    .then(data => {
        localStorage.setItem('library-token', data.token);
        localStorage.setItem('library-user', data.login);
        dispatch(setAuthData(data.token, data.login));
        dispatch(updateUsernameText(''));
        dispatch(updatePasswordText(''));
    })
    .catch( () => dispatch(loginHasErrored(true)));


}