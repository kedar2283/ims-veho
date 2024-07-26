import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './OrderManagement.css';

const UpdateOrder = () => {
    const location = useLocation();
    const { order } = location.state;
    const [updatedOrder, setUpdatedOrder] = useState(order);
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUpdatedOrder({ ...updatedOrder, [name]: value });
    };

    const handleImageChange = (e) => {
        setUpdatedOrder({ ...updatedOrder, productImage: e.target.files[0] });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        
        console.log(updatedOrder);
        navigate('/order-list');
    };

    return (
        <div className="update-order-container">
            <h2>Update Order</h2>
            <form className="update-order-form" onSubmit={handleSubmit}>
                <div className="form-field">
                    <label>Product Name</label>
                    <input type="text" name="productName" value={updatedOrder.productName} onChange={handleChange} required />
                </div>
                <div className="form-field">
                    <label>Manufacturer Company</label>
                    <input type="text" name="manfCompany" value={updatedOrder.manfCompany} onChange={handleChange} required />
                </div>
                <div className="form-field">
                    <label>Manufacture Date</label>
                    <input type="date" name="manfDate" value={updatedOrder.manfDate} onChange={handleChange} required />
                </div>
                <div className="form-field">
                    <label>Expiry Date</label>
                    <input type="date" name="expDate" value={updatedOrder.expDate} onChange={handleChange} required />
                </div>
                <div className="form-field">
                    <label>MRP</label>
                    <input type="number" name="mrp" value={updatedOrder.mrp} onChange={handleChange} required />
                </div>
                <div className="form-field">
                    <label>Product Image</label>
                    <input type="file" name="productImage" onChange={handleImageChange} />
                </div>
                <button type="submit" className="stock-button">Update Order</button>
            </form>
        </div>
    );
};

export default UpdateOrder;
