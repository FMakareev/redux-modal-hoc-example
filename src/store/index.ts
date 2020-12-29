import { configureStore } from "@reduxjs/toolkit";
import { modalsStateSlice } from "./modals/reducer";

export const store = configureStore({
  reducer: {
    modals: modalsStateSlice.reducer
  }
});
