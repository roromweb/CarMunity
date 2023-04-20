import { SET_MODE } from '../types';

/* eslint-disable default-param-last */
export default function modeThemeReducer(state = 'dark', action) {
  const { type, payload } = action;
  switch (type) {
    case SET_MODE:
      // return payload;
      return (state === 'light' ? 'dark' : 'light');
      // return 'dark';
    default:
      return state;
  }
}
