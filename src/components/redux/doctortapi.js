
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const doctorApi = createApi({
    reducerPath: 'doctorApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3000/api/' }),
    tagTypes: ['doctor'],
    endpoints: (builder) => ({


        

        registerdoctor: builder.mutation({
            query: (id) => ({
                method: "put",
                url: `/register/doctor/${id}`
            }),
            invalidatesTags: ["doctor"]
        }),

        registereddoctors: builder.query({
            query: () => "/registered/doctor",
            providesTags: ["doctor"]

        }),

        removedoctor: builder.mutation({
            query: (id) => ({
                method: "Delete",
                url: `/removedoctor/${id}`
            }),
            invalidatesTags: ["doctor"]
        })

    }),
});

export const {
    useRemovedoctorMutation, useRegisterdoctorMutation, useRegistereddoctorsQuery
} = doctorApi;
