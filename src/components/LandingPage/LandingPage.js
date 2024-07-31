// src/components/LandingPage.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import logoImage from '../../assets/logo.png';
import backgroundImg from '../../assets/imsb.jpg';
import './LandingPage.css';

const LandingPage = () => {
    const navigate = useNavigate();

    const handleLogin = () => {
        navigate('/login');
    };

    const handleSignup = () => {
        navigate('/signup');
    };

    return (
        <div 
            className="landing-page-container" 
            style={{ backgroundImage: `url(${backgroundImg})` }}
        >
            <div className="left-container">
                <button className="auth-button" onClick={handleLogin}>Login</button>
                <button className="auth-button" onClick={handleSignup}>Signup</button>
            </div>
            <div className="right-container">
                <img src={logoImage} alt="Logo" className="logo-image" />
            </div>
        </div>
    );
};

export default LandingPage;
