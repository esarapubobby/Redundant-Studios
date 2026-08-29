import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useFirestoreContent } from '../../hooks/useFirestoreContent';

const Hero = () => {
  const { content } = useFirestoreContent();
  const hero = content?.hero;

  if (!hero) return null;

  return (
    <section style={{
      height: '100vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      textAlign: 'center',
      backgroundImage: `linear-gradient(rgba(10,10,10,0.8), rgba(10,10,10,0.8)), url(${hero.backgroundImageUrl || 'https://via.placeholder.com/1920x1080'})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      padding: '0 20px',
      overflow: 'hidden',
      position: 'relative'
    }}>
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        style={{
          fontSize: 'clamp(3rem, 8vw, 6rem)',
          color: '#fff',
          marginBottom: '1rem',
          textTransform: 'uppercase',
          fontWeight: 'bold',
          lineHeight: '1',
          zIndex: 2
        }}
      >
        {hero.headline || 'Redundant Studios'}
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
        style={{
          fontSize: 'clamp(1rem, 2vw, 1.5rem)',
          color: '#ccc',
          marginBottom: '3rem',
          maxWidth: '800px',
          zIndex: 2,
          textShadow: '0 2px 4px rgba(0,0,0,0.5)'
        }}
      >
        {hero.subheadline || 'Crafting immersive experiences and pushing the boundaries of game development.'}
      </motion.p>

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        <Link
          to="/games"
          style={{
            backgroundColor: '#cc0000',
            color: '#fff',
            padding: '1.2rem 2.5rem',
            fontSize: '1.2rem',
            fontWeight: 'bold',
            textTransform: 'uppercase',
            border: 'none',
            borderRadius: '4px',
            textDecoration: 'none',
            display: 'inline-block',
            boxShadow: '0 10px 20px rgba(204, 0, 0, 0.3)',
            zIndex: 2
          }}
        >
          Explore Our Games
        </Link>
      </motion.div>

      <motion.div
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.3, 0.5, 0.3]
        }}
        transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '60vw',
          height: '60vw',
          background: 'radial-gradient(circle, rgba(204,0,0,0.15) 0%, rgba(10,10,10,0) 70%)',
          borderRadius: '50%',
          zIndex: 1,
          pointerEvents: 'none'
        }}
      />
    </section>
  );
};

export default Hero;
