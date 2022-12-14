import { Route, Routes } from "react-router-dom"
import { LoginPage } from "../../auth"
import {
  HomePage, NewTransfer, AccountBalance, MovementDetails, NewCurrencyBuy, NewCurrencySell,
  CurrencyConsults, NewDeposit, OvernightConsult, NewIntraday, IntradayConsult, NewIntradayRepo,
  IntradayRepoConsult, NewOvernightRepo, OvernightRepoConsult, BalanceMovements, OperationConsult, Auditory, EstadisticReportByDate, TransactionReport
}
  from "../pages"

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/home" element={<HomePage />} />
      <Route path="/login" element={<LoginPage />} />
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
      <Route path="/local-consults/balance-movements" element={<BalanceMovements />} />
      <Route path="/local-consults/operations-consult" element={<OperationConsult />} />
      <Route path="/local-consults/estadistic-report-by-date" element={<EstadisticReportByDate />} />
      <Route path="/local-consults/auditory" element={<Auditory />} />
      <Route path="/local-consults/transaction-report" element={<TransactionReport />} />
    </Routes>
  )
}
