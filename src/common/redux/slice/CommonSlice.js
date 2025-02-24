import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  tabName: "Home",
};

const activeTabSlice = createSlice({
  name: "activeTab",
  initialState,
  reducers: {
    setActiveTab: (state, action) => {
      state.tabName = action.payload;
    },
  },
});

export const { setActiveTab } = activeTabSlice.actions;
export default activeTabSlice.reducer;
