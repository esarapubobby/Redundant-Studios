import React, { useState } from 'react';
import { useGames } from '../hooks/useGames';

const Games = () => {
  const [filter, setFilter] = useState('All');
  const { games, loading, error } = useGames();

  if (loading) return <div style={{ textAlign: 'center', padding: '5rem', color: '#fff' }}>Loading games...</div>;
  if (error) return <div style={{ textAlign: 'center', padding: '5rem', color: '#ff0000' }}>Error loading games.</div>;

  const filteredGames = filter === 'All' ? games : games.filter(g => g.status === filter);

  return (
    <div style={{ padding: '5rem 2rem', backgroundColor: '#0a0a0a', minHeight: '100vh' }}>
      <h1 style={{ textAlign: 'center', fontSize: '3rem', color: '#fff', marginBottom: '2rem', textTransform: 'uppercase' }}>Our Games</h1>

      <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', marginBottom: '3rem' }}>
        {['All', 'Released', 'Coming Soon'].map(status => (
          <button
            key={status}
            onClick={() => setFilter(status)}
            style={{
              padding: '0.5rem 1.5rem',
              backgroundColor: filter === status ? '#cc0000' : '#1a1a1a',
              color: '#fff',
              border: '1px solid #333',
              borderRadius: '4px',
              cursor: 'pointer',
              fontWeight: 'bold',
              textTransform: 'uppercase',
              transition: 'all 0.3s'
            }}
          >
            {status}
          </button>
        ))}
      </div>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
        gap: '2rem',
        maxWidth: '1200px',
        margin: '0 auto'
      }}>
        {filteredGames.map((game) => (
          <div key={game.id} style={{ backgroundColor: '#1a1a1a', border: '1px solid #333', borderRadius: '8px', overflow: 'hidden' }}>
            <img src={game.thumbnailUrl || 'https://via.placeholder.com/400x225'} alt={game.title} style={{ width: '100%', height: '200px', objectFit: 'cover' }} />
            <div style={{ padding: '1.5rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
                <h3 style={{ fontSize: '1.5rem', color: '#fff', margin: 0 }}>{game.title}</h3>
                <span style={{
                  fontSize: '0.8rem',
                  padding: '4px 8px',
                  backgroundColor: game.status === 'Released' ? '#cc0000' : '#444',
                  color: '#fff',
                  borderRadius: '4px',
                  textTransform: 'uppercase'
                }}>{game.status}</span>
              </div>
              <p style={{ color: '#ccc', marginBottom: '1rem' }}>{game.genre} | {game.platform}</p>
              {game.playstoreUrl && (
                <a
                  href={game.playstoreUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'block',
                    textAlign: 'center',
                    padding: '0.8rem',
                    backgroundColor: '#cc0000',
                    color: '#fff',
                    fontWeight: 'bold',
                    textTransform: 'uppercase',
                    borderRadius: '4px',
                    textDecoration: 'none'
                  }}
                >
                  View on Play Store
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
      {filteredGames.length === 0 && <div style={{ textAlign: 'center', color: '#ccc', marginTop: '3rem' }}>No games found for this category.</div>}
    </div>
  );
};

export default Games;
