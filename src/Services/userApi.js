import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { env } from "../env";
import { getLocalStorage } from "../utils/function/localStorage";

export const userApi = createApi({
  reducerPath: "userApi",
  baseQuery: fetchBaseQuery({
    baseUrl: env.BASE_URL,
    // mode: "cors",
    prepareHeaders: (headers) => {
      headers.set("authorization", getLocalStorage("testingToken"));
      return headers;
    },
  }),
  tagTypes: ["User", "adminUser", "Validate"], // automatic-data fetching
  endpoints: (builder) => ({
    getLoginUser: builder.query({
      query: () => "/users/api/get_user",
      providesTags: ["User"], // automatic-data fetching
    }),
    addUser: builder.mutation({
      // user register
      query: (body) => ({
        url: "/users/api/register",
        method: "POST",
        body,
      }),
      invalidatesTags: ["User"], // automatic-data fetching
    }),
    getValidateEmail: builder.query({
      query: (email) => `/users/api/check_email/${email}`,
      providesTags: ["Validate"], // automatic-data fetching
    }),
    addLogin: builder.mutation({
      // user login
      query: (body) => ({
        url: "/users/api/login",
        method: "POST",
        body,
      }),
      invalidatesTags: ["User"], // automatic-data fetching
    }),
    editUser: builder.mutation({
      query: (body) => ({
        url: "/secure/api/update_user_info",
        method: "PUT",
        body,
      }),
      invalidatesTags: ["User"],
    }),
    editImage: builder.mutation({
      query: (body) => ({
        url: "/secure/api/update_profile_pic",
        method: "PUT",
        body,
      }),
      invalidatesTags: ["User"],
    }),
  }),
});

export const {
  useGetLoginUserQuery,
  useGetValidateEmailQuery,
  useAddUserMutation,
  useAddLoginMutation,
  useEditUserMutation,
  useEditImageMutation,
} = userApi;
