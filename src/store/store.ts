import { configureStore } from '@reduxjs/toolkit';
import authReducer from '@/features/auth/authSlice';
import taskReducer from '@/features/tasks/taskSlice';
import { baseApi } from '@/services/baseApi';
import { taskApi } from '@/services/taskApi';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const authPersistConfig ={
    key:"auth",
    storage,
};
export const store = configureStore({
    reducer: {
        auth: persistReducer(authPersistConfig, authReducer) as any,
        [baseApi.reducerPath]: baseApi.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(baseApi.middleware),
});
export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;