import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ErrorState {
    errors: Record<string, string>;
}

const initialState: ErrorState = {
    errors: {},
};

const errorSlice = createSlice({
    name: "error",
    initialState,
    reducers: {
        setErrors: (state, action: PayloadAction<Record<string, string>>) => {
            state.errors = action.payload;
        },
        clearErrors: (state) => {
            state.errors = {};
        },
    },
});

export const { setErrors, clearErrors } = errorSlice.actions;
export default errorSlice.reducer;