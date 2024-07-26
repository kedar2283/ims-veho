import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from './components/Dashboard/Dashboard';
import ProductList from './components/ProductManagement/ProductList';
import AddProduct from './components/ProductManagement/AddProduct';
import EditProduct from './components/ProductManagement/EditProduct';
import InventoryList from './components/InventoryManagement/InventoryList';
import AddInventory from './components/InventoryManagement/AddInventory';
import UpdateStock from './components/InventoryManagement/UpdateStock';
import SupplierList from './components/SupplierManagement/SupplierList';
import AddSupplier from './components/SupplierManagement/AddSupplier';
import EditSupplier from './components/SupplierManagement/EditSupplier';
import OrderList from './components/OrderManagement/OrderList';
import UpdateOrder from './components/OrderManagement/UpdateOrder';
import AddOrder from './components/OrderManagement/AddOrder';
import SalesReport from './components/Reports/SalesReport';
import InventoryReport from './components/Reports/InventoryReport';
import UserList from './components/UserManagement/UserList';
import AddUser from './components/UserManagement/AddUser';
import UpdateUser from './components/UserManagement/UpdateUser'
import GeneralSettings from './components/Settings/GeneralSettings';
import NotificationSettings from './components/Settings/NotificationSettings';
import Login from './components/Auth/Login';
import Signup from './components/Auth/Signup';
import ViewProfile from './components/Profile/ViewProfile';
import './App.css';

function App() {
    return (
        <Router>
            <div className="app">
                <Routes>
                    <Route path="/Home" element={<Dashboard />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/signup" element={<Signup />} />
                    <Route path="/products" element={<ProductList />} />
                    <Route path="/products/add" element={<AddProduct />} />
                    <Route path="/products/edit/:id" element={<EditProduct />} />
                    <Route path="/inventory" element={<InventoryList />} />
                    <Route path="/add-inventory" element={<AddInventory />} />
                    <Route path="/inventory/update" element={<UpdateStock />} />
                    <Route path="/suppliers" element={<SupplierList />} />
                    <Route path="/suppliers/add" element={<AddSupplier />} />
                    <Route path="/suppliers/edit/:id" element={<EditSupplier />} />
                    <Route path="/orders" element={<OrderList />} />
                    <Route path="/orders/update-order" element={<UpdateOrder />} />
                    <Route path="/orders/add" element={<AddOrder />} />
                    <Route path="/reports/sales" element={<SalesReport />} />
                    <Route path="/reports/inventory" element={<InventoryReport />} />
                    <Route path="/users" element={<UserList />} />
                    <Route path="/users/add" element={<AddUser />} />
                    <Route path="/users/update-user" element={<UpdateUser />} />
                    <Route path="/settings/general" element={<GeneralSettings />} />
                    <Route path="/settings/notifications" element={<NotificationSettings />} />
                    <Route path="/profile" element={<ViewProfile />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
