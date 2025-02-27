import { configureStore } from "@reduxjs/toolkit";
import CommonSlice from "./slices/commonSlice";

const store = configureStore({
  reducer: {
    common: CommonSlice,
  },
});

export default store;
