import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import postReducer from './posts/postSlice';
import authReducer from './auth/authSlice';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['posts', 'auth'],
};

const postPersistedReducer = persistReducer(persistConfig, postReducer);
const authPersistedReducer = persistReducer(persistConfig, authReducer);

export const store = configureStore({
  reducer: {
    posts: postPersistedReducer,
    auth: authPersistedReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ['persist/PERSIST', 'persist/REHYDRATE'],
        ignoredPaths: ['register', 'rehydrate'],
      },
    }),
});

export const persistor = persistStore(store);
