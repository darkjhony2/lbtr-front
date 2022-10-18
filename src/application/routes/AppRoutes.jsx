import { Route, Routes } from "react-router-dom"
import {
  HomePage, NewTransfer, AccountBalance, MovementDetails, NewCurrencyBuy, NewCurrencySell,
  CurrencyConsults, NewDeposit, OvernightConsult, NewIntraday, IntradayConsult, NewIntradayRepo,
  IntradayRepoConsult, NewOvernightRepo, OvernightRepoConsult
}
  from "../pages"

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/operacion/transferencias/nueva-transferencia" element={<NewTransfer />} />
      <Route path="/consultasbcrp/saldos" element={<AccountBalance />} />
      <Route path="/consultasbcrp/saldos/detalles-movimientos" element={<MovementDetails />} />
      <Route path="/operacion/compra-moneda/nueva-compra" element={<NewCurrencyBuy />} />
      <Route path="/operacion/venta-moneda/nueva-venta" element={<NewCurrencySell />} />
      <Route path="/operacion/compra-moneda/consulta" element={<CurrencyConsults />} />
      <Route path="/operacion/deposito-overnight/nuevo-deposito" element={<NewDeposit />} />
      <Route path="/operacion/deposito-overnight/consulta-overnight" element={<OvernightConsult />} />
      <Route path="/operacion/facilidad-intradia/nueva-intradia" element={<NewIntraday />} />
      <Route path="/operacion/facilidad-intradia/consulta-intradia" element={<IntradayConsult />} />
      <Route path="/operacion/repo-intradia/nueva-repo" element={<NewIntradayRepo />} />
      <Route path="/operacion/repo-intradia/consulta-repo" element={<IntradayRepoConsult />} />
      <Route path="/operacion/repo-overnight/nueva-repo" element={<NewOvernightRepo />} />
      <Route path="/operacion/repo-overnight/consulta-repo" element={<OvernightRepoConsult />} />
    </Routes>
  )
}
