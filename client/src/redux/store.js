import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import articlesReducer from './reducers/articlesReducer';
import authReducer from './reducers/authReducer';
import brandsReducer from './reducers/brandsReducer';
import commentsReducer from './reducers/commentsReducer';
import modelsReducer from './reducers/modelsReducer';
import modelsListReducer from './reducers/modelsListReducer';
import postsReducer from './reducers/postsReducer';
import usersReducer from './reducers/usersReducer';
import postsSagaWatcher from './sagas/postsSaga';
import modeThemeReducer from './reducers/modeThemeReducer';
import photosReducer from './reducers/photosReducer';

const sagaMiddleware = createSagaMiddleware();

export default configureStore({
  reducer: {
    auth: authReducer, // слайс хранит текущего авторизованного юзера всегда
    brands: brandsReducer, // слайс хранит все бренды всегда
    models: modelsReducer, // слайс хранит все модели всегда
    modelsList: modelsListReducer, // слайс хранит модели выбранного бренда
    posts: postsReducer, // Слайс хранит посты только открытого сообщества, с приэнклюженными лайками и каунтером кол-ва комментариев
    comments: commentsReducer, // Слайс хранит комментарии только открытого поста
    users: usersReducer, // Слайс хранит всех юзеров, которые подписаны на открытое сообщество
    photos: photosReducer, // Слайс хранит фотографии только открытого сообщества
    articles: articlesReducer, // Слайс хранит статьи только открытого сообщества
    mode: modeThemeReducer, // Слайс хранит статьи только открытого сообщества
  },
  middleware: (mid) => [...mid(), sagaMiddleware],
});

sagaMiddleware.run(postsSagaWatcher);
