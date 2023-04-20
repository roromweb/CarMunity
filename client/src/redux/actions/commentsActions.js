/* eslint-disable import/prefer-default-export */
import axios from 'axios';
import { SET_COMMENTS, ADD_COMMENT } from '../types';
import { addPostCounter } from './postsActions';

export const setComments = (random) => ({
  type: SET_COMMENTS,
  payload: random,
});

export const addComments = (post) => ({
  type: ADD_COMMENT,
  payload: post,
});

export const addCommentsAsync = (e, postId, inputs) => async (dispatch) => {
  e.preventDefault();
  try {
    const res = await axios.post(`/api/posts/comments/${postId}`, inputs);
    dispatch(addComments(res.data));
    dispatch(addPostCounter(postId));
  } catch (error) {
    console.log(error);
  }
};

export const fetchCommentsAsync = (postId) => async (dispatch) => {
  try {
    const res = await axios.get(`/api/posts/comments/${postId}`);
    dispatch(setComments(res.data));
  } catch (error) {
    console.log(error);
  }
};
