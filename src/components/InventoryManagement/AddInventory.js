import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './InventoryManagement.css';

const AddInventory = () => {
    const [name, setName] = useState('');
    const [quantity, setQuantity] = useState(0);
    const navigate = useNavigate();

    const handleAddInventory = (e) => {
        e.preventDefault();
        
        console.log(`Added ${name} with quantity ${quantity}`);
        navigate('/inventory'); 
    };

    return (
        <div className="update-stock-container">
            <h2>Add New Inventory</h2>
            <form className="update-stock-form" onSubmit={handleAddInventory}>
                <div className="stock-field">
                    <label htmlFor="name">Inventory Name</label>
                    <input
                        type="text"
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>
                <div className="stock-field">
                    <label htmlFor="quantity">Quantity</label>
                    <input
                        type="number"
                        id="quantity"
                        value={quantity}
                        onChange={(e) => setQuantity(e.target.value)}
                    />
                </div>
                <button type="submit" className="stock-button">Add Inventory</button>
            </form>
        </div>
    );
};

export default AddInventory;
