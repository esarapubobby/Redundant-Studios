import React, { useState, useEffect } from 'react';
import { db } from '../../firebase';
import { doc, getDoc, updateDoc } from 'firebase/firestore';

const AboutEditor = () => {
  const [about, setAbout] = useState({ description: '', values: [] });
  const [teamImages, setTeamImages] = useState({ srinu: '', bobby: '', badri: '' });
  const [founders, setFounders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    const fetchAbout = async () => {
      const docRef = doc(db, 'content', 'main');
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        const data = docSnap.data();
        setAbout(data.about || {});
        setTeamImages(data.teamImages || {});
        setFounders(data.founders || []);
      }
      setLoading(false);
    };
    fetchAbout();
  }, []);

  const handleSave = async (e) => {
    e.preventDefault();
    setSaving(true);
    try {
      const docRef = doc(db, 'content', 'main');
      await updateDoc(docRef, { about, teamImages, founders });
      alert('About section updated successfully!');
    } catch (err) {
      console.error(err);
      alert('Error updating about section');
    }
    setSaving(false);
  };

  const addFounder = () => {
    setFounders([...founders, { name: '', role: '', description: '', image: '', socials: { youtube: '', linkedin: '', instagram: '' } }]);
  };

  const updateFounder = (index, field, value) => {
    const updated = [...founders];
    updated[index] = { ...updated[index], [field]: value };
    setFounders(updated);
  };

  const updateFounderSocial = (index, social, value) => {
    const updated = [...founders];
    updated[index].socials = { ...updated[index].socials, [social]: value };
    setFounders(updated);
  };

  const removeFounder = (index) => {
    setFounders(founders.filter((_, i) => i !== index));
  };

  if (loading) return <div style={{ color: '#fff' }}>Loading...</div>;

  return (
    <div>
      <h2 style={{ color: '#fff', marginBottom: '2rem', textTransform: 'uppercase' }}>About & Team Editor</h2>
      <form onSubmit={handleSave} style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
        {/* Studio Description */}
        <div style={{ backgroundColor: '#1a1a1a', padding: '1.5rem', borderRadius: '8px', border: '1px solid #333' }}>
          <h3 style={{ color: '#fff', marginBottom: '1rem' }}>Studio Description</h3>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <label style={labelStyle}>Main About Text</label>
            <textarea
              value={about.description || ''}
              onChange={e => setAbout({ ...about, description: e.target.value })}
              style={{...inputStyle, minHeight: '150px'}}
              required
            />
          </div>
        </div>

        {/* Team Images */}
        <div style={{ backgroundColor: '#1a1a1a', padding: '1.5rem', borderRadius: '8px', border: '1px solid #333' }}>
          <h3 style={{ color: '#fff', marginBottom: '1rem' }}>Team Member Images</h3>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem' }}>
            {['srinu', 'bobby', 'badri'].map(name => (
              <div key={name} style={{ display: 'flex', flexDirection: 'column' }}>
                <label style={{ ...labelStyle, textTransform: 'capitalize' }}>{name} Profile URL</label>
                <input
                  type="text"
                  value={teamImages[name] || ''}
                  onChange={e => setTeamImages({ ...teamImages, [name]: e.target.value })}
                  style={inputStyle}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Founders Editor */}
        <div style={{ backgroundColor: '#1a1a1a', padding: '1.5rem', borderRadius: '8px', border: '1px solid #333' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
            <h3 style={{ color: '#fff' }}>Founders List</h3>
            <button type="button" onClick={addFounder} style={{ padding: '0.5rem 1rem', backgroundColor: '#cc0000', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>Add Founder</button>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            {founders.map((f, idx) => (
              <div key={idx} style={{ padding: '1rem', backgroundColor: '#0a0a0a', border: '1px solid #444', borderRadius: '4px', position: 'relative' }}>
                <button type="button" onClick={() => removeFounder(idx)} style={{ position: 'absolute', top: '10px', right: '10px', background: 'none', border: 'none', color: '#ff4444', cursor: 'pointer' }}>Remove</button>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem' }}>
                  <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <label style={labelStyle}>Founder Name</label>
                    <input placeholder="Name" value={f.name} onChange={e => updateFounder(idx, 'name', e.target.value)} style={inputStyle} required />
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <label style={labelStyle}>Founder Role</label>
                    <input placeholder="Role" value={f.role} onChange={e => updateFounder(idx, 'role', e.target.value)} style={inputStyle} required />
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <label style={labelStyle}>Image URL</label>
                    <input placeholder="URL" value={f.image} onChange={e => updateFounder(idx, 'image', e.target.value)} style={inputStyle} />
                  </div>
                  <div style={{ gridColumn: 'span 2', display: 'flex', flexDirection: 'column' }}>
                    <label style={labelStyle}>Founder Description</label>
                    <textarea placeholder="Description" value={f.description} onChange={e => updateFounder(idx, 'description', e.target.value)} style={{...inputStyle, minHeight: '60px'}} required />
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <label style={labelStyle}>YouTube URL</label>
                    <input placeholder="URL" value={f.socials.youtube} onChange={e => updateFounderSocial(idx, 'youtube', e.target.value)} style={inputStyle} />
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <label style={labelStyle}>LinkedIn URL</label>
                    <input placeholder="URL" value={f.socials.linkedin} onChange={e => updateFounderSocial(idx, 'linkedin', e.target.value)} style={inputStyle} />
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <label style={labelStyle}>Instagram URL</label>
                    <input placeholder="URL" value={f.socials.instagram} onChange={e => updateFounderSocial(idx, 'instagram', e.target.value)} style={inputStyle} />
                  </div>
                </div>
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
          {saving ? 'Saving...' : 'Save All Changes'}
        </button>
      </form>
    </div>
  );
};

const labelStyle = { display: 'block', color: '#aaa', marginBottom: '0.5rem', fontSize: '0.9rem', fontWeight: '500' };
const inputStyle = { padding: '0.8rem', backgroundColor: '#0a0a0a', border: '1px solid #333', borderRadius: '4px', color: '#fff' };

export default AboutEditor;
