import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

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
            providesTags: [{type: 'Movie', id: 'LIST'}]
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
            query: ({username, password}) => {
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
            invalidatesTags: ['Account']
        })
    })
})

export const { useGetAllMoviesQuery, useGetAccountQuery, useLogoutMutation, useLoginMutation } = movieApi
