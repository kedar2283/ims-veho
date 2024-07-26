import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import eyeIcon from '../../assets/eye.png';
import hideIcon from '../../assets/hide.png';
import './Auth.css';

const SignupPage = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [formData, setFormData] = useState({
        phone: '',
        email: '',
        password: '',
        confirmPassword: ''
    });
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const toggleConfirmPasswordVisibility = () => {
        setShowConfirmPassword(!showConfirmPassword);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const validatePassword = (password) => {
        const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
        return regex.test(password);
    };

    const handleSignup = (e) => {
        e.preventDefault();
        const { password, confirmPassword } = formData;
        if (!validatePassword(password)) {
            setError('Password must contain at least 8 characters, including uppercase, lowercase, number, and special character.');
        } else if (password !== confirmPassword) {
            setError('Passwords do not match.');
        } else {
            setError('');
            navigate('/dashboard');
        }
    };

    return (
        <div className="auth-container">
            <div className="auth-box">
                <h2>Sign Up</h2>
                <form className="auth-form" onSubmit={handleSignup}>
                    <div className="auth-field">
                        <label>Phone</label>
                        <input
                            type="text"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="auth-field">
                        <label>Email</label>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="auth-field password-container">
                        <label>Password</label>
                        <input
                            type={showPassword ? 'text' : 'password'}
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
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
                    <div className="auth-field password-container">
                        <label>Confirm Password</label>
                        <input
                            type={showConfirmPassword ? 'text' : 'password'}
                            name="confirmPassword"
                            value={formData.confirmPassword}
                            onChange={handleChange}
                            required
                        />
                        <button
                            type="button"
                            className="toggle-password"
                            onClick={toggleConfirmPasswordVisibility}
                        >
                            <img
                                src={showConfirmPassword ? hideIcon : eyeIcon}
                                alt="Toggle visibility"
                                className="eye-icon"
                            />
                        </button>
                    </div>
                    {error && <p style={{ color: 'red' }}>{error}</p>}
                    <div className="auth-button-container">
                        <button type="submit" className="auth-button">
                            Sign Up
                        </button>
                    </div>
                </form>
                <p>
                    Already have an account? <a href="/login">Login</a>
                </p>
            </div>
        </div>
    );
};

export default SignupPage;
