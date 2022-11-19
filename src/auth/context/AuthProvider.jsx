import React from 'react'
import { types } from '../types/types';
import { AuthContext } from './AuthContext';
import { useDispatch, useSelector } from 'react-redux'

const init = () => {
    const user = JSON.parse(localStorage.getItem('user'));

    return {
        logged: !!user,
        user: user
    }
}

export const AuthProvider = ({ children }) => {

    const { logged } = useSelector(state => state.auth);
    const dispatch = useDispatch();

    const login = (name = '') => {

        const user = { id: 'ABC', name };

        const action = {
            type: types.login,
            payload: {
                id: 'ABC',
                name: name
            }
        }

        localStorage.setItem('user', JSON.stringify(user));

        dispatch(action);
    }

    const logout = () => {
        localStorage.removeItem('user');
        const action = {
            type: types.logout
        }
        dispatch(action)
    }

    return (
        <AuthContext.Provider value={{
            login: login,
            logout: logout
        }}>
            {children}
        </AuthContext.Provider>
    );
}