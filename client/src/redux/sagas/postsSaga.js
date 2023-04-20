// eslint-disable-next-line no-unused-vars
import {
  call, put, takeEvery, takeLatest, throttle, delay,
} from 'redux-saga/effects';
import axios from 'axios';
import { FETCH_POSTS } from '../types';
import { setPosts } from '../actions/postsActions';

const getPostsWithAxios = ({ modelId, input }) => axios.post(`/api/posts/search/${modelId}`, { input });

// worker Saga: will be fired on USER_FETCH_REQUESTED actions
function* postsSagaWorker(action) {
  try {
    yield delay(1000);
    const res = yield call(getPostsWithAxios, action.payload);
    yield put(setPosts(res.data));
  } catch (e) {
    yield put({ type: 'USER_FETCH_FAILED', message: e.message });
  }
}

/*
  Starts fetchUser on each dispatched `USER_FETCH_REQUESTED` action.
  Allows concurrent fetches of user.
*/
function* postsSagaWatcher() {
  yield takeLatest(FETCH_POSTS, postsSagaWorker);
}

export default postsSagaWatcher;
