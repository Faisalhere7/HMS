
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const appointmentApi = createApi({
  reducerPath: 'appointmentApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3000/api/' }),
  tagTypes: ['Appointment'],
  endpoints: (builder) => ({


    //  Approve Appointment
    approveAppointment: builder.mutation({
      query: (id) => ({
        url: `/approve/appointment/${id}`, // 👈 Perfect
        method: "put"
      }),
      invalidatesTags: ['Appointment'],
    }),

  approvedappointments: builder.query({
      query: () => "/approved/appointment",
      providesTags: ["Appointment"], // Changed from invalidatesTags to providesTags
    }),


    rejectappointment: builder.mutation({
      query: (id) => ({
        url: `/reject/appointment/${id}`,
        method:'Delete'
      }),
      invalidatesTags: ['Appointment'],
    })

  }),
});

export const {

  useApproveAppointmentMutation,
useRejectappointmentMutation,
useApprovedappointmentsQuery
} = appointmentApi;
