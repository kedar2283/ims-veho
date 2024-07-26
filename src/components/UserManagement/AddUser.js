import React, { useState } from 'react';
import './UserManagement.css';

const AddUser = () => {
    const [user, setUser] = useState({
        name: '',
        email: '',
        role: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUser({ ...user, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('User added:', user);
    };

    return (
        <div className="add-user-container">
            <h2>Add User</h2>
            <form className="add-user-form" onSubmit={handleSubmit}>
                <div className="user-field">
                    <label>Name</label>
                    <input
                        type="text"
                        name="name"
                        value={user.name}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="user-field">
                    <label>Email</label>
                    <input
                        type="email"
                        name="email"
                        value={user.email}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="user-field">
                    <label>Role</label>
                    <input
                        type="text"
                        name="role"
                        value={user.role}
                        onChange={handleChange}
                        required
                    />
                </div>
                <button type="submit" className="user-button">
                    Add User
                </button>
            </form>
        </div>
    );
};

export default AddUser;
