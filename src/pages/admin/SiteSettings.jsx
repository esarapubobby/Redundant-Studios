import React, { useState, useEffect } from 'react';
import { db } from '../../firebase';
import { doc, getDoc, updateDoc } from 'firebase/firestore';
import { COLORS, SPACING, BORDER_RADIUS, FONT, labelStyle, inputStyle, btnStyle } from '../../styles';

const DEFAULT_FONT = { display: 'Barlow Condensed', body: 'Rajdhani', displayWeight: 700, bodyWeight: 500 };

const FONT_OPTIONS = {
  display: [
    'Barlow Condensed',
    'Bebas Neue',
    'Anton',
    'Oswald',
    'Russo One',
    'Teko',
    'Black Ops One',
    'Saira Condensed',
    'Bowlby One',
    'Bungee',
  ],
  body: [
    'Rajdhani',
    'Inter',
    'Roboto',
    'Open Sans',
    'Montserrat',
    'Poppins',
    'Lato',
    'Nunito',
    'Work Sans',
    'Saira',
  ],
};

const SiteSettings = () => {
  const [settings, setSettings] = useState({
    studioName: 'Redundant Studios',
    logoUrl: '',
    navbarLabels: [
      { name: 'Home', path: '/' },
      { name: 'Games', path: '/games' },
      { name: 'About', path: '/about' },
      { name: 'Contact', path: '/contact' },
    ],
    font: { ...DEFAULT_FONT },
    visibility: { hero: true, featuredGames: true, founders: true, socialLinks: true }
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
          font: data.font || { ...DEFAULT_FONT },
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

  const updateFont = (field, value) => {
    setSettings({ ...settings, font: { ...settings.font, [field]: value } });
  };

  const toggleVisibility = (section) => {
    setSettings({
      ...settings,
      visibility: { ...settings.visibility, [section]: !settings.visibility[section] }
    });
  };

  if (loading) return <div style={{ color: COLORS.white }}>Loading...</div>;

  return (
    <div>
      <h2 style={{ color: COLORS.white, marginBottom: SPACING.md, textTransform: 'uppercase' }}>Site Settings</h2>
      <form onSubmit={handleSave} style={{ display: 'flex', flexDirection: 'column', gap: SPACING.lg }}>
        {/* General Studio Info */}
        <div style={{ backgroundColor: COLORS.inputBg, padding: SPACING.md, borderRadius: BORDER_RADIUS.md, border: `1px solid ${COLORS.inputBorder}` }}>
          <h3 style={{ color: COLORS.white, marginBottom: SPACING.sm, textTransform: 'uppercase' }}>General Studio Info</h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: SPACING.md }}>
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
            <div style={{ display: 'flex', alignItems: 'center', gap: SPACING.sm }}>
              <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
                <label style={labelStyle}>Logo Image URL (used in Navbar, Footer, and Favicon)</label>
                <input
                  type="text"
                  value={settings.logoUrl}
                  onChange={e => setSettings({ ...settings, logoUrl: e.target.value })}
                  style={inputStyle}
                  placeholder="https://..."
                />
              </div>
              <div style={{
                width: '60px',
                height: '60px',
                border: `1px solid ${COLORS.inputBorder}`,
                borderRadius: BORDER_RADIUS.md,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: COLORS.bg
              }}>
                {settings.logoUrl ? (
                  <img src={settings.logoUrl} alt="Preview" style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' }} />
                ) : (
                  <div style={{ width: '20px', height: '20px', backgroundColor: COLORS.primary }}></div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Font Settings */}
        <div style={{ backgroundColor: COLORS.inputBg, padding: SPACING.md, borderRadius: BORDER_RADIUS.md, border: `1px solid ${COLORS.inputBorder}` }}>
          <h3 style={{ color: COLORS.white, marginBottom: SPACING.sm, textTransform: 'uppercase' }}>Typography</h3>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: SPACING.md }}>
            <div>
              <label style={labelStyle}>Display Font (headings)</label>
              <select
                value={settings.font.display}
                onChange={e => updateFont('display', e.target.value)}
                style={{ ...inputStyle, cursor: 'pointer' }}
              >
                {FONT_OPTIONS.display.map(f => (
                  <option key={f} value={f} style={{ fontFamily: f }}>{f}</option>
                ))}
              </select>
            </div>
            <div>
              <label style={labelStyle}>Body Font (paragraphs)</label>
              <select
                value={settings.font.body}
                onChange={e => updateFont('body', e.target.value)}
                style={{ ...inputStyle, cursor: 'pointer' }}
              >
                {FONT_OPTIONS.body.map(f => (
                  <option key={f} value={f} style={{ fontFamily: f }}>{f}</option>
                ))}
              </select>
            </div>
            <div>
              <label style={labelStyle}>Display Weight</label>
              <select
                value={settings.font.displayWeight}
                onChange={e => updateFont('displayWeight', parseInt(e.target.value))}
                style={{ ...inputStyle, cursor: 'pointer' }}
              >
                {[400, 500, 600, 700, 800].map(w => <option key={w} value={w}>{w}</option>)}
              </select>
            </div>
            <div>
              <label style={labelStyle}>Body Weight</label>
              <select
                value={settings.font.bodyWeight}
                onChange={e => updateFont('bodyWeight', parseInt(e.target.value))}
                style={{ ...inputStyle, cursor: 'pointer' }}
              >
                {[400, 500, 600, 700].map(w => <option key={w} value={w}>{w}</option>)}
              </select>
            </div>
          </div>
          <div style={{ marginTop: SPACING.md, padding: SPACING.sm, backgroundColor: COLORS.bg, borderRadius: BORDER_RADIUS.sm, border: `1px solid ${COLORS.inputBorder}` }}>
            <div style={{ fontSize: '0.7rem', color: COLORS.muted, textTransform: 'uppercase', letterSpacing: '2px', marginBottom: '0.5rem' }}>Preview</div>
            <div style={{ fontFamily: settings.font.display, fontWeight: settings.font.displayWeight, fontSize: '1.5rem', color: COLORS.white, textTransform: 'uppercase', letterSpacing: '2px', marginBottom: '0.4rem' }}>
              {settings.font.display} Heading
            </div>
            <div style={{ fontFamily: settings.font.body, fontWeight: settings.font.bodyWeight, color: COLORS.secondary, fontSize: '0.95rem' }}>
              The quick brown fox jumps over the lazy dog. 1234567890
            </div>
          </div>
        </div>

        {/* Navbar Labels */}
        <div style={{ backgroundColor: COLORS.inputBg, padding: SPACING.md, borderRadius: BORDER_RADIUS.md, border: `1px solid ${COLORS.inputBorder}` }}>
          <h3 style={{ color: COLORS.white, marginBottom: SPACING.sm, textTransform: 'uppercase' }}>Navbar Labels</h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: SPACING.md }}>
            {settings.navbarLabels.map((label, idx) => (
              <div key={idx} style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: SPACING.sm, padding: SPACING.md, backgroundColor: COLORS.bg, borderRadius: BORDER_RADIUS.md, border: `1px solid ${COLORS.inputBorder}` }}>
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
        <div style={{ backgroundColor: COLORS.inputBg, padding: SPACING.md, borderRadius: BORDER_RADIUS.md, border: `1px solid ${COLORS.inputBorder}` }}>
          <h3 style={{ color: COLORS.white, marginBottom: SPACING.sm, textTransform: 'uppercase' }}>Section Visibility (Home Page)</h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: SPACING.sm }}>
            {Object.keys(settings.visibility).map(section => (
              <div key={section} style={{ display: 'flex', alignItems: 'center', gap: SPACING.sm, color: COLORS.secondary, textTransform: 'capitalize' }}>
                <input
                  type="checkbox"
                  checked={settings.visibility[section]}
                  onChange={() => toggleVisibility(section)}
                  style={{ width: '20px', height: '20px', accentColor: COLORS.primary }}
                />
                <span style={{ fontSize: '1.1rem' }}>{section.replace(/([A-Z])/g, ' $1')}</span>
              </div>
            ))}
          </div>
        </div>

        <button
          type="submit"
          disabled={saving}
          style={btnStyle}
        >
          {saving ? 'Saving...' : 'Save Settings'}
        </button>
      </form>
    </div>
  );
};

export default SiteSettings;