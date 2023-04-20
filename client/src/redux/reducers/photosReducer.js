import { SET_PHOTO } from '../types';

/* eslint-disable default-param-last */
export default function photosReducer(state = [], action) {
  const { type, payload } = action;
  switch (type) {
    case SET_PHOTO:
      return payload;
    default:
      return state;
  }
}
