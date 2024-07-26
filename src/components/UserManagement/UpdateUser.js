import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import './UserManagement.css';

const UpdateUser = () => {
    const location = useLocation();
    const { user } = location.state;
    const [updatedUser, setUpdatedUser] = useState({ ...user });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUpdatedUser({ ...updatedUser, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        
        console.log('User updated:', updatedUser);
    };

    return (
        <div className="update-user-container">
            <h2>Update User</h2>
            <form className="update-user-form" onSubmit={handleSubmit}>
                <div className="user-field">
                    <label>Name</label>
                    <input 
                        type="text" 
                        name="name" 
                        value={updatedUser.name} 
                        onChange={handleChange} 
                        required 
                    />
                </div>
                <div className="user-field">
                    <label>Email</label>
                    <input 
                        type="email" 
                        name="email" 
                        value={updatedUser.email} 
                        onChange={handleChange} 
                        required 
                    />
                </div>
                <div className="user-field">
                    <label>Role</label>
                    <input 
                        type="text" 
                        name="role" 
                        value={updatedUser.role} 
                        onChange={handleChange} 
                        required 
                    />
                </div>
                <div className="user-field">
                    <label>Address</label>
                    <input 
                        type="text" 
                        name="address" 
                        value={updatedUser.address} 
                        onChange={handleChange} 
                        required 
                    />
                </div>
                <div className="user-field">
                    <label>Phone Number</label>
                    <input 
                        type="text" 
                        name="phoneNumber" 
                        value={updatedUser.phoneNumber} 
                        onChange={handleChange} 
                        required 
                    />
                </div>
                <button type="submit" className="user-button">Update User</button>
            </form>
        </div>
    );
};

export default UpdateUser;
