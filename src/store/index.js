import { configureStore } from '@reduxjs/toolkit';
// Middleware use for logging redux events in dev mode
import logger from 'redux-logger';
// Enhancer enabling dispatching multiple actions at once
import { reduxBatch } from '@manaflair/redux-batch';

import combinedReducers from './reducers';

const store = configureStore({
  reducer: combinedReducers,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      immutableCheck: false,
      serializableCheck: false,
    }).concat(logger),
  devTools: process.env.NODE_ENV !== 'production',
  enhancers: [reduxBatch],
});
export default store;
