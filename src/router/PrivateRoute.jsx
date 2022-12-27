import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

export const PrivateRoute = ({ children }) => {

    const { logged } = useSelector(state => state.auth);

    return logged || localStorage.getItem("logged") === "true" ? children : <Navigate to={'/'} />
}
