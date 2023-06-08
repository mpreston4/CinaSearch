import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const movieApi = createApi({
    reducerPath: 'movies',
    baseQuery: fetchBaseQuery({
        baseUrl: process.env.REACT_APP_API_HOST,
    }),
    endpoints: (builder) => ({
        getAllMovies: builder.query({
            query: (params) => ({
                url: "/api/movies",
                params,
            }),
            providesTags: [{ type: 'Movies', id: 'LIST' }]
        }),
        getAccount: builder.query({
            query: () => ({
                url: '/token',
                credentials: 'include'
            }),
            transformResponse: (response) => response?.account || null,
            providesTags: ['Account'],
        }),
        logout: builder.mutation({
            query: () => ({
                url: 'token',
                method: 'DELETE',
                credentials: 'include',
            }),
            invalidatesTags: ['Account'],
        }),
        login: builder.mutation({
            query: ({ username, password }) => {
                const body = new FormData()
                body.append('username', username);
                body.append('password', password);
                return {
                    url: '/token',
                    method: 'POST',
                    body,
                    credentials: 'include',
                }
            },
            invalidatesTags: ['Account', 'Favorites']
        }),
        signup: builder.mutation({
            query: (body) => {
                return {
                    url: '/api/accounts',
                    method: 'POST',
                    body,
                    credentials: 'include',
                }
            },
            invalidatesTags: ['Account', 'Favorites', 'Accounts']
        }),
        getAllGenres: builder.query({
            query: () => ({
                url: "/api/genres",
            }),
            providesTags: [{ type: 'Genres', id: 'LIST' }]
        }),
        getMovie: builder.query({
            query: (movie_id) => ({
                url: `api/movies/${movie_id}`,
            }),
            providesTags: ["Movie"]
        }),
        getFavorites: builder.query({
            query: () => ({
                url: `/api/favorites`,
                credentials: 'include'
            }),
            providesTags: ['Favorites'],
        }),
        deleteFavorite: builder.mutation({
            query: (id) => ({
                url: `/api/favorites/${id}`,
                method: 'DELETE',
                credentials: 'include'
            }),
            invalidatesTags: ['Favorites']
        }),
        createFavorite: builder.mutation({
            query: (body) => ({
                url: `/api/favorites`,
                method: 'POST',
                body,
                credentials: 'include'
            }),
            invalidatesTags: ['Favorites']
        }),
        updateFavorite: builder.mutation({
            query: (id) => ({
                url: `/api/favorites/${id}`,
                method: "PUT",
                credentials: 'include'
            }),
            invalidatesTags: ['Favorites']
        }),
        getAllAccounts: builder.query({
            query: () => ({
                url: "/api/accounts"
            }),
            providesTags: ["Accounts"]
        })
    })
})

export const {
    useGetAllMoviesQuery,
    useGetAccountQuery,
    useLogoutMutation,
    useLoginMutation,
    useSignupMutation,
    useGetAllGenresQuery,
    useGetMovieQuery,
    useGetFavoritesQuery,
    useDeleteFavoriteMutation,
    useCreateFavoriteMutation,
    useUpdateFavoriteMutation,
    useGetAllAccountsQuery,
} = movieApi
