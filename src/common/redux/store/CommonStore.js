import { configureStore } from "@reduxjs/toolkit";
import activeTabReducer from "../slice/CommonSlice";

const store = configureStore({
  reducer: {
    activeTab: activeTabReducer,
  },
});

export default store;
