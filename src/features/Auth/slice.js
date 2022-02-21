import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { MAIN_API_URL } from '@env';

/**
 * Helper for the redundant initial state
 */
const getInitialState = () => ({ user: null, isLoading: false });

/**
 * Creates a login session
 * @note Assumes a Strapi local auhtentication scheme
 */
export const $login = createAsyncThunk(
  'Auth/login',
  async ({ identifier, password }, { rejectWithValue }) => {
    const request = {
      method: 'post',
      url: `${MAIN_API_URL}/auth/local`,
      data: { identifier, password },
    };
    try {
      const payload = await axios(request);
      return payload.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  },
);

// Auth Slice
const Auth = createSlice({
  name: 'Auth',
  initialState: getInitialState(),
  reducers: {
    async $logout() {
      const stateUpdate = getInitialState();
      await AsyncStorage.removeItem('authToken');
      return stateUpdate;
    },
  },
  extraReducers: {
    // Login ($login)
    [$login.fulfilled]: async (state, action) => {
      const stateUpdate = { ...state };
      const { jwt, user } = action.payload;
      // Persist auth token
      await AsyncStorage.setItem('authToken', jwt);
      axios.defaults.headers.common.Authorization = `Bearer ${jwt}`;
      stateUpdate.user = user;
      stateUpdate.isLoading = false;
      return stateUpdate;
    },
    [$login.pending]: (state) => {
      const stateUpdate = { ...state };
      stateUpdate.isLoading = true;
      return stateUpdate;
    },
    [$login.rejected]: (state) => {
      const stateUpdate = { ...state };
      stateUpdate.isLoading = false;
      return stateUpdate;
    },
  },
});

export default Auth.reducer;

// Simple actions
export const { $logout } = Auth.actions;

// Selectors
export const selectAuthUser = (state) => state.Auth.user;
export const selectAuthIsLoading = (state) => state.Auth.isLoading;
