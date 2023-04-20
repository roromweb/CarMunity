import { SET_USERS, ADD_USER, REMOVE_USER } from '../types';

/* eslint-disable default-param-last */
export default function usersReducer(state = [], action) {
  const { type, payload } = action;
  switch (type) {
    case SET_USERS:
      return payload;
    case ADD_USER:
      return [...state, payload];
    case REMOVE_USER:
      return state.filter((user) => user.user_id !== payload); // payload это айди юзера
    default:
      return state;
  }
}
