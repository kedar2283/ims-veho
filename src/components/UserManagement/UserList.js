import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './UserManagement.css';

const UserList = () => {
    const [users] = useState([]); 
    const navigate = useNavigate();

    const handleEditUser = (user) => {
        navigate('/users/update-user', { state: { user } });
    };

    const handleAddUser = () => {
        navigate('/users/add');
    };

    return (
        <div className="user-list-container">
            <h2>User List</h2>
            <div className="user-list-box">
                {users.length === 0 ? (
                    <p>No users available.</p>
                ) : (
                    <ul>
                        {users.map(user => (
                            <li key={user.id} className="user-item">
                                <span>{user.name}</span>
                                <span>{user.email}</span>
                                <span>{user.role}</span>
                                <button className="user-button" onClick={() => handleEditUser(user)}>Edit</button>
                            </li>
                        ))}
                    </ul>
                )}
            </div>
            <button className="add-user-button" onClick={handleAddUser}>
                Add User
            </button>
        </div>
    );
};

export default UserList;
