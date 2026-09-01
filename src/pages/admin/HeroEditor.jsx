import React, { useState, useEffect } from 'react';
import { db } from '../../firebase';
import { doc, getDoc, updateDoc } from 'firebase/firestore';
import { COLORS, SPACING, BORDER_RADIUS, FONT, btnStyle, labelStyle, inputStyle } from '../../styles';

const HeroEditor = () => {
  const [hero, setHero] = useState({ headline: '', subheadline: '', backgroundImageUrl: '', videoBackgroundUrl: '' });
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

  if (loading) return <div style={{ color: COLORS.white }}>Loading...</div>;

  return (
    <div>
      <h2 style={{ color: COLORS.white, marginBottom: SPACING.md, textTransform: 'uppercase' }}>Hero Section Editor</h2>
      <form onSubmit={handleSave} style={{ display: 'flex', flexDirection: 'column', gap: SPACING.md, maxWidth: 600 }}>
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
            style={{ ...inputStyle, minHeight: '100px' }}
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
          />
          <span style={{ fontSize: '0.75rem', color: COLORS.muted, marginTop: '0.4rem' }}>Used if no video is provided</span>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <label style={labelStyle}>Hero Background Video URL (YouTube — optional)</label>
          <input
            type="text"
            value={hero.videoBackgroundUrl || ''}
            onChange={e => setHero({ ...hero, videoBackgroundUrl: e.target.value })}
            style={inputStyle}
            placeholder="https://www.youtube.com/watch?v=..."
          />
          <span style={{ fontSize: '0.75rem', color: COLORS.muted, marginTop: '0.4rem' }}>Paste a YouTube link. If set, this will be used instead of the image.</span>
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

export default HeroEditor;