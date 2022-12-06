import { createSlice } from "@reduxjs/toolkit";

export const bankSlice = createSlice({
    name: 'bank',
    initialState: {
        banks: []
    },
    reducers: {
        setBanks: (state, action) => {
            state.banks = action.payload;
        }
    }
});

export default bankSlice.reducer
export const { setBanks } = bankSlice.actions;