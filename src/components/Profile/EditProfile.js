import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import './Profile.css';

const EditProfile = ({ userProfile }) => {
    const [profile, setProfile] = useState({
        name: '',
        email: '',
        phone: '',
        address: '',
        profilePicture: null,
        bio: '',
        interests: '',
        linkedIn: '',
        twitter: '',
        github: '',
    });
    const [passwordChange, setPasswordChange] = useState(false);
    const [savedMessage, setSavedMessage] = useState(false);
    const history = useHistory();

    useEffect(() => {
        if (userProfile) {
            setProfile(userProfile);
        }
    }, [userProfile]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setProfile({ ...profile, [name]: value });
    };

    const handleProfilePictureChange = (e) => {
        setProfile({ ...profile, profilePicture: URL.createObjectURL(e.target.files[0]) });
    };

    const handleSave = () => {
   
        console.log('Updated Profile:', profile);
     
        setSavedMessage(true);
        setTimeout(() => {
            setSavedMessage(false);
        }, 3000);
    };

    const handleChangePassword = () => {
      
        setPasswordChange(!passwordChange); 
    };

    const handlePasswordSubmit = (e) => {
        e.preventDefault();
       
        console.log('Password change request:', profile.email); 
     
        setPasswordChange(false);
        alert('Password change functionality is under development.'); 
    };

    return (
        <div className="edit-profile-container">
            <h2>Edit Profile</h2>
            {savedMessage && <p className="success-message">Profile Successfully Saved!</p>}
            <form className="edit-profile-form">
                <div className="profile-field">
                    <label>Name</label>
                    <input
                        type="text"
                        name="name"
                        value={profile.name}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="profile-field">
                    <label>Email</label>
                    <input
                        type="email"
                        name="email"
                        value={profile.email}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="profile-field">
                    <label>Phone</label>
                    <input
                        type="text"
                        name="phone"
                        value={profile.phone}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="profile-field">
                    <label>Address</label>
                    <input
                        type="text"
                        name="address"
                        value={profile.address}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="profile-field">
                    <label>Bio</label>
                    <textarea
                        name="bio"
                        value={profile.bio}
                        onChange={handleChange}
                    ></textarea>
                </div>
                <div className="profile-field">
                    <label>Interests</label>
                    <input
                        type="text"
                        name="interests"
                        value={profile.interests}
                        onChange={handleChange}
                    />
                    <small>Separate interests with commas</small>
                </div>
                <div className="profile-field">
                    <label>LinkedIn</label>
                    <input
                        type="text"
                        name="linkedIn"
                        value={profile.linkedIn}
                        onChange={handleChange}
                    />
                </div>
                <div className="profile-field">
                    <label>Twitter</label>
                    <input
                        type="text"
                        name="twitter"
                        value={profile.twitter}
                        onChange={handleChange}
                    />
                </div>
                <div className="profile-field">
                    <label>GitHub</label>
                    <input
                        type="text"
                        name="github"
                        value={profile.github}
                        onChange={handleChange}
                    />
                </div>
                <div className="profile-field">
                    <label>Profile Picture</label>
                    <input type="file" onChange={handleProfilePictureChange} />
                    {profile.profilePicture && (
                        <img src={profile.profilePicture} alt="Profile" className="profile-picture-preview" />
                    )}
                </div>
                <button type="button" onClick={handleSave}>
                    Save
                </button>
                <button type="button" onClick={handleChangePassword}>
                    Change Password
                </button>
                {passwordChange && (
                    <form onSubmit={handlePasswordSubmit}>
                        <div className="profile-field">
                            <label>New Password</label>
                            <input
                                type="password"
                                name="newPassword"
                                value={profile.newPassword}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="profile-field">
                            <label>Confirm New Password</label>
                            <input
                                type="password"
                                name="confirmNewPassword"
                                value={profile.confirmNewPassword}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <button type="submit">Update Password</button>
                    </form>
                )}
            </form>
        </div>
    );
};

export default EditProfile;
