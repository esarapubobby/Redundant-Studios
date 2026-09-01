import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { useFirestoreContent } from '../hooks/useFirestoreContent';
import { DEFAULT_CONTENT } from '../utils/defaultContent';
import { COLORS, SPACING, FONT } from '../styles';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { content } = useFirestoreContent();
  const location = useLocation();

  const data = content || DEFAULT_CONTENT;
  const navLinks = data?.navbarLabels || DEFAULT_CONTENT.navbarLabels;

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  return (
    <nav style={{
      position: 'sticky',
      top: 0,
      zIndex: 1000,
      backgroundColor: '#0a0a0a',
      boxShadow: '0 2px 8px rgba(0,0,0,0.5)',
      padding: `1.25rem ${SPACING.lg}`,
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
    }}>
      <Link to="/" style={{
        display: 'flex',
        alignItems: 'center',
        gap: '0.75rem',
        textDecoration: 'none',
      }}>
        {data?.logoUrl ? (
          <img
            src={data.logoUrl}
            alt="Logo"
            style={{
              width: '36px',
              height: '36px',
              objectFit: 'contain',
            }}
          />
        ) : (
          <div style={{
            fontFamily: FONT.display,
            fontSize: '1.6rem',
            fontWeight: 800,
            color: COLORS.primary,
            letterSpacing: '1px',
            lineHeight: 1,
          }}>
            R
          </div>
        )}
        <span style={{
          fontFamily: FONT.display,
          fontSize: '1.1rem',
          fontWeight: 700,
          color: COLORS.white,
          textTransform: 'uppercase',
          letterSpacing: '3px',
          lineHeight: 1,
        }}>
          {data?.studioName || 'Redundant Studios'}
        </span>
      </Link>

      <div className="nav-desktop" style={{ display: 'flex', gap: '2.5rem', alignItems: 'center' }}>
        {navLinks.map((link) => {
          const isActive = location.pathname === link.path;
          return (
            <Link
              key={link.path}
              to={link.path}
              style={{
                fontFamily: FONT.body,
                fontWeight: 600,
                fontSize: '0.95rem',
                letterSpacing: '2px',
                textTransform: 'uppercase',
                textDecoration: 'none',
                color: isActive ? COLORS.primary : COLORS.lightText,
                position: 'relative',
                paddingBottom: '4px',
                transition: 'color 0.2s ease',
              }}
              onMouseEnter={(e) => e.target.style.color = COLORS.white}
              onMouseLeave={(e) => e.target.style.color = isActive ? COLORS.primary : COLORS.lightText}
            >
              {link.name}
              {isActive && (
                <span style={{
                  position: 'absolute',
                  left: 0, right: 0,
                  bottom: 0,
                  height: '2px',
                  background: COLORS.primary,
                }} />
              )}
            </Link>
          );
        })}
      </div>

      <button
        className="nav-mobile-btn"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle menu"
        style={{
          display: 'none',
          background: 'transparent',
          border: 'none',
          color: COLORS.white,
          cursor: 'pointer',
          padding: '0.25rem',
        }}
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {isOpen && (
        <div style={{
          position: 'fixed',
          top: 0, left: 0, right: 0, bottom: 0,
          backgroundColor: '#0a0a0a',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '2.5rem',
          zIndex: 999,
        }}>
          <button
            onClick={() => setIsOpen(false)}
            aria-label="Close menu"
            style={{
              position: 'absolute',
              top: '1.5rem',
              right: '1.5rem',
              background: 'transparent',
              border: 'none',
              color: COLORS.white,
              padding: '0.25rem',
            }}
          >
            <X size={28} />
          </button>
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={() => setIsOpen(false)}
              style={{
                fontFamily: FONT.display,
                fontSize: '2.5rem',
                color: COLORS.white,
                fontWeight: 700,
                textTransform: 'uppercase',
                textDecoration: 'none',
                letterSpacing: '4px',
              }}
            >
              {link.name}
            </Link>
          ))}
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .nav-desktop { display: none !important; }
          .nav-mobile-btn { display: block !important; }
        }
      `}</style>
    </nav>
  );
};

export default Navbar;