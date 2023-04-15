import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { env } from "../env";
import { getLocalStorage } from "../utils/function/localStorage";

export const bloodApi = createApi({
  reducerPath: "bloodApi",
  baseQuery: fetchBaseQuery({
    baseUrl: env.BASE_URL,
    // mode: "cors",
    prepareHeaders: (headers) => {
      headers.set("authorization", getLocalStorage("testingToken"));
      return headers;
    },
  }),
  tagTypes: ["donor", "admin", "Validate"],
  endpoints: (builder) => ({
    getBloodRequestSendToDonor: builder.query({
      query: () => "/api/donation/getBloodRequestSendToDonor",
      providesTags: ["donor", "admin"],
    }),
    getBloodRequestReceivedFromRequester: builder.query({
      query: () => "/api/donation/getBloodRequestReceivedFromRequester",
      providesTags: ["donor", "admin"],
    }),
    getBloodRequest: builder.query({
      query: () => "/api/request-blood",
      providesTags: ["donor", "admin"],
    }),
    addDonationRequestUpdate: builder.mutation({
      // user register
      query: (body) => ({
        url: `/api/donation/${body._id}`,
        method: "PUT",
        body,
      }),
      invalidatesTags: ["donor", "admin"],
    }),
    editBloodRequest: builder.mutation({
      // user register
      query: (body) => ({
        url: `/api/request-blood/${body._id}`,
        method: "PUT",
        body,
      }),
      invalidatesTags: ["donor", "admin"],
    }),
  }),
});

export const {
  useGetBloodRequestSendToDonorQuery,
  useAddDonationRequestUpdateMutation,
  useGetBloodRequestReceivedFromRequesterQuery,
  useGetBloodRequestQuery,
  useEditBloodRequestMutation,
} = bloodApi;
