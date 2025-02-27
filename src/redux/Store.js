import { configureStore } from "@reduxjs/toolkit";
import commonSlice from "./slices/commonSlice";
import authSlice from "./slices/authSlice";

const store = configureStore({
  reducer: {
    common: commonSlice,
    auth: authSlice,
  },
});

export default store;
