import { Route, Routes } from "react-router-dom"
import Dashboard from "../../Pages/Dashboard"
import Inventory from "../../Pages/Inventory"
import Orders from "../../Pages/Orders"
import Customers from "../../Pages/Customer"

function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Dashboard/>}/>
            <Route path="/inventory" element={<Inventory/>}/>
            <Route path="/orders" element={<Orders/>}/>
            <Route path="/customer" element={<Customers/>}/>
        </Routes>
    )
}
export default AppRoutes