import { SET_MODELS_LIST } from '../types';

/* eslint-disable default-param-last */
export default function modelsReducer(state = [], action) {
  const { type, payload } = action;
  switch (type) {
    case SET_MODELS_LIST:
      return payload;
    default:
      return state;
  }
}
