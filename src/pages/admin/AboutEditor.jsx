import React, { useState, useEffect } from 'react';
import { db } from '../../firebase';
import { doc, getDoc, updateDoc } from 'firebase/firestore';
import { COLORS, SPACING, BORDER_RADIUS, FONT, labelStyle, inputStyle, btnStyle } from '../../styles';

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

  if (loading) return <div style={{ color: COLORS.white }}>Loading...</div>;

  return (
    <div>
      <h2 style={{ color: COLORS.white, marginBottom: SPACING.md, textTransform: 'uppercase' }}>About & Team Editor</h2>
      <form onSubmit={handleSave} style={{ display: 'flex', flexDirection: 'column', gap: SPACING.lg }}>
        {/* Studio Description */}
        <div style={{ backgroundColor: COLORS.inputBg, padding: SPACING.md, borderRadius: BORDER_RADIUS.md, border: `1px solid ${COLORS.inputBorder}` }}>
          <h3 style={{ color: COLORS.white, marginBottom: SPACING.sm, textTransform: 'uppercase' }}>Studio Description</h3>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <label style={labelStyle}>Main About Text</label>
            <textarea
              value={about.description || ''}
              onChange={e => setAbout({ ...about, description: e.target.value })}
              style={{ ...inputStyle, minHeight: '150px' }}
              required
            />
          </div>
        </div>

        {/* Team Images */}
        <div style={{ backgroundColor: COLORS.inputBg, padding: SPACING.md, borderRadius: BORDER_RADIUS.md, border: `1px solid ${COLORS.inputBorder}` }}>
          <h3 style={{ color: COLORS.white, marginBottom: SPACING.sm, textTransform: 'uppercase' }}>Team Member Images</h3>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: SPACING.sm }}>
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
        <div style={{ backgroundColor: COLORS.inputBg, padding: SPACING.md, borderRadius: BORDER_RADIUS.md, border: `1px solid ${COLORS.inputBorder}` }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: SPACING.sm }}>
            <h3 style={{ color: COLORS.white }}>Founders List</h3>
            <button type="button" onClick={addFounder} style={{ padding: '0.5rem 1rem', backgroundColor: COLORS.primary, color: COLORS.white, border: 'none', borderRadius: BORDER_RADIUS.md, cursor: 'pointer' }}>Add Founder</button>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: SPACING.sm }}>
            {founders.map((f, idx) => (
              <div key={idx} style={{ padding: SPACING.sm, backgroundColor: COLORS.bg, border: `1px solid ${COLORS.inputBorder}`, borderRadius: BORDER_RADIUS.md, position: 'relative' }}>
                <button type="button" onClick={() => removeFounder(idx)} style={{ position: 'absolute', top: SPACING.xs, right: SPACING.sm, background: 'none', border: 'none', color: COLORS.error, cursor: 'pointer' }}>Remove</button>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: SPACING.sm }}>
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
                    <textarea placeholder="Description" value={f.description} onChange={e => updateFounder(idx, 'description', e.target.value)} style={{ ...inputStyle, minHeight: '60px' }} required />
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
          style={btnStyle}
        >
          {saving ? 'Saving...' : 'Save All Changes'}
        </button>
      </form>
    </div>
  );
};

export default AboutEditor;