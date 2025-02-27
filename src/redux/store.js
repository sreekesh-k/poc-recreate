import { configureStore } from "@reduxjs/toolkit";
import commonSlice from "./slices/commonSlice.js";
import authSlice from "./slices/authSlice.js";

const store = configureStore({
  reducer: {
    common: commonSlice,
    auth: authSlice,
  },
});

export default store;
