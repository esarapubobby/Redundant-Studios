import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { useFirestoreContent } from '../hooks/useFirestoreContent';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { content } = useFirestoreContent();

  const navLinks = content?.navbarLabels || [
    { name: 'Home', path: '/' },
    { name: 'Games', path: '/games' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav style={{
      position: 'sticky',
      top: 0,
      zIndex: 1000,
      backgroundColor: 'rgba(10, 10, 10, 0.8)',
      backdropFilter: 'blur(10px)',
      borderBottom: '2px solid #cc0000',
      padding: '1rem 2rem',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      transition: 'all 0.3s ease'
    }}>
      <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '12px', textDecoration: 'none' }}>
        {content?.logoUrl ? (
          <img src={content.logoUrl} alt="Logo" style={{ width: '40px', height: '40px', objectFit: 'contain', display: 'block' }} />
        ) : (
          <div style={{ width: '40px', height: '40px', backgroundColor: '#cc0000', borderRadius: '4px', display: 'block' }}></div>
        )}
        <span style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#fff', textTransform: 'uppercase', letterSpacing: '1px', lineHeight: '1' }}>
          {content?.studioName || 'Redundant Studios'}
        </span>
      </Link>

      {/* Desktop Menu */}
      <div style={{ display: 'flex', gap: '2rem' }} className="desktop-menu">
        {navLinks.map((link, idx) => (
          <Link
            key={idx}
            to={link.path}
            style={{
              color: '#ccc',
              fontWeight: '500',
              transition: 'color 0.3s',
              textDecoration: 'none',
              position: 'relative',
              padding: '5px 0'
            }}
            onMouseEnter={(e) => e.target.style.color = '#cc0000'}
            onMouseLeave={(e) => e.target.style.color = '#ccc'}
          >
            {link.name}
          </Link>
        ))}
      </div>

      {/* Mobile Toggle */}
      <div className="mobile-toggle" style={{ display: 'none' }}>
        <button onClick={() => setIsOpen(!isOpen)} style={{ background: 'none', border: 'none', color: '#fff', cursor: 'pointer' }}>
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: '-100%' }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: '-100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: '#0a0a0a',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              gap: '2rem',
              zIndex: 999
            }}
          >
            {navLinks.map((link, idx) => (
              <Link
                key={idx}
                to={link.path}
                onClick={() => setIsOpen(false)}
                style={{ fontSize: '2rem', color: '#fff', fontWeight: 'bold', textTransform: 'uppercase', textDecoration: 'none' }}
              >
                {link.name}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @media (max-width: 768px) {
          .desktop-menu { display: none !important; }
          .mobile-toggle { display: block !important; }
        }
      `}</style>
    </nav>
  );
};

export default Navbar;
