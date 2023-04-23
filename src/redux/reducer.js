import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userData: [],
};

const dataSlice = createSlice({
  name: "data",
  initialState: initialState,
  reducers: {
    loadData(state, action) {
      state.userData = action.payload;
    },
  },
});

export const { loadData } = dataSlice.actions;
export default dataSlice.reducer;
