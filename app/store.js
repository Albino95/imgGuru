// store.js
import { configureStore } from '@reduxjs/toolkit';
import thunkMiddleware from 'redux-thunk';
import imageReducer from './reducers/imageReducer';

const store = configureStore({
  reducer: {
    images: imageReducer,
  },
  middleware: [thunkMiddleware],
});

export default store;
