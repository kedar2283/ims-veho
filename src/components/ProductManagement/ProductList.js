import React, { useState } from 'react';
import './ProductManagement.css';
import imsLogo from '../../assets/ims.jpg';
import profileImage from '../../assets/profile.png';
import { useNavigate } from 'react-router-dom';

const ProductManagement = () => {
    const [products, setProducts] = useState([]);
    const navigate = useNavigate();

    const handleDashboardRedirect = () => {
        navigate('/dashboard');
    };

    const handleAddProductRedirect = () => {
        navigate('/products/add');
    };

    const handleEditProductRedirect = (product) => {
        navigate('/products/edit/:id', { state: { product } });
    };

    return (
        <div className="product-management-container">
            <header className="product-management-header">
                <img src={imsLogo} alt="IMS Logo" className="ims-logo" onClick={handleDashboardRedirect} />
                <img src={profileImage} alt="Profile" className="profile-image" />
            </header>
            <h2>Product List</h2>
            <div className="product-list-box">
                {products.length === 0 ? (
                    <p>No products available. Please add a product.</p>
                ) : (
                    <ul>
                        {products.map(product => (
                            <li key={product.id} className="product-item">
                                <span>{product.name}</span>
                                <span>{product.description}</span>
                                <span>{product.price}</span>
                                <button onClick={() => handleEditProductRedirect(product)}>Edit</button>
                            </li>
                        ))}
                    </ul>
                )}
            </div>
            <button className="add-product-button" onClick={handleAddProductRedirect}>
                Add Product
            </button>
        </div>
    );
};

export default ProductManagement;
