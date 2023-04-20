import axios from 'axios';
import { SET_ARTICLES } from '../types';

export const setArticles = (payload) => ({ type: SET_ARTICLES, payload });

export const fetchArticles = (modelId) => async (dispatch) => {
  await axios(`/api/articles/${modelId}`)
    .then((res) => dispatch(setArticles(res.data)))
    .catch(console.log);
};
