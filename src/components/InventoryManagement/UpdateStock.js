import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './InventoryManagement.css';

const UpdateInventory = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const { inventory } = location.state;

    const handleUpdateInventory = (e) => {
        e.preventDefault();
        
        console.log(`Updated ${inventory.name} with quantity ${inventory.quantity}`);
        navigate('/inventory'); 
    };

    return (
        <div className="update-stock-container">
            <h2>Update Inventory</h2>
            <form className="update-stock-form" onSubmit={handleUpdateInventory}>
                <div className="stock-field">
                    <label htmlFor="name">Inventory Name</label>
                    <input
                        type="text"
                        id="name"
                        value={inventory.name}
                        readOnly
                    />
                </div>
                <div className="stock-field">
                    <label htmlFor="quantity">Quantity</label>
                    <input
                        type="number"
                        id="quantity"
                        value={inventory.quantity}
                        onChange={(e) => inventory.quantity = e.target.value}
                    />
                </div>
                <button type="submit" className="stock-button">Update Inventory</button>
            </form>
        </div>
    );
};

export default UpdateInventory;
