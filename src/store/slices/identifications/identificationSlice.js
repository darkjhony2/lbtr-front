import { createSlice } from "@reduxjs/toolkit";

export const identificationSlice = createSlice({
    name: 'identification',
    initialState: {
        identificationTypes: []
    },
    reducers: {
        setIdentificationTypes: (state, action) => {
            state.identificationTypes = action.payload;
        }
    }
});

export default identificationSlice.reducer
export const { setIdentificationTypes } = identificationSlice.actions;