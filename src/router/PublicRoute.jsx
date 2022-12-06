import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

export const PublicRoute = ({ children }) => {

    const { logged } = useSelector(state => state.auth);

    return !logged || localStorage.getItem("logged") === "false" ? children : <Navigate to={'/home'} />
}
