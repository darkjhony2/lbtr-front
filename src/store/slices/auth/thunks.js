import {login, logout} from './authSlice'

export const singIn = (data) => {
    return async(dispatch) => {
        dispatch(login(data));
    }
}

export const loginOut = () => {
    return async(dispatch) => {
        dispatch(logout());
    }
} 