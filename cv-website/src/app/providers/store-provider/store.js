import { configureStore } from '@reduxjs/toolkit';
import themeReducer from '../../features/theme-switcher/model/themeSlice';
import languageReducer from '../../features/language-switcher/model/languageSlice';

export const store = configureStore({
  reducer: {
    theme: themeReducer,
    language: languageReducer,
  },
});
