import React, { useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase';
import { useNavigate } from 'react-router-dom';

const AdminLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError('');
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate('/admin');
    } catch (err) {
      setError('Invalid email or password');
    }
  };

  return (
    <div style={{
      height: '100vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#0a0a0a',
      color: '#fff'
    }}>
      <form onSubmit={handleLogin} style={{
        backgroundColor: '#1a1a1a',
        padding: '2rem',
        borderRadius: '8px',
        border: '1px solid #333',
        width: '100%',
        maxWidth: '400px',
        display: 'flex',
        flexDirection: 'column',
        gap: '1rem'
      }}>
        <h2 style={{ textAlign: 'center', textTransform: 'uppercase', color: '#fff', marginBottom: '1rem' }}>Admin Login</h2>
        {error && <p style={{ color: '#ff0000', textAlign: 'center' }}>{error}</p>}
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={{
            padding: '0.8rem',
            backgroundColor: '#0a0a0a',
            border: '1px solid #333',
            borderRadius: '4px',
            color: '#fff'
          }}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={{
            padding: '0.8rem',
            backgroundColor: '#0a0a0a',
            border: '1px solid #333',
            borderRadius: '4px',
            color: '#fff'
          }}
          required
        />
        <button
          type="submit"
          style={{
            padding: '0.8rem',
            backgroundColor: '#cc0000',
            color: '#fff',
            border: 'none',
            borderRadius: '4px',
            fontWeight: 'bold',
            textTransform: 'uppercase',
            cursor: 'pointer'
          }}
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default AdminLogin;
