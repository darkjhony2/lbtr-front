import { Route, Routes } from "react-router-dom"
import { HomePage, NewTransfer, AccountBalance, MovementDetails } from "../pages"

export const AppRoutes = () => {
  return (
    <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/transferencias/nueva-transferencia" element={<NewTransfer />} />
        <Route path="/consultasbcrp/saldos" element={<AccountBalance />} />
        <Route path="/consultasbcrp/saldos/detalles-movimientos" element={<MovementDetails />} />
    </Routes>
  )
}
