import axios from 'axios';
import { SET_PHOTO } from '../types';

export const setPhotos = (payload) => ({ type: SET_PHOTO, payload });

export const fetchPhoto = (modelId) => (dispatch) => {
  axios(`/api/v2/models/${modelId}/photos`)
    .then((res) => dispatch(setPhotos(res.data)))
    .catch(console.log);
};
