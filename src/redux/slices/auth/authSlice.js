import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  conference: null,
  events: null,
  userdetails: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setAuthData: (state, action) => {
      state.conference = action.payload.conference;
      state.events = action.payload.events;
      state.userdetails = action.payload.userdetails;
    },
    clearAuthData: (state) => {
      state.conference = null;
      state.events = null;
      state.userdetails = null;
    },
  },
});

export const { setAuthData, clearAuthData } = authSlice.actions;
export default authSlice.reducer;
