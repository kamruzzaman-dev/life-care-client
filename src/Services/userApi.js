import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { env } from "../env";
import { getLocalStorage } from "../utils/function/localStorage";

export const userApi = createApi({
  reducerPath: "userApi",
  baseQuery: fetchBaseQuery({
    baseUrl: env.BASE_URL,
    // mode: "cors",
    prepareHeaders: (headers) => {
      // console.log(getLocalStorage("testingToken"))
      headers.set("authorization", getLocalStorage("testingToken"));
      return headers;
    },
  }),
  tagTypes: ["User", "adminUser", "Validate"], // automatic-data fetching
  endpoints: (builder) => ({
    getLoginUser: builder.query({
      query: () => "/api/get_user",
      providesTags: ["User"], // automatic-data fetching
    }),
    addUser: builder.mutation({
      // user register
      query: (body) => ({
        url: "/public/api/register",
        method: "POST",
        body,
      }),
      invalidatesTags: ["User"], // automatic-data fetching
    }),
    getValidateEmail: builder.query({
      query: (email) => `/public/api/check_email/${email}`,
      providesTags: ["Validate"], // automatic-data fetching
    }),
    addLogin: builder.mutation({
      // user login
      query: (body) => ({
        url: "/public/api/login",
        method: "POST",
        body,
      }),
      invalidatesTags: ["User"], // automatic-data fetching
    }),
  }),
});

export const {
  useGetLoginUserQuery,
  useGetValidateEmailQuery,
  useAddUserMutation,
  useAddLoginMutation,
} = userApi;
