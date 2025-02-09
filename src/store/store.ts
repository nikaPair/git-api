import { configureStore } from '@reduxjs/toolkit';
import repositoriesSlice from '../features/repositories/repositoriesSlice';

const store = configureStore({
    reducer: repositoriesSlice,
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

export default store;
