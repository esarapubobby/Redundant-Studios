import React, { useState, useEffect } from 'react';
import { db } from '../../firebase';
import { doc, getDoc, updateDoc } from 'firebase/firestore';

const SiteSettings = () => {
  const [settings, setSettings] = useState({
    studioName: '',
    logoUrl: '',
    navbarLabels: [],
    visibility: {}
  });
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    const fetchSettings = async () => {
      const docRef = doc(db, 'content', 'main');
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        const data = docSnap.data();
        setSettings({
          studioName: data.studioName || 'Redundant Studios',
          logoUrl: data.logoUrl || '',
          navbarLabels: data.navbarLabels || [
            { name: 'Home', path: '/' },
            { name: 'Games', path: '/games' },
            { name: 'About', path: '/about' },
            { name: 'Contact', path: '/contact' },
          ],
          visibility: data.visibility || { hero: true, featuredGames: true, founders: true, socialLinks: true }
        });
      }
      setLoading(false);
    };
    fetchSettings();
  }, []);

  const handleSave = async (e) => {
    e.preventDefault();
    setSaving(true);
    try {
      const docRef = doc(db, 'content', 'main');
      await updateDoc(docRef, settings);
      alert('Site settings updated successfully!');
    } catch (err) {
      console.error(err);
      alert('Error updating site settings');
    }
    setSaving(false);
  };

  const updateLabel = (index, field, value) => {
    const updated = [...settings.navbarLabels];
    updated[index] = { ...updated[index], [field]: value };
    setSettings({ ...settings, navbarLabels: updated });
  };

  const toggleVisibility = (section) => {
    setSettings({
      ...settings,
      visibility: { ...settings.visibility, [section]: !settings.visibility[section] }
    });
  };

  if (loading) return <div style={{ color: '#fff' }}>Loading...</div>;

  return (
    <div>
      <h2 style={{ color: '#fff', marginBottom: '2rem', textTransform: 'uppercase' }}>Site Settings</h2>
      <form onSubmit={handleSave} style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
        {/* General Studio Info */}
        <div style={{ backgroundColor: '#1a1a1a', padding: '1.5rem', borderRadius: '8px', border: '1px solid #333' }}>
          <h3 style={{ color: '#fff', marginBottom: '1rem' }}>General Studio Info</h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <div>
              <label style={labelStyle}>Studio Name</label>
              <input
                type="text"
                value={settings.studioName}
                onChange={e => setSettings({ ...settings, studioName: e.target.value })}
                style={inputStyle}
                required
              />
            </div>
            <div>
              <label style={labelStyle}>Logo Image URL</label>
              <input
                type="text"
                value={settings.logoUrl}
                onChange={e => setSettings({ ...settings, logoUrl: e.target.value })}
                style={inputStyle}
                placeholder="https://..."
              />
            </div>
          </div>
        </div>

        {/* Navbar Labels */}
        <div style={{ backgroundColor: '#1a1a1a', padding: '1.5rem', borderRadius: '8px', border: '1px solid #333' }}>
          <h3 style={{ color: '#fff', marginBottom: '1rem' }}>Navbar Labels</h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {settings.navbarLabels.map((label, idx) => (
              <div key={idx} style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', padding: '1rem', backgroundColor: '#0a0a0a', borderRadius: '4px', border: '1px solid #222' }}>
                <div>
                  <label style={labelStyle}>Link Label</label>
                  <input
                    type="text"
                    value={label.name}
                    onChange={e => updateLabel(idx, 'name', e.target.value)}
                    style={inputStyle}
                    required
                  />
                </div>
                <div>
                  <label style={labelStyle}>Route Path</label>
                  <input
                    type="text"
                    value={label.path}
                    onChange={e => updateLabel(idx, 'path', e.target.value)}
                    style={inputStyle}
                    required
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Section Visibility */}
        <div style={{ backgroundColor: '#1a1a1a', padding: '1.5rem', borderRadius: '8px', border: '1px solid #333' }}>
          <h3 style={{ color: '#fff', marginBottom: '1rem' }}>Section Visibility (Home Page)</h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {Object.keys(settings.visibility).map(section => (
              <div key={section} style={{ display: 'flex', alignItems: 'center', gap: '1rem', color: '#ccc', textTransform: 'capitalize' }}>
                <input
                  type="checkbox"
                  checked={settings.visibility[section]}
                  onChange={() => toggleVisibility(section)}
                  style={{ width: '20px', height: '20px', accentColor: '#cc0000' }}
                />
                <span style={{ fontSize: '1.1rem' }}>{section.replace(/([A-Z])/g, ' $1')}</span>
              </div>
            ))}
          </div>
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
          {saving ? 'Saving...' : 'Save Settings'}
        </button>
      </form>
    </div>
  );
};

const labelStyle = { display: 'block', color: '#aaa', marginBottom: '0.5rem', fontSize: '0.9rem', fontWeight: '500' };
const inputStyle = { width: '100%', padding: '0.8rem', backgroundColor: '#0a0a0a', border: '1px solid #333', borderRadius: '4px', color: '#fff' };

export default SiteSettings;
