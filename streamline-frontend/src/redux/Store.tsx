import { configureStore } from "@reduxjs/toolkit";
import errorReducer from "./ErrorSlice"; // Import reducers here

const store = configureStore({
    reducer: {
        errors: errorReducer, // Add more reducers here if needed
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;