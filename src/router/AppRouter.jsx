import { Route, Routes } from "react-router-dom"
import { AppRoutes } from "../application/routes/AppRoutes"
import { LoginPage } from "../auth"
import { PrivateRoute } from "./PrivateRoute"
import { PublicRoute } from "./PublicRoute"

export const AppRouter = () => {
    return (
        <Routes>
            <Route path="/login" element={
                <PublicRoute>
                    <LoginPage />
                </PublicRoute>
            } />
            <Route path="/*" element={
                <PrivateRoute>
                    <AppRoutes />
                </PrivateRoute>
            } />
        </Routes>
    )
}
