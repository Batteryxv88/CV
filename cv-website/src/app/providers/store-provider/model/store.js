import { configureStore } from '@reduxjs/toolkit';
import { themeReducer } from '../../../entities/theme';

export const store = configureStore({
  reducer: {
    theme: themeReducer,
  },
});
