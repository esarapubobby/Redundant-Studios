import React from 'react';
import { Link } from 'react-router-dom';
import { useGames } from '../../hooks/useGames';
import { motion } from 'framer-motion';

const FeaturedGames = () => {
  const { games, loading } = useGames();

  if (loading) return null;

  const featured = games.slice(0, 3);

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
        {featured.map((game, idx) => (
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
              transition: 'border-color 0.3s',
              cursor: 'pointer',
              boxShadow: '0 10px 30px rgba(0,0,0,0.5)'
            }}
            onMouseEnter={(e) => e.currentTarget.style.borderColor = '#cc0000'}
            onMouseLeave={(e) => e.currentTarget.style.borderColor = '#333'}
          >
            <div style={{ overflow: 'hidden' }}>
              <motion.img
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.4 }}
                src={game.thumbnailUrl || 'https://via.placeholder.com/400x225'}
                alt={game.title}
                style={{ width: '100%', height: '200px', objectFit: 'cover' }}
              />
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
              <p style={{ color: '#ccc', marginBottom: '1.5rem', fontSize: '1rem' }}>{game.genre} | {game.platform}</p>
              <Link
                to="/games"
                style={{
                  display: 'block',
                  textAlign: 'center',
                  padding: '0.8rem',
                  backgroundColor: '#cc0000',
                  color: '#fff',
                  fontWeight: 'bold',
                  textTransform: 'uppercase',
                  borderRadius: '4px',
                  textDecoration: 'none',
                  transition: 'background 0.3s'
                }}
                onMouseEnter={(e) => e.target.style.backgroundColor = '#ff0000'}
                onMouseLeave={(e) => e.target.style.backgroundColor = '#cc0000'}
              >
                View Details
              </Link>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedGames;
