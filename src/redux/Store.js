import { configureStore } from "@reduxjs/toolkit";
import CommonSlice from "./slices/CommonSlice";

const store = configureStore({
  reducer: {
    common: CommonSlice,
  },
});

export default store;
