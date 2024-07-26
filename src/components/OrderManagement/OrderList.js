import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './OrderManagement.css';

const OrderList = () => {
    const [orders] = useState([]);
    const navigate = useNavigate();

    const handleEditOrder = (order) => {
        navigate('/orders/update-order', { state: { order } });
    };

    const handleAddOrder = () => {
        navigate('/orders/add');
    };

    return (
        <div className="order-list-container">
            <h2>Order List</h2>
            <div className="order-list-box">
                {orders.length === 0 ? (
                    <p>No orders available.</p>
                ) : (
                    <ul>
                        {orders.map(order => (
                            <li key={order.id} className="order-item">
                                <span>{order.productName}</span>
                                <span>{order.manfCompany}</span>
                                <span>{order.mrp}</span>
                                <button className="stock-button" onClick={() => handleEditOrder(order)}>Edit</button>
                            </li>
                        ))}
                    </ul>
                )}
            </div>
            <button className="add-order-button" onClick={handleAddOrder}>
                Add Order
            </button>
        </div>
    );
};

export default OrderList;
