import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

export const PrivateRoute = ({ children }) => {

    const { logged } = useSelector(state => state.auth);

    console.log(logged);

    return (logged) ? children : <Navigate to={'/login'} />
}
