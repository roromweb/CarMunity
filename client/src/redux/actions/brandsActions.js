import axios from 'axios';
import { SET_BRANDS } from '../types';

export const setBrands = (payload) => ({ type: SET_BRANDS, payload });

export const fetchBrands = () => (dispatch) => {
  axios('/api/brands/all')
    .then((res) => dispatch(setBrands(res.data)))
    .catch(console.log);
};
