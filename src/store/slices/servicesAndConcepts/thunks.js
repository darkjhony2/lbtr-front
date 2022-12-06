import { setConcepts, setServices } from "./servicesAndConceptsSlice";

export const getServices = (data) => {
    return async(dispatch) => {
        dispatch(setServices(data));
    }
}

export const getConcepts = (data) => {
    return async(dispatch) => {
        dispatch(setConcepts(data));
    }
}