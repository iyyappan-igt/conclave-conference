import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  conference: {
    conference_amount_type: null,
    conference_amount: null,
    selectedRegistration:{}
  },
  events: [],
  userdetails: null,
  selectedRegistration:{}
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setAuthData: (state, action) => {
      state.conference = action.payload.conference;
      state.events = action.payload.events;
      state.userdetails = action.payload.userdetails;
      state.selectedRegistration = action.payload.selectedRegistration
    },
    clearAuthData: (state) => {
      state.conference = null;
      state.events = null;
      state.userdetails = null;
    },
  },
});

export const { setAuthData, clearAuthData} = authSlice.actions;
export default authSlice.reducer;