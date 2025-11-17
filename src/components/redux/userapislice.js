import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const apiSlice = createApi({
    reducerPath: 'api', // required

    tagTypes: ["user"],
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3000/api/' }),
    endpoints: (builder) => ({

        register: builder.mutation({
            query: (formdata) => ({
                url: '/registeruser',
                method: 'POST',
                body: formdata,
            }),
            invalidatesTags: ["user"]
        }),


        login: builder.mutation({
            query: (formdata) => ({
                url: "login",
                method: "post",
                body: formdata,
            }),
            invalidatesTags: ["user"]
        }),

        logout:builder.mutation({
            query: () => ({
                url: "/logout",
                method: "post"
            }),
            invalidatesTags: ["user"]
        })

    }),
});

export const { useRegisterMutation, useLoginMutation, useLogoutMutation } = apiSlice;
