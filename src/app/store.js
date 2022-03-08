import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import userReducer from '../features/userSlice';
import loadingReducer from '../features/loadingSlice';

const store = configureStore({
  reducer: {
    user: userReducer,
    loading: loadingReducer,
  },
  middleware: [thunk],
});

export default store;
