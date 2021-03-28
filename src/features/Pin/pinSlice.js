import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  result: null,
};

const name = "Pins";

export const pinSlice = createSlice({
  name,
  initialState,
  reducers: {
    fetchPin: (state, action) => {
      return state;
    },
    fetchPinSuccess: (state, action) => {
      state.result = action.payload.photos;
    },
    fetchPinFaild: (state, error) => {
      console.log(error);
    },
    fetchPinSearch: (state, action) => {
      return state;
    },
    fetchPinSearchSuccess: (state, action) => {
      state.result = action.payload.photos;
    },
  },
});

export const {
  fetchPin,
  fetchPinSuccess,
  fetchPinFaild,
  fetchPinSearch,
  fetchPinSearchSuccess,
  fetchPinSearchFail,
} = pinSlice.actions;

export default pinSlice.reducer;
