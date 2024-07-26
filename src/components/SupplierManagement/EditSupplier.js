import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './SupplierManagement.css';

const UpdateSupplier = () => {
    const location = useLocation();
    const { supplier } = location.state;
    const [updatedSupplier, setUpdatedSupplier] = useState(supplier);
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUpdatedSupplier({ ...updatedSupplier, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        
        console.log(updatedSupplier);
        navigate('/supplier-list');
    };

    return (
        <div className="update-supplier-container">
            <h2>Update Supplier</h2>
            <form className="update-supplier-form" onSubmit={handleSubmit}>
                <div className="form-field">
                    <label>Name</label>
                    <input type="text" name="name" value={updatedSupplier.name} onChange={handleChange} required />
                </div>
                <div className="form-field">
                    <label>Company Name</label>
                    <input type="text" name="companyName" value={updatedSupplier.companyName} onChange={handleChange} required />
                </div>
                <div className="form-field">
                    <label>Company ID</label>
                    <input type="text" name="companyId" value={updatedSupplier.companyId} onChange={handleChange} required />
                </div>
                <div className="form-field">
                    <label>Address</label>
                    <input type="text" name="address" value={updatedSupplier.address} onChange={handleChange} required />
                </div>
                <div className="form-field">
                    <label>Phone Number</label>
                    <input type="text" name="phoneNumber" value={updatedSupplier.phoneNumber} onChange={handleChange} required />
                </div>
                <button type="submit" className="stock-button">Update Supplier</button>
            </form>
        </div>
    );
};

export default UpdateSupplier;
