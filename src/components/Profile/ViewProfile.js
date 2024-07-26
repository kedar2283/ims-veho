import React, { useState } from 'react';
import './Profile.css';

const ViewProfile = ({ profile, onSavePassword }) => {
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [passwordChanged, setPasswordChanged] = useState(false);
    const [profilePicture, setProfilePicture] = useState(null);

    const handleChange = (e) => {
        const { name, value } = e.target;
        if (name === 'password') {
            setPassword(value);
        } else if (name === 'confirmPassword') {
            setConfirmPassword(value);
        }
    };

    const handleSavePassword = () => {
        onSavePassword(password); 
        setPasswordChanged(true);
        setTimeout(() => {
            setPasswordChanged(false);
        }, 3000);
    };

    const handleProfilePictureChange = (e) => {
        if (e.target.files.length > 0) {
            const reader = new FileReader();
            reader.onload = () => {
                setProfilePicture(reader.result);
            };
            reader.readAsDataURL(e.target.files[0]);
        }
    };

    profile = profile || {}; 

    return (
        <div className="view-profile-container">
            <h2>View Profile</h2>
            <form className="view-profile-form">
               
                <div className="profile-field">
                    <label>Name</label>
                    <input type="text" name="name" value={profile.name} readOnly />
                </div>
                <div className="profile-field">
                    <label>Email</label>
                    <input type="email" name="email" value={profile.email} readOnly />
                </div>
                <div className="profile-field">
                    <label>Phone</label>
                    <input type="text" name="phone" value={profile.phone} readOnly />
                </div>
                <div className="profile-field">
                    <label>Address</label>
                    <input type="text" name="address" value={profile.address} readOnly />
                </div>
                <div className="profile-field">
                    <label>Bio</label>
                    <textarea name="bio" value={profile.bio} readOnly></textarea>
                </div>
                <div className="profile-field">
                    <label>Profile Picture</label>
                    <input type="file" onChange={handleProfilePictureChange} />
                    {profilePicture && (
                        <img src={profilePicture} alt="Profile" className="profile-picture-preview" />
                    )}
                    {!profilePicture && profile.profilePicture && (
                        <img src={profile.profilePicture} alt="Profile" className="profile-picture-preview" />
                    )}
                </div>
              
                <div className="profile-field">
                    <label>Change Password</label>
                    <input type="password" name="password" value={password} onChange={handleChange} />
                </div>
                <div className="profile-field">
                    <label>Confirm Password</label>
                    <input type="password" name="confirmPassword" value={confirmPassword} onChange={handleChange} />
                </div>
                <button type="button" onClick={handleSavePassword}>
                    Save
                </button>
                {passwordChanged && <p className="success-message">Password Successfully Changed!</p>}
            </form>
        </div>
    );
};

export default ViewProfile;
