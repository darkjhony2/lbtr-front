import { setIdentificationTypes } from "./identificationSlice";

export const getIdentificationTypes = (data) => {
    return async(dispatch) => {
        dispatch(setIdentificationTypes(data));
    }
}