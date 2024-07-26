import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import profileIcon from '../../assets/profile.png';
import backgroundImg from '../../assets/imsb.jpg';
import logoImg from '../../assets/ims.jpg'; 
import './Dashboard.css';

const Dashboard = () => {
    const [selectedSection, setSelectedSection] = useState('');
    const [profileMenuVisible, setProfileMenuVisible] = useState(false);
    const navigate = useNavigate();

    const handleSectionClick = (section) => {
        setSelectedSection(selectedSection === section ? '' : section);
    };

    const handleLogout = () => {
       
        navigate('/login');
    };

    return (
        <div className="dashboard" style={{ backgroundImage: `url(${backgroundImg})` }}>
            <div className="header">
                <div className="logo">
                    <img className="logo-image" src={logoImg} alt="Logo" /> 
                </div>
                <div className="profile-icon" onClick={() => setProfileMenuVisible(!profileMenuVisible)}>
                    <img src={profileIcon} alt="Profile" />
                    {profileMenuVisible && (
                        <div className="profile-menu">
                            <Link to="/profile">View Profile</Link>
                            <Link to="/about">About</Link>
                            <div onClick={handleLogout}>Logout</div>
                        </div>
                    )}
                </div>
            </div>
            <div className="content">
                <div className="welcome-box">
                    <h1>Welcome to the Management System</h1>
                    <p>Here you can manage products, inventory, suppliers, orders, reports, users, and settings.</p>
                </div>
                <div className="sections">
                    <div onClick={() => handleSectionClick('ProductManagement')} className="section">
                        Product Management
                    </div>
                    {selectedSection === 'ProductManagement' && (
                        <div className="submenu">
                            <Link to="/products">Product List</Link>
                            <Link to="/products/add">Add Product</Link>
                            <Link to="/products/edit/:id">Edit Product</Link>
                        </div>
                    )}
                    <div onClick={() => handleSectionClick('InventoryManagement')} className="section">
                        Inventory Management
                    </div>
                    {selectedSection === 'InventoryManagement' && (
                        <div className="submenu">
                            <Link to="/inventory">Inventory List</Link>
                            <Link to="/inventory/update">Update Stock</Link>
                        </div>
                    )}
                    <div onClick={() => handleSectionClick('SupplierManagement')} className="section">
                        Supplier Management
                    </div>
                    {selectedSection === 'SupplierManagement' && (
                        <div className="submenu">
                            <Link to="/suppliers">Supplier List</Link>
                            <Link to="/suppliers/add">Add Supplier</Link>
                            <Link to="/suppliers/edit/:id">Edit Supplier</Link>
                        </div>
                    )}
                    <div onClick={() => handleSectionClick('OrderManagement')} className="section">
                        Order Management
                    </div>
                    {selectedSection === 'OrderManagement' && (
                        <div className="submenu">
                            <Link to="/orders">Order List</Link>
                            <Link to="/orders/add">Add Order</Link>
                        </div>
                    )}
                    <div onClick={() => handleSectionClick('Reports')} className="section">
                        Reports
                    </div>
                    {selectedSection === 'Reports' && (
                        <div className="submenu">
                            <Link to="/reports/sales">Sales Report</Link>
                            <Link to="/reports/inventory">Inventory Report</Link>
                        </div>
                    )}
                    <div onClick={() => handleSectionClick('UserManagement')} className="section">
                        User Management
                    </div>
                    {selectedSection === 'UserManagement' && (
                        <div className="submenu">
                            <Link to="/users">User List</Link>
                            <Link to="/users/add">Add User</Link>
                        </div>
                    )}
                    <div onClick={() => handleSectionClick('Settings')} className="section">
                        Settings
                    </div>
                    {selectedSection === 'Settings' && (
                        <div className="submenu">
                            <Link to="/settings/general">General Settings</Link>
                            <Link to="/settings/notifications">Notification Settings</Link>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
