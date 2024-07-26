import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './OrderManagement.css';

const AddOrder = () => {
    const [order, setOrder] = useState({
        productName: '',
        manfCompany: '',
        manfDate: '',
        expDate: '',
        mrp: '',
        productImage: null,
    });
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setOrder({ ...order, [name]: value });
    };

    const handleImageChange = (e) => {
        setOrder({ ...order, productImage: e.target.files[0] });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        
        console.log(order);
        navigate('/order-list');
    };

    return (
        <div className="add-order-container">
            <h2>Add Order</h2>
            <form className="add-order-form" onSubmit={handleSubmit}>
                <div className="form-field">
                    <label>Product Name</label>
                    <input type="text" name="productName" value={order.productName} onChange={handleChange} required />
                </div>
                <div className="form-field">
                    <label>Manufacturer Company</label>
                    <input type="text" name="manfCompany" value={order.manfCompany} onChange={handleChange} required />
                </div>
                <div className="form-field">
                    <label>Manufacture Date</label>
                    <input type="date" name="manfDate" value={order.manfDate} onChange={handleChange} required />
                </div>
                <div className="form-field">
                    <label>Expiry Date</label>
                    <input type="date" name="expDate" value={order.expDate} onChange={handleChange} required />
                </div>
                <div className="form-field">
                    <label>MRP</label>
                    <input type="number" name="mrp" value={order.mrp} onChange={handleChange} required />
                </div>
                <div className="form-field">
                    <label>Product Image</label>
                    <input type="file" name="productImage" onChange={handleImageChange} required />
                </div>
                <button type="submit" className="stock-button">Add Order</button>
            </form>
        </div>
    );
};

export default AddOrder;
