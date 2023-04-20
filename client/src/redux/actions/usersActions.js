/* eslint-disable max-len */
/* eslint-disable import/prefer-default-export */
import axios from 'axios';
import { SET_USERS, ADD_USER, REMOVE_USER } from '../types';

export const setUsers = (users) => ({
  type: SET_USERS,
  payload: users,
});

export const addUser = (user) => ({
  type: ADD_USER,
  payload: user,
});

export const removeUser = (userId) => ({
  type: REMOVE_USER,
  payload: userId,
});

export const fetchUsersAsync = (modelId) => async (dispatch) => {
  try {
    const res = await axios(`/api/users/${modelId}`);
    dispatch(setUsers(res.data));
  } catch (e) {
    console.log(e);
  }
};
// Добавляет и удаляет подписку юзера на сообщество
export const actionUserAsync = (modelId) => async (dispatch) => {
  try {
    const res = await axios.post(`/api/users/${modelId}`);
    if (res.data.id) { // если бэк возвращает объект с user, то добавляем его
      dispatch(addUser(res.data));
    } else {
      dispatch(removeUser(res.data)); // бэк возвращает id
    }
  } catch (e) {
    console.log(e);
  }
};
