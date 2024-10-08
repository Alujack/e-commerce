import { apiSlice } from '../services/apiSlice';

interface Users {
  id: string;
  first_name: string;
  last_name: string;
  email: string;
  phone_number: string;
  role: string;
  image: string;
}

interface SocialAuthArgs {
  provider: string;
  state: string;
  code: string;
}

interface CreateUserResponse {
  success: boolean;
  users: Users;
}

interface UpdateUserArgs {
  id: string;
  first_name?: string;
  last_name?: string;
  email?: string;
  phone_number?: string;
  image?: File; // If you're uploading a new image
}

const authApiSlice = apiSlice.injectEndpoints({
  endpoints: builder => ({
    retrieveUser: builder.query<Users, void>({
      query: () => '/users/me/',
    }),
    socialAuthenticate: builder.mutation<CreateUserResponse, SocialAuthArgs>({
      query: ({ provider, state, code }) => ({
        url: `/o/${provider}/?state=${encodeURIComponent(state)}&code=${encodeURIComponent(code)}`,
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/x-www-form-urlencoded',
        },
      }),
    }),
    login: builder.mutation({
      query: ({ email, password }) => ({
        url: '/jwt/create/',
        method: 'POST',
        body: { email, password },
      }),
      onQueryStarted: async (arg, { queryFulfilled, dispatch }) => {
        try {
          const { data } = await queryFulfilled;
          const token = data.access;  // Assuming 'access' is the key for the token in the response
          localStorage.setItem('token', token);  // Store the token in localStorage or sessionStorage
          // Optionally: dispatch some action to set token in the state if using Redux
        } catch (err) {
          console.error('Login failed', err);
        }
      },
    }),
    register: builder.mutation({
      query: ({ first_name, last_name, email, password, re_password }) => ({
        url: '/users/',
        method: 'POST',
        body: { first_name, last_name, email, password, re_password },
      }),
    }),
    verify: builder.mutation({
      query: () => {
        const token = localStorage.getItem('token');  // Retrieve the token from localStorage or sessionStorage
        return {
          url: '/jwt/verify/',
          method: 'POST',
          body: { token },  // Include the token in the request body
        };
      },
    }),
    logout: builder.mutation({
      query: () => ({
        url: '/logout/',
        method: 'POST',
      }),
    }),
    activation: builder.mutation({
      query: ({ uid, token }) => ({
        url: '/users/activation/',
        method: 'POST',
        body: { uid, token },
      }),
    }),
    resetPassword: builder.mutation({
      query: email => ({
        url: '/users/reset_password/',
        method: 'POST',
        body: { email },
      }),
    }),
    resetPasswordConfirm: builder.mutation({
      query: ({ uid, token, new_password, re_new_password }) => ({
        url: '/users/reset_password_confirm/',
        method: 'POST',
        body: { uid, token, new_password, re_new_password },
      }),
    }),

    updateUser: builder.mutation<void, UpdateUserArgs>({
      query: ({ id, ...rest }) => {
        const formData = new FormData();

        // Add non-image fields
        Object.entries(rest).forEach(([key, value]) => {
          if (value !== undefined) {
            if (key === 'image' && value instanceof File) {
              formData.append(key, value);
            } else {
              formData.append(key, value.toString());
            }
          }
        });
        return {
          url: `/update/${id}/`,
          method: 'PUT',
          body: formData,
          headers: {
            // 'Content-Type': 'multipart/form-data' is not needed here; FormData sets it automatically
          },
        };
      },
    }),

  }),
});

export const {
  useRetrieveUserQuery,
  useSocialAuthenticateMutation,
  useLoginMutation,
  useRegisterMutation,
  useVerifyMutation,
  useLogoutMutation,
  useActivationMutation,
  useResetPasswordMutation,
  useResetPasswordConfirmMutation,
  useUpdateUserMutation, // Export the new hook
} = authApiSlice;
