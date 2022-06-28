import { configureStore } from '@reduxjs/toolkit';
import themeReducer from '../features/themeSlice';
import { apiSlice } from '../features/apiSlice';

export const store = configureStore({
  reducer: {
    theme: themeReducer,

  },

});
