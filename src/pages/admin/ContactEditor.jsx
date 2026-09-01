import React, { useState, useEffect } from 'react';
import { db } from '../../firebase';
import { doc, getDoc, updateDoc } from 'firebase/firestore';
import { COLORS, SPACING, BORDER_RADIUS, FONT, labelStyle, inputStyle, btnStyle } from '../../styles';

const ContactEditor = () => {
  const [contact, setContact] = useState({ email: '', discordUrl: '', instagramUrl: '', linkedinUrl: '', youtubeUrl: '', playstoreUrl: '' });
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    const fetchContact = async () => {
      const docRef = doc(db, 'content', 'main');
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        setContact(docSnap.data().contact || {});
      }
      setLoading(false);
    };
    fetchContact();
  }, []);

  const handleSave = async (e) => {
    e.preventDefault();
    setSaving(true);
    try {
      const docRef = doc(db, 'content', 'main');
      await updateDoc(docRef, { contact });
      alert('Contact info updated successfully!');
    } catch (err) {
      console.error(err);
      alert('Error updating contact info');
    }
    setSaving(false);
  };

  if (loading) return <div style={{ color: COLORS.white }}>Loading...</div>;

  return (
    <div>
      <h2 style={{ color: COLORS.white, marginBottom: SPACING.md, textTransform: 'uppercase' }}>Contact Info Editor</h2>
      <form onSubmit={handleSave} style={{ display: 'flex', flexDirection: 'column', gap: SPACING.md, maxWidth: 600 }}>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <label style={labelStyle}>Contact Email Address</label>
          <input
            type="email"
            value={contact.email || ''}
            onChange={e => setContact({ ...contact, email: e.target.value })}
            style={inputStyle}
            required
          />
        </div>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <label style={labelStyle}>Discord URL</label>
          <input
            type="text"
            value={contact.discordUrl || ''}
            onChange={e => setContact({ ...contact, discordUrl: e.target.value })}
            style={inputStyle}
          />
        </div>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <label style={labelStyle}>Instagram URL</label>
          <input
            type="text"
            value={contact.instagramUrl || ''}
            onChange={e => setContact({ ...contact, instagramUrl: e.target.value })}
            style={inputStyle}
          />
        </div>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <label style={labelStyle}>LinkedIn URL</label>
          <input
            type="text"
            value={contact.linkedinUrl || ''}
            onChange={e => setContact({ ...contact, linkedinUrl: e.target.value })}
            style={inputStyle}
          />
        </div>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <label style={labelStyle}>YouTube URL</label>
          <input
            type="text"
            value={contact.youtubeUrl || ''}
            onChange={e => setContact({ ...contact, youtubeUrl: e.target.value })}
            style={inputStyle}
          />
        </div>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <label style={labelStyle}>Play Store URL</label>
          <input
            type="text"
            value={contact.playstoreUrl || ''}
            onChange={e => setContact({ ...contact, playstoreUrl: e.target.value })}
            style={inputStyle}
          />
        </div>
        <button
          type="submit"
          disabled={saving}
          style={btnStyle}
        >
          {saving ? 'Saving...' : 'Save Changes'}
        </button>
      </form>
    </div>
  );
};

export default ContactEditor;