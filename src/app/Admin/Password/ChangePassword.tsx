import React, { useState } from 'react';

const ChangePassword: React.FC = () => {
    const [password, setPassword] = useState<string>('');
    const [confirmPassword, setConfirmPassword] = useState<string>('');
    const [message, setMessage] = useState<string>('');

    const handleChangePassword = () => {
        if (password === confirmPassword) {
            // Here you can implement the logic to change the password
            setMessage('Password changed successfully!');
        } else {
            setMessage('Passwords do not match.');
        }
    };

    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh' }}>
            <h2 style={{ fontWeight: 'bold',marginTop: 20,fontSize: 35, color: '#7a7a7a',  textShadow: '1px 1px 2px #333',  height: '25vh' }}>Change Password</h2>
            <input
                type="password"
                placeholder="New Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                style={{ margin: '5px 0', padding: '18px', border: '2px solid #525252', borderRadius: '5px', width: 250,marginBottom:'10px' }}
            />
            <br />
            <input
                type="password"
                placeholder="Confirm New Password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                style={{ margin: '5px 0', padding: '18px', border: '2px solid #525252', borderRadius: '5px', width: 250,marginBottom:'10px' }}
            />
            <br />
            <button onClick={handleChangePassword} style={{ backgroundColor: '#ffffff', color: '666666', padding: '10px 35px', marginTop: '20px', border: '2px solid #666666',
             borderRadius: '10px', cursor: 'pointer' }}>Change Password</button>
            {message && <p style={{ color: '#3d3d3d', fontWeight: 'bold', marginTop: '10px' }}>{message}</p>}
        </div>
    );
};

export default ChangePassword;
