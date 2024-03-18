import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  status: "not-authenticated", // 'checking', 'not-authenticated', 'authenticated'
  displayName: null,
  email: null,
  phoneNumber: null,
  photoURL: null,
  uid: null,
  errorMessage: null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState: { ...initialState },
  reducers: {
    login: (state, action) => {
      const { displayName, email, phoneNumber, photoURL, uid } = action.payload;

      state.status = "authenticated";
      state.displayName = displayName;
      state.email = email;
      state.phoneNumber = phoneNumber;
      state.photoURL = photoURL;
      state.uid = uid;
    },
    logout: (state, action) => {
      state.status = "not-authenticated";
      state.displayName = null;
      state.email = null;
      state.phoneNumber = null;
      state.photoURL = null;
      state.uid = null;

      if (action.payload?.errorMessage)
        state.errorMessage = action.payload.errorMessage;
      else state.errorMessage = null;
    },
    checkingCredentials: (state) => {
      state.status = "checking";
    },
  },
});

export const { login, signUp, logout } = authSlice.actions;
