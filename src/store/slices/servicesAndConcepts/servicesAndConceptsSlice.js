import { createSlice } from "@reduxjs/toolkit";

export const servicesAndConceptsSlice = createSlice({
    name: 'servicesAndConcepts',
    initialState: {
        services: [],
        concepts: []
    },
    reducers: {
        setServices: (state, action) => {
            state.services = action.payload;
        },
        setConcepts: (state, action) => {
            state.concepts = action.payload;
        }
    }
});

export default servicesAndConceptsSlice.reducer
export const { setServices, setConcepts } = servicesAndConceptsSlice.actions;