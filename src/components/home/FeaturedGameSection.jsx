import React from 'react';
import { useGames } from '../../hooks/useGames';
import { Link } from 'react-router-dom';
import { Play } from 'lucide-react';
import { motion } from 'framer-motion';

const FeaturedGameSection = () => {
  const { games, loading } = useGames();

  if (loading) return null;

  const featuredGame = games.find(game => game.featured);

  if (!featuredGame) return null;

  const getEmbedUrl = (url) => {
    if (!url) return null;
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
    const match = url.match(regExp);
    return (match && match[2].length === 11) ? `https://www.youtube.com/embed/${match[2]}` : null;
  };

  const embedUrl = getEmbedUrl(featuredGame.trailerUrl);

  return (
    <section style={{
      padding: '8rem 2rem',
      backgroundColor: '#0a0a0a',
      borderTop: '1px solid #222',
      borderBottom: '1px solid #222',
      overflow: 'hidden'
    }}>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        style={{ maxWidth: '1200px', margin: '0 auto' }}
      >
        <h2 style={{
          textAlign: 'center',
          fontSize: '2.5rem',
          color: '#fff',
          marginBottom: '4rem',
          textTransform: 'uppercase',
          position: 'relative'
        }}>
          Featured Game
          <div style={{ width: '60px', height: '4px', backgroundColor: '#cc0000', margin: '10px auto 0' }}></div>
        </h2>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
          gap: '4rem',
          alignItems: 'center'
        }}>
          {/* Trailer Wrapper */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            style={{
              position: 'relative',
              paddingBottom: '56.25%',
              height: 0,
              overflow: 'hidden',
              borderRadius: '16px',
              boxShadow: '0 20px 50px rgba(204, 0, 0, 0.2)',
              border: '1px solid #333'
            }}
          >
            {embedUrl ? (
              <iframe
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                  border: 'none'
                }}
                src={embedUrl}
                title="Game Trailer"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            ) : (
              <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                backgroundColor: '#1a1a1a',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                color: '#666',
                fontSize: '1.2rem'
              }}>
                No Trailer Available
              </div>
            )}
          </motion.div>

          {/* Info Wrapper */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}
          >
            <h3 style={{ fontSize: '3rem', color: '#fff', margin: 0, textTransform: 'uppercase', fontWeight: 'bold' }}>
              {featuredGame.title}
            </h3>
            <p style={{ fontSize: '1.2rem', color: '#ccc', lineHeight: '1.8' }}>
              {featuredGame.description}
            </p>
            <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
              <span style={{ color: '#cc0000', fontWeight: 'bold', textTransform: 'uppercase', fontSize: '1.1rem', backgroundColor: 'rgba(204,0,0,0.1)', padding: '4px 12px', borderRadius: '4px' }}>
                {featuredGame.genre} | {featuredGame.platform}
              </span>
            </div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                to={featuredGame.playstoreUrl || '#'}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '10px',
                  backgroundColor: '#cc0000',
                  color: '#fff',
                  padding: '1.2rem 2.5rem',
                  fontSize: '1.1rem',
                  fontWeight: 'bold',
                  textTransform: 'uppercase',
                  borderRadius: '4px',
                  textDecoration: 'none',
                  width: 'fit-content',
                  boxShadow: '0 10px 20px rgba(204, 0, 0, 0.3)',
                }}
              >
                <Play size={20} fill="currentColor" />
                Download on Play Store
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default FeaturedGameSection;
