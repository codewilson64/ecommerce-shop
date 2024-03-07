import { configureStore } from "@reduxjs/toolkit";
import ecommmerceReducer from "./ecommerceSlice";

export const store = configureStore({
  reducer: {
    ecommerce: ecommmerceReducer,
  },
});
