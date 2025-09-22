import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  conference: {
    conference_amount_type: null,
    conference_amount: null,
    selectedRegistration: {},
  },
  events: null,
  userdetails: null,
  activeStepNumber: 1,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setAuthData: (state, action) => {
      state.conference = {
        ...state.conference,
        ...action.payload.conference,
      };
      // state.events = action.payload.events;
      // state.userdetails = action.payload.userdetails;
      if (action.payload.events !== undefined) {
        state.events = action.payload.events;
      }

      if (action.payload.userdetails !== undefined) {
        state.userdetails = action.payload.userdetails;
      }
    },

    setActiveStepNumber: (state, action) => {
      state.activeStepNumber = action.payload;
    },
    clearAuthData: (state) => {
      state.conference = initialState?.conference;
      state.events = initialState?.events;
      state.userdetails = initialState?.userdetails;
      state.activeStepNumber = initialState?.activeStepNumber;
    },
  },
});

export const { setAuthData, clearAuthData, setActiveStepNumber } =
  authSlice.actions;
export default authSlice.reducer;
