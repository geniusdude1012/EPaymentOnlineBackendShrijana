import React, { useState } from 'react';
import './Admin.css';

const Admin = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [remember, setRemember] = useState(false);

    const handleUsernameChange = (e) => {
        setUsername(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleRememberChange = (e) => {
        setRemember(e.target.checked);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // alert(Logging in as: ${username});
    };

    return (
        <div className="admin-container">
            <form className="admin-form" onSubmit={handleSubmit}>
                <h2>ADMIN</h2>
                <label htmlFor="username">Username</label>
                <input
                    type="text"
                    id="username"
                    value={username}
                    onChange={handleUsernameChange}
                    placeholder="Enter username"
                />
                <label htmlFor="password">Password</label>
                <input
                    type="password"
                    id="password"
                    value={password}
                    onChange={handlePasswordChange}
                    placeholder="Enter password"
                />
                <div className="remember-container">
                    <input
                        type="checkbox"
                        id="remember"
                        checked={remember}
                        onChange={handleRememberChange}
                    />
                    <label htmlFor="remember">Remember password</label>
                </div>
                <button type="submit">Login</button>
            </form>
        </div>
    );
};

export default Admin