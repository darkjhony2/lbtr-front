import { createSlice } from '@reduxjs/toolkit';

export const authSlice = createSlice({
    name: 'auth',
    initialState: {
        logged: false
    },
    reducers: {
        login: (state) => {
            state.logged = true;
        },
        logout: (state) => {
            state.logged = false;
        },
    }
});

export default authSlice.reducer
export const { login, logout } = authSlice.actions;