import React, { useState } from 'react';
import './ProductManagement.css';
import { useLocation, useNavigate } from 'react-router-dom';

const EditProduct = ({ editProduct }) => {
    const location = useLocation();
    const navigate = useNavigate();
    const { product } = location.state;
    
    const [name, setName] = useState(product.name);
    const [description, setDescription] = useState(product.description);
    const [price, setPrice] = useState(product.price);

    const handleEdit = () => {
        const updatedProduct = { ...product, name, description, price };
        editProduct(updatedProduct);
        navigate('/productmanagement');
    };

    return (
        <div className="edit-product-form">
            <h2>Edit Product</h2>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Product Name" />
            <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Description" />
            <input type="number" value={price} onChange={(e) => setPrice(e.target.value)} placeholder="Price" />
            <button onClick={handleEdit}>Edit Product</button>
        </div>
    );
};

export default EditProduct;
