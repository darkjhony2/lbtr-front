import { createSlice } from "@reduxjs/toolkit";

export const transferSlice = createSlice({
    name: 'transfers',
    initialState: {
        transfer: {
            settlementConceptCode: '',
            destinationBankCode: '',
            currencyCode: '',
            amount: 0,
            applyTaxes: false,
            observations: ''
        }
    },
    reducers: {
        setTransfer: (state, action) => {
            state.transfer = action.payload
        }
    }
});

export default transferSlice.reducer
export const { setTransfer } = transferSlice.actions;