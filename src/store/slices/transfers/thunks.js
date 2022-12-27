import { setTransfer } from "./transferSlice";

export const selectTransfer = (data) => {
    return async(dispatch) => {
        dispatch(setTransfer(data));
    }
}