import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './SupplierManagement.css';

const SupplierList = () => {
    const [suppliers, setSuppliers] = useState([]);
    const navigate = useNavigate();

    const handleEditSupplier = (supplier) => {
        navigate('/suppliers/edit/:id', { state: { supplier } });
    };

    const handleAddSupplier = () => {
        navigate('/suppliers/add');
    };

    return (
        <div className="supplier-list-container">
            <h2>Supplier List</h2>
            <div className="supplier-list-box">
                {suppliers.length === 0 ? (
                    <p>No suppliers available.</p>
                ) : (
                    <ul>
                        {suppliers.map(supplier => (
                            <li key={supplier.id} className="supplier-item">
                                <span>{supplier.name}</span>
                                <span>{supplier.companyName}</span>
                                <span>{supplier.phoneNumber}</span>
                                <button className="stock-button" onClick={() => handleEditSupplier(supplier)}>Edit</button>
                            </li>
                        ))}
                    </ul>
                )}
            </div>
            <button className="add-supplier-button" onClick={handleAddSupplier}>
                Add Supplier
            </button>
        </div>
    );
};

export default SupplierList;
