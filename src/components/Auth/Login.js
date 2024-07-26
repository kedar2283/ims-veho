import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import eyeIcon from '../../assets/eye.png';
import hideIcon from '../../assets/hide.png';
import './Auth.css';

const LoginPage = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const handleLogin = (e) => {
        e.preventDefault();
        if (password === 'expectedPassword') {
            setError('');
            navigate('/dashboard');
        } else {
            setError('Incorrect password.');
        }
    };

    return (
        <div className="auth-container">
            <div className="auth-box">
                <h2>Login</h2>
                <form className="auth-form" onSubmit={handleLogin}>
                    <div className="auth-field">
                        <label>Email or Phone</label>
                        <input type="text" required />
                    </div>
                    <div className="auth-field password-container">
                        <label>Password</label>
                        <input
                            type={showPassword ? 'text' : 'password'}
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                        <button
                            type="button"
                            className="toggle-password"
                            onClick={togglePasswordVisibility}
                        >
                            <img
                                src={showPassword ? hideIcon : eyeIcon}
                                alt="Toggle visibility"
                                className="eye-icon"
                            />
                        </button>
                    </div>
                    {error && <p style={{ color: 'red' }}>{error}</p>}
                    <div className="auth-button-container">
                        <button type="submit" className="auth-button">
                            Login
                        </button>
                    </div>
                </form>
                <p>
                    Don't have an account? <a href="/signup">Sign up</a>
                </p>
            </div>
        </div>
    );
};

export default LoginPage;
