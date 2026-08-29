import React, { useState, useEffect } from 'react';
import { db } from '../../firebase';
import { doc, getDoc, updateDoc } from 'firebase/firestore';

const HeroEditor = () => {
  const [hero, setHero] = useState({ headline: '', subheadline: '', backgroundImageUrl: '' });
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    const fetchHero = async () => {
      const docRef = doc(db, 'content', 'main');
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        setHero(docSnap.data().hero || {});
      }
      setLoading(false);
    };
    fetchHero();
  }, []);

  const handleSave = async (e) => {
    e.preventDefault();
    setSaving(true);
    try {
      const docRef = doc(db, 'content', 'main');
      await updateDoc(docRef, { hero });
      alert('Hero section updated successfully!');
    } catch (err) {
      console.error(err);
      alert('Error updating hero section');
    }
    setSaving(false);
  };

  if (loading) return <div style={{ color: '#fff' }}>Loading...</div>;

  return (
    <div>
      <h2 style={{ color: '#fff', marginBottom: '2rem', textTransform: 'uppercase' }}>Hero Section Editor</h2>
      <form onSubmit={handleSave} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', maxWidth: '600px' }}>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <label style={labelStyle}>Hero Headline</label>
          <input
            type="text"
            value={hero.headline || ''}
            onChange={e => setHero({ ...hero, headline: e.target.value })}
            style={inputStyle}
            required
          />
        </div>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <label style={labelStyle}>Hero Subheadline</label>
          <textarea
            value={hero.subheadline || ''}
            onChange={e => setHero({ ...hero, subheadline: e.target.value })}
            style={{...inputStyle, minHeight: '100px'}}
            required
          />
        </div>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <label style={labelStyle}>Hero Background Image URL</label>
          <input
            type="text"
            value={hero.backgroundImageUrl || ''}
            onChange={e => setHero({ ...hero, backgroundImageUrl: e.target.value })}
            style={inputStyle}
            required
          />
        </div>
        <button
          type="submit"
          disabled={saving}
          style={{
            padding: '1rem',
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
          {saving ? 'Saving...' : 'Save Changes'}
        </button>
      </form>
    </div>
  );
};

const labelStyle = { display: 'block', color: '#aaa', marginBottom: '0.5rem', fontSize: '0.9rem', fontWeight: '500' };
const inputStyle = { width: '100%', padding: '0.8rem', backgroundColor: '#1a1a1a', border: '1px solid #333', borderRadius: '4px', color: '#fff' };

export default HeroEditor;
