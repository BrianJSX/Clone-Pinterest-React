import { createSlice } from '@reduxjs/toolkit';

const initialState =  {
  result: null
};

const name = 'Pins';

export const pinSlice = createSlice({
  name,
  initialState,
  reducers: {
    fetchPin: (state, action) => {
      console.log(action);
    },
    fetchPinSuccess: (state, action) => {
      state.result = action.payload.photos;
    },
    fetchPinFaild: (state, error) => {
      console.log(error);
    },
  },
});

export const { fetchPin, fetchPinSuccess, fetchPinFaild } = pinSlice.actions;


export default pinSlice.reducer