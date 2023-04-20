import { SET_BRANDS } from '../types';

/* eslint-disable default-param-last */
export default function brandsReducer(state = [], action) {
  const { type, payload } = action;
  switch (type) {
    case SET_BRANDS:
      return payload;
    default:
      return state;
  }
}
