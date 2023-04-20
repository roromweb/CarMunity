/* eslint-disable no-console */
import axios from 'axios';
import { LOGOUT, SET_ABOUT, SET_AUTH, SET_TG, SET_NAME } from '../types';

export const setAuth = (data) => ({ type: SET_AUTH, payload: data });

export const logout = () => (dispatch) => {
  axios('/api/v1/logout')
    .then(() => dispatch({ type: LOGOUT }))
    .catch(console.log);
};

export const auth = () => (dispatch) => {
  axios('/api/v1/auth')
    .then((res) => dispatch(setAuth(res.data)))
    .catch(console.log);
};

export const setAbout = (data) => ({ type: SET_ABOUT, payload: data });
export const setTg = (data) => ({ type: SET_TG, payload: data });
export const setNewName = (data) => ({ type: SET_NAME, payload: data });

export const changeAbout = (about, tg, name) => (dispatch) => {
  axios.put('/api/users/about', { about, tg, name })
    .then(() => {
      dispatch(setAbout(about));
      dispatch(setTg(tg));
      dispatch(setNewName(name));
    })
    .catch(console.log);
};
