import { configureStore } from '@reduxjs/toolkit'
import { movieApi } from './moviesApiSlice'
import { setupListeners } from '@reduxjs/toolkit/dist/query'

export const store = configureStore({
    reducer: {
        [movieApi.reducerPath]: movieApi.reducer,
    },
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat(movieApi.middleware),
});

setupListeners(store.dispatch);