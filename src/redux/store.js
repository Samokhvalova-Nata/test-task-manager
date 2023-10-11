import { configureStore } from '@reduxjs/toolkit';
import {
	persistStore,
	persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { tasksReducer } from './tasksSlice';
import { filtersReducer } from './filterSlice';

const persistConfig = {
    key: 'tasks',
    storage,
    whitelist: ['taskList']
};

const persistedTaskReducer = persistReducer(persistConfig, tasksReducer);

export const store = configureStore({
    reducer: {
        tasks: persistedTaskReducer,
        filters: filtersReducer,
    },
    middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({
			serializableCheck: {
				ignoredActions: [
					FLUSH,
					REHYDRATE,
					PAUSE,
					PERSIST,
					PURGE,
					REGISTER,
				],
			},
		}),
});

export const persistor = persistStore(store);
