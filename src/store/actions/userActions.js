import {
  LOGIN_USER,
  LOGOUT_USER,
  SIGNUP_USER,
  UPDATE_USER,
  UPDATE_PASSWORD,
} from '../actionTypes';

// Signup User Action
export const registerUser = userData => ({
  type: SIGNUP_USER,
  payload: userData,
});

// Login User Action
export const loginUser = userData => ({
  type: LOGIN_USER,
  payload: userData,
});

export const updateUser = userData => ({
  type: UPDATE_USER,
  payload: userData,
});

export const logoutUser = () => ({
  type: LOGOUT_USER,
});

export const changePassword = password => ({
  type: UPDATE_PASSWORD,
  payload: password,
});
