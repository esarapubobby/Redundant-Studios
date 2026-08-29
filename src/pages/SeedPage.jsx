import React, { useState } from 'react';
import { seedDatabase } from '../utils/seed';

const SeedPage = () => {
  const [status, setStatus] = useState('idle'); // idle, loading, success, error

  const handleSeed = async () => {
    setStatus('loading');
    const result = await seedDatabase();
    if (result.success) {
      setStatus('success');
    } else {
      setStatus('error');
    }
  };

  return (
    <div style={{
      height: '100vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#0a0a0a',
      color: '#fff',
      textAlign: 'center',
      padding: '20px'
    }}>
      <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem', textTransform: 'uppercase' }}>Database Seeding</h1>
      <p style={{ color: '#ccc', marginBottom: '2rem', maxWidth: '600px' }}>
        This page will populate your Firestore database with the default studio content and the first game (DeadZone).
      </p>

      {status === 'idle' && (
        <button
          onClick={handleSeed}
          style={{
            padding: '1rem 2rem',
            backgroundColor: '#cc0000',
            color: '#fff',
            border: 'none',
            borderRadius: '4px',
            fontWeight: 'bold',
            textTransform: 'uppercase',
            cursor: 'pointer',
            fontSize: '1.1rem'
          }}
        >
          Initialize Site Data
        </button>
      )}

      {status === 'loading' && <p>Seeding data, please wait...</p>}
      {status === 'success' && (
        <div style={{ color: '#00ff00', fontWeight: 'bold' }}>
          <p>✅ Data seeded successfully!</p>
          <p style={{ marginTop: '1rem', color: '#ccc' }}>You can now go back to the <a href="/" style={{ color: '#fff', textDecoration: 'underline' }}>Home Page</a></p>
        </div>
      )}
      {status === 'error' && (
        <div style={{ color: '#ff4444', fontWeight: 'bold' }}>
          <p>❌ An error occurred while seeding data.</p>
          <p style={{ marginTop: '1rem', color: '#ccc' }}>Please check your Firestore rules and try again.</p>
        </div>
      )}
    </div>
  );
};

export default SeedPage;
