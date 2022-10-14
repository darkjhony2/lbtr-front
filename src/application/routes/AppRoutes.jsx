import { Route, Routes } from "react-router-dom"
import { HomePage, NewTransfer, AccountBalance, MovementDetails, NewCurrencyBuy, NewCurrencySell } from "../pages"

export const AppRoutes = () => {
  return (
    <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/operacion/transferencias/nueva-transferencia" element={<NewTransfer />} />
        <Route path="/consultasbcrp/saldos" element={<AccountBalance />} />
        <Route path="/consultasbcrp/saldos/detalles-movimientos" element={<MovementDetails />} />
        <Route path="/operacion/compra-moneda/nueva-compra" element={<NewCurrencyBuy/>} />
        <Route path="/operacion/venta-moneda/nueva-venta" element={<NewCurrencySell/>} />
    </Routes>
  )
}
