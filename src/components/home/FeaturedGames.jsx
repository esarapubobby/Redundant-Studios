import React from 'react';
import { useGames } from '../../hooks/useGames';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { getEmbedUrl } from '../../utils/youtube';

const FeaturedGames = () => {
  const { games, loading } = useGames();

  if (loading) return null;

  // Only show games that are NOT the main featured game
  const latest = games.filter(g => !g.featured).slice(0, 3);

  return (
    <section style={{ padding: '8rem 2rem', backgroundColor: '#0a0a0a' }}>
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        style={{ textAlign: 'center', fontSize: '2.5rem', color: '#fff', marginBottom: '4rem', textTransform: 'uppercase' }}
      >
        Latest Games
        <div style={{ width: '60px', height: '4px', backgroundColor: '#cc0000', margin: '10px auto 0' }}></div>
      </motion.h2>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: '2.5rem',
        maxWidth: '1200px',
        margin: '0 auto'
      }}>
        {latest.map((game, idx) => {
          const embedUrl = getEmbedUrl(game.trailerUrl);
          return (
            <motion.div
              key={game.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.2 }}
              whileHover={{ y: -10 }}
              style={{
                backgroundColor: '#1a1a1a',
                border: '1px solid #333',
                borderRadius: '12px',
                overflow: 'hidden',
                transition: 'all 0.3s',
                cursor: 'pointer',
                boxShadow: '0 10px 30px rgba(0,0,0,0.5)'
              }}
              onMouseEnter={(e) => e.currentTarget.style.borderColor = '#cc0000'}
              onMouseLeave={(e) => e.currentTarget.style.borderColor = '#333'}
            >
              <div style={{ position: 'relative', width: '100%', height: '200px', overflow: 'hidden' }}>
                {embedUrl ? (
                  <iframe
                    src={`${embedUrl}?autoplay=0&mute=1&controls=0&loop=1&playlist=${embedUrl.split('/').pop()}`}
                    style={{ width: '100%', height: '100%', border: 'none', pointerEvents: 'none' }}
                    title={game.title}
                  />
                ) : (
                  <motion.img
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.4 }}
                    src={game.thumbnailUrl || 'https://via.placeholder.com/400x225'}
                    alt={game.title}
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                )}
              </div>
              <div style={{ padding: '1.5rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
                  <h3 style={{ fontSize: '1.5rem', color: '#fff', margin: 0, fontWeight: 'bold' }}>{game.title}</h3>
                  <span style={{
                    fontSize: '0.8rem',
                    padding: '4px 8px',
                    backgroundColor: game.status === 'Released' ? '#cc0000' : '#444',
                    color: '#fff',
                    borderRadius: '4px',
                    textTransform: 'uppercase',
                    fontWeight: 'bold'
                  }}>{game.status}</span>
                </div>
                <p style={{ color: '#aaa', fontSize: '0.9rem', marginBottom: '1.5rem', lineHeight: '1.4' }}>{game.genre} | {game.platform}</p>
                <Link
                  to="/games"
                  style={{
                    display: 'block',
                    textAlign: 'center',
                    padding: '0.8rem',
                    backgroundColor: 'transparent',
                    color: '#fff',
                    border: '1px solid #cc0000',
                    fontWeight: 'bold',
                    textTransform: 'uppercase',
                    borderRadius: '4px',
                    textDecoration: 'none',
                    transition: 'all 0.3s'
                  }}
                  onMouseEnter={(e) => e.target.style.backgroundColor = '#cc0000'}
                  onMouseLeave={(e) => e.target.style.backgroundColor = 'transparent'}
                >
                  View Details
                </Link>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default FeaturedGames;
