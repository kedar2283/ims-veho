import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './SupplierManagement.css';

const AddSupplier = () => {
    const [supplier, setSupplier] = useState({
        name: '',
        companyName: '',
        companyId: '',
        address: '',
        phoneNumber: '',
    });
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setSupplier({ ...supplier, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        
        console.log(supplier);
        navigate('/supplier-list');
    };

    return (
        <div className="add-supplier-container">
            <h2>Add Supplier</h2>
            <form className="add-supplier-form" onSubmit={handleSubmit}>
                <div className="form-field">
                    <label>Name</label>
                    <input type="text" name="name" value={supplier.name} onChange={handleChange} required />
                </div>
                <div className="form-field">
                    <label>Company Name</label>
                    <input type="text" name="companyName" value={supplier.companyName} onChange={handleChange} required />
                </div>
                <div className="form-field">
                    <label>Company ID</label>
                    <input type="text" name="companyId" value={supplier.companyId} onChange={handleChange} required />
                </div>
                <div className="form-field">
                    <label>Address</label>
                    <input type="text" name="address" value={supplier.address} onChange={handleChange} required />
                </div>
                <div className="form-field">
                    <label>Phone Number</label>
                    <input type="text" name="phoneNumber" value={supplier.phoneNumber} onChange={handleChange} required />
                </div>
                <button type="submit" className="stock-button">Add Supplier</button>
            </form>
        </div>
    );
};

export default AddSupplier;
