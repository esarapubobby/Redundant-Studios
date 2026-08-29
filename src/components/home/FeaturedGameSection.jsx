import React from 'react';
import { useGames } from '../../hooks/useGames';
import { Link } from 'react-router-dom';
import { Play, ExternalLink } from 'lucide-react';
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

  const modes = featuredGame.modes ? featuredGame.modes.split(',').map(m => {
    const [name, desc] = m.split('|');
    return { name: name?.trim(), desc: desc?.trim() };
  }) : [];

  const tags = featuredGame.tags ? featuredGame.tags.split(',').map(t => t.trim()) : [];

  return (
    <section style={{
      padding: '6rem 2rem',
      backgroundColor: '#0a0a0a',
      borderTop: '1px solid #222',
      borderBottom: '1px solid #222',
      overflow: 'hidden'
    }}>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        style={{ maxWidth: '1200px', margin: '0 auto' }}
      >
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
          gap: '4rem',
          alignItems: 'start'
        }}>
          {/* Left: Video Embed */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            style={{
              position: 'relative',
              paddingBottom: '56.25%',
              height: 0,
              overflow: 'hidden',
              borderRadius: '12px',
              boxShadow: '0 20px 40px rgba(0,0,0,0.6)',
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
                title="Featured Game Trailer"
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
                Trailer Not Available
              </div>
            )}
          </motion.div>

          {/* Right: Game Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#cc0000', fontWeight: 'bold', textTransform: 'uppercase', fontSize: '0.9rem' }}>
              <span style={{ width: '6px', height: '6px', backgroundColor: '#cc0000', borderRadius: '50%' }}></span>
              {featuredGame.status || 'In Development'}
            </div>

            <h2 style={{ fontSize: '4rem', color: '#fff', margin: 0, textTransform: 'uppercase', fontWeight: 'bold', lineHeight: '1' }}>
              {featuredGame.title}
            </h2>

            <p style={{ fontSize: '1.1rem', color: '#ccc', lineHeight: '1.6', margin: '0 0 1rem 0' }}>
              {featuredGame.description}
            </p>

            {modes.length > 0 && (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem', marginBottom: '1rem' }}>
                {modes.map((mode, idx) => (
                  <div key={idx} style={{ display: 'flex', gap: '1rem' }}>
                    <span style={{ color: '#cc0000', fontWeight: 'bold' }}>▶</span>
                    <div>
                      <strong style={{ color: '#fff', display: 'block', marginBottom: '4px' }}>{mode.name}</strong>
                      <span style={{ color: '#aaa', fontSize: '0.95rem', lineHeight: '1.5' }}>{mode.desc}</span>
                    </div>
                  </div>
                ))}
              </div>
            )}

            <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', marginBottom: '2rem' }}>
              {tags.map((tag, idx) => (
                <span key={idx} style={{
                  backgroundColor: '#222',
                  color: '#aaa',
                  padding: '4px 12px',
                  fontSize: '0.75rem',
                  fontWeight: 'bold',
                  textTransform: 'uppercase',
                  borderRadius: '2px',
                  border: '1px solid #333'
                }}>
                  {tag}
                </span>
              ))}
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => {
                  const url = getEmbedUrl(featuredGame.trailerUrl);
                  if (url) window.open(url, '_blank');
                }}
                style={{
                  backgroundColor: '#cc0000',
                  color: '#fff',
                  padding: '1rem 2rem',
                  fontSize: '1rem',
                  fontWeight: 'bold',
                  textTransform: 'uppercase',
                  border: 'none',
                  borderRadius: '4px',
                  cursor: 'pointer',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  gap: '10px'
                }}
              >
                Watch Trailer <span style={{ fontSize: '0.8rem' }}>→</span>
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => window.open(featuredGame.playstoreUrl || '#', '_blank')}
                style={{
                  backgroundColor: 'transparent',
                  color: '#fff',
                  padding: '1rem 2rem',
                  fontSize: '1rem',
                  fontWeight: 'bold',
                  textTransform: 'uppercase',
                  border: '1px solid #444',
                  borderRadius: '4px',
                  cursor: 'pointer',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  gap: '10px'
                }}
              >
                Download Game <ExternalLink size={18} />
              </motion.button>
            </div>

            <span style={{ color: '#666', fontSize: '0.85rem', marginTop: '0.5rem', textAlign: 'left' }}>
              Available on Google Play.
            </span>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default FeaturedGameSection;
