import React, { useState } from 'react';
import './ProductManagement.css';
import { useNavigate } from 'react-router-dom';

const AddProduct = ({ addProduct }) => {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');
    const navigate = useNavigate();

    const handleAdd = () => {
        const newProduct = { id: Date.now(), name, description, price };
        addProduct(newProduct);
        setName('');
        setDescription('');
        setPrice('');
        navigate('/productmanagement');
    };

    return (
        <div className="add-product-form">
            <h2>Add Product</h2>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Product Name" />
            <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Description" />
            <input type="number" value={price} onChange={(e) => setPrice(e.target.value)} placeholder="Price" />
            <button onClick={handleAdd}>Add Product</button>
        </div>
    );
};

export default AddProduct;
