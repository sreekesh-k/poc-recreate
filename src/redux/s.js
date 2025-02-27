import { configureStore } from "@reduxjs/toolkit";
import commonSlice from "./slices/c.js";
import authSlice from "./slices/a.js";

const store = configureStore({
  reducer: {
    common: commonSlice,
    auth: authSlice,
  },
});

export default store;
