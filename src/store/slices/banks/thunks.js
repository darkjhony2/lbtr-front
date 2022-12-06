import { setBanks } from "./bankSlice";

export const getBanks = (data) => {
    return async(dispatch) => {
        dispatch(setBanks(data));
    }
}