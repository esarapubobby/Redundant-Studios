export const COLORS = {
  bg: '#0a0a0a',
  bgElevated: '#0f0f10',
  surface: '#141414',
  surfaceHover: '#1a1a1a',
  primary: '#e10600',
  primaryDark: '#8a0303',
  primaryHover: '#ff1a1a',
  primaryGlow: 'rgba(225, 6, 0, 0.4)',
  secondary: '#cccccc',
  white: '#ffffff',
  offWhite: '#f5f5f5',
  muted: '#888888',
  darkText: '#333333',
  lightText: '#cccccc',
  inputBg: '#141414',
  inputBorder: '#262626',
  borderHover: 'rgba(225, 6, 0, 0.4)',
  success: '#00ff00',
  error: '#ff4444',
  glass: 'rgba(15, 15, 16, 0.85)',
};

export const GRADIENTS = {
  primary: 'linear-gradient(135deg, #e10600 0%, #8a0303 100%)',
  primarySoft: 'linear-gradient(135deg, rgba(225, 6, 0, 0.15) 0%, rgba(138, 3, 3, 0.05) 100%)',
  hero: 'radial-gradient(ellipse at top, rgba(225, 6, 0, 0.08) 0%, rgba(10, 10, 10, 0) 60%)',
  divider: 'linear-gradient(90deg, transparent 0%, rgba(225, 6, 0, 0.5) 50%, transparent 100%)',
  mesh: 'radial-gradient(at 20% 20%, rgba(225, 6, 0, 0.08) 0px, transparent 50%), radial-gradient(at 80% 80%, rgba(225, 6, 0, 0.05) 0px, transparent 50%)',
};

export const FONT = {
  family: "'Rajdhani', sans-serif",
  display: "'Barlow Condensed', sans-serif",
  accent: "'Rajdhani', sans-serif",
  weight: {
    regular: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
    black: 800,
  },
};

export const SPACING = {
  xs: '0.5rem',
  sm: '1rem',
  md: '1.5rem',
  lg: '2.5rem',
  xl: '4rem',
  xxl: '6rem',
  xxxl: '8rem',
};

export const BORDER_RADIUS = {
  sm: '2px',
  md: '4px',
  lg: '6px',
  xl: '8px',
  pill: '50px',
};

export const SHADOW = {
  sm: '0 2px 4px rgba(0, 0, 0, 0.3)',
  md: '0 10px 20px rgba(0, 0, 0, 0.3)',
  lg: '0 10px 30px rgba(0, 0, 0, 0.5)',
  glow: '0 0 20px rgba(225, 6, 0, 0.4)',
  glowStrong: '0 0 40px rgba(225, 6, 0, 0.6)',
  card: '0 4px 12px rgba(0, 0, 0, 0.4)',
  cardHover: '0 8px 24px rgba(225, 6, 0, 0.2)',
  nav: '0 2px 8px rgba(0, 0, 0, 0.5)',
};

export const TRANSITIONS = {
  fast: '0.3s ease',
  base: '0.5s cubic-bezier(0.4, 0, 0.2, 1)',
  slow: '0.6s cubic-bezier(0.4, 0, 0.2, 1)',
  spring: { type: 'spring', damping: 25, stiffness: 200 },
};

export const BREAKPOINTS = {
  xs: '480px',
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
  xxl: '1536px',
};

export const btnStyle = {
  padding: '1rem',
  backgroundColor: COLORS.primary,
  color: COLORS.white,
  border: 'none',
  borderRadius: BORDER_RADIUS.md,
  fontWeight: FONT.weight.bold,
  textTransform: 'uppercase',
  cursor: 'pointer',
  fontSize: '1.1rem',
};

export const inputStyle = {
  width: '100%',
  padding: SPACING.md,
  backgroundColor: COLORS.inputBg,
  border: `1px solid ${COLORS.inputBorder}`,
  borderRadius: BORDER_RADIUS.md,
  color: COLORS.white,
  fontFamily: FONT.family,
  fontSize: '1rem',
  transition: `border-color ${TRANSITIONS.base}`,
};

export const labelStyle = {
  display: 'block',
  color: COLORS.secondary,
  marginBottom: SPACING.xs,
  fontSize: '0.9rem',
  fontWeight: FONT.weight.semibold,
  textTransform: 'uppercase',
  letterSpacing: '0.5px',
};

export const btnPrimary = {
  padding: '0.9rem 1.8rem',
  background: COLORS.primary,
  color: COLORS.white,
  border: 'none',
  borderRadius: BORDER_RADIUS.sm,
  fontWeight: FONT.weight.bold,
  textTransform: 'uppercase',
  cursor: 'pointer',
  fontSize: '0.95rem',
  letterSpacing: '2px',
  fontFamily: FONT.body,
  transition: `background ${TRANSITIONS.base}`,
};

export const btnGhost = {
  padding: '0.9rem 1.8rem',
  backgroundColor: 'transparent',
  color: COLORS.white,
  border: `1px solid ${COLORS.primary}`,
  borderRadius: BORDER_RADIUS.sm,
  fontWeight: FONT.weight.bold,
  textTransform: 'uppercase',
  cursor: 'pointer',
  fontSize: '0.95rem',
  letterSpacing: '2px',
  fontFamily: FONT.body,
  transition: `all ${TRANSITIONS.base}`,
};

export const navLinkStyle = {
  color: COLORS.lightText,
  fontWeight: FONT.weight.semibold,
  fontSize: '0.95rem',
  letterSpacing: '0.5px',
  textTransform: 'uppercase',
  textDecoration: 'none',
  position: 'relative',
  padding: '5px 0',
  transition: `color ${TRANSITIONS.base}`,
};

export const sectionTitle = {
  fontFamily: FONT.display,
  fontSize: 'clamp(2rem, 4vw, 3rem)',
  color: COLORS.white,
  fontWeight: FONT.weight.black,
  textTransform: 'uppercase',
  letterSpacing: '2px',
  margin: 0,
};

export const sectionLabel = {
  fontFamily: FONT.accent,
  fontSize: '0.9rem',
  color: COLORS.primary,
  fontWeight: FONT.weight.bold,
  textTransform: 'uppercase',
  letterSpacing: '3px',
  display: 'inline-block',
  marginBottom: '0.75rem',
};