import { Route, Routes } from "react-router-dom"
import { Balance } from "../pages/Balance"
import { HomePage } from "../pages/HomePage"
import { NewTransfer } from "../pages/NewTransfer"

export const AppRoutes = () => {
  return (
    <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/transferencias/nueva-transferencia" element={<NewTransfer />} />
        <Route path="/consultasbcrp/saldos" element={<Balance />} />
    </Routes>
  )
}
