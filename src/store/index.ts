import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import numberSlice from './modules/number/numberSlice';

export const store = configureStore({
  reducer: {
    number: numberSlice,
  },
  middleware: getDefaultMiddleWare => getDefaultMiddleWare().concat(logger),
  devTools: process.env.NODE_ENV !== 'production',
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
