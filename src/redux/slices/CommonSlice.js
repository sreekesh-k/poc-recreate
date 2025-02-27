import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  tabName: "Home",
};

const CommonSlice = createSlice({
  name: "common",
  initialState,
  reducers: {
    setActiveTabAction: (state, action) => {
      state.tabName = action.payload;
    },
  },
});

export const { setActiveTabAction } = CommonSlice.actions;
export default CommonSlice.reducer;
