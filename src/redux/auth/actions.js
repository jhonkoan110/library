import { AUTH_DATA } from "./actionTypes";

export const setAuthData = (token = null, user = null) => ({ type: AUTH_DATA, payload: {token, user} });