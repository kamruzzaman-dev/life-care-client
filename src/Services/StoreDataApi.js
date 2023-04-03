import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { env } from "../env";
import { getLocalStorage } from "../utils/function/localStorage";

export const StoreDataApi = createApi({
  reducerPath: "StoreDataApi",
  baseQuery: fetchBaseQuery({
    baseUrl: env.BASE_URL,
    // mode: 'cors',
    prepareHeaders: (headers) => {
      headers.set("authorization", getLocalStorage("testingToken"));
      return headers;
    },
  }),
  tagTypes: ["userStore"], // automatic-data fetching
  endpoints: (builder) => ({
    // user
    getStoreHistory: builder.query({
      query: () => `/secure/api/get-root-store`,
      providesTags: ["userStore"], // automatic-data fetching
    }),
    addStoreInfo: builder.mutation({
      query: (body) => ({
        url: "/secure/api/add-user-info",
        method: "POST",
        body,
      }),
      invalidatesTags: ["userStore"], // automatic-data fetching
    }),
    addMoreInfo: builder.mutation({
      query: (body) => ({
        url: "/secure/api/get-next-store",
        method: "POST",
        body,
      }),
      invalidatesTags: ["userStore"], // automatic-data fetching
    }),
    addSecondSectors: builder.mutation({
      query: (body) => ({
        url: "/secure/api/get-next-store",
        method: "POST",
        body,
      }),
      invalidatesTags: ["userStore"], // automatic-data fetching
    }),
    addThirdSectors: builder.mutation({
      query: (body) => ({
        url: "/secure/api/get-next-store",
        method: "POST",
        body,
      }),
      invalidatesTags: ["userStore"], // automatic-data fetching
    }),
    getUserStoreHistory: builder.query({
      query: () => `/secure/api/get-user-store-info`,
      providesTags: ["userStore"], // automatic-data fetching
    }),
  }),
});

export const {
  useGetStoreHistoryQuery,
  useGetUserStoreHistoryQuery,
  useAddStoreInfoMutation,
  useAddMoreInfoMutation,
  useAddSecondSectorsMutation,
  useAddThirdSectorsMutation,
} = StoreDataApi;
