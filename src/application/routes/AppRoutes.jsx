import { Route, Routes } from "react-router-dom"
import { HomePage } from "../pages/HomePage"
import { NewTransfer } from "../pages/NewTransfer"

export const AppRoutes = () => {
  return (
    <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/transferencias/nueva-transferencia" element={<NewTransfer />} />
    </Routes>
  )
}
