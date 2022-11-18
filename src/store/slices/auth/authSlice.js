import { createSlice } from '@reduxjs/toolkit';

export const authSlice = createSlice({
    name: 'auth',
    initialState: {
        user: '',
        password: '',
        logged: false
    },
    reducers: {
        login: (state, action) => {
            state.logged = true;
            state.user = action.payload;
        },
        logout: (state, action) => {
            state.logged = false;
        },
    }
});

export default authSlice.reducer