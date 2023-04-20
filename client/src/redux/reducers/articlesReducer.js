import { SET_ARTICLES } from '../types';

/* eslint-disable default-param-last */
export default function articlesReducer(state = [], action) {
  const { type, payload } = action;
  switch (type) {
    case SET_ARTICLES:
      return payload;
    default:
      return state;
  }
}
