import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './InventoryManagement.css';

const InventoryList = () => {
    const [inventories, setInventories] = useState([]);
    const navigate = useNavigate();

    const handleEditInventory = (inventory) => {
        navigate('/update-stock', { state: { inventory } });
    };

    const handleAddInventory = () => {
        const newInventory = { id: inventories.length + 1, name: `Inventory ${inventories.length + 1}`, quantity: 0 };
        setInventories([...inventories, newInventory]);
        navigate('/add-inventory');
    };

    return (
        <div className="inventory-list-container">
            <h2>Inventory List</h2>
            <div className="inventory-list-box">
                {inventories.length === 0 ? (
                    <p>No inventories available.</p>
                ) : (
                    <ul>
                        {inventories.map(inventory => (
                            <li key={inventory.id} className="inventory-item">
                                <span>{inventory.name}</span>
                                <span>{inventory.quantity > 0 ? `Quantity: ${inventory.quantity}` : 'Empty'}</span>
                                <button className="stock-button" onClick={() => handleEditInventory(inventory)}>Edit</button>
                            </li>
                        ))}
                    </ul>
                )}
            </div>
            <button className="add-inventory-button" onClick={handleAddInventory}>
                Add Inventory
            </button>
        </div>
    );
};

export default InventoryList;
