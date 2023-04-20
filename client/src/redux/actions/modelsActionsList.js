import axios from 'axios';
import { SET_MODELS_LIST } from '../types';

export const setModelsList = (payload) => ({ type: SET_MODELS_LIST, payload });

export const fetchModelsList = (brandId) => (dispatch) => {
  try {
    axios(`/api/models//modelslist/${brandId}`)
      .then((res) => dispatch(setModelsList(res.data)));
  } catch (e) {
    console.log(e);
  }
  // .catch(console.log);
};
