import React, { useState, useEffect } from 'react';
import { db } from '../../firebase';
import { collection, getDocs, addDoc, updateDoc, deleteDoc, doc, query, orderBy } from 'firebase/firestore';

const GamesManager = () => {
  const [games, setGames] = useState([]);
  const [loading, setLoading] = useState(true);
  const [editingGame, setEditingGame] = useState(null);
  const [newGame, setNewGame] = useState({
    title: '', description: '', genre: '', platform: '', thumbnailUrl: '', trailerUrl: '', playstoreUrl: '', status: 'Released', order: 0, featured: false, tags: '', modes: ''
  });

  const fetchGames = async () => {
    setLoading(true);
    const q = query(collection(db, 'games'), orderBy('order', 'asc'));
    const snapshot = await getDocs(q);
    const gamesData = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    setGames(gamesData);
    setLoading(false);
  };

  useEffect(() => { fetchGames(); }, []);

  const handleAddGame = async (e) => {
    e.preventDefault();
    try {
      await addDoc(collection(db, 'games'), newGame);
      setNewGame({ title: '', description: '', genre: '', platform: '', thumbnailUrl: '', trailerUrl: '', playstoreUrl: '', status: 'Released', order: 0, featured: false, tags: '', modes: '' });
      await fetchGames();
    } catch (err) { alert('Error adding game'); }
  };

  const handleUpdateGame = async (e) => {
    e.preventDefault();
    try {
      const docRef = doc(db, 'games', editingGame.id);
      const { id, ...updateData } = editingGame;
      await updateDoc(docRef, updateData);
      setEditingGame(null);
      await fetchGames();
    } catch (err) { alert('Error updating game'); }
  };

  const handleDeleteGame = async (id) => {
    if (!window.confirm('Are you sure?')) return;
    try {
      await deleteDoc(doc(db, 'games', id));
      await fetchGames();
    } catch (err) { alert('Error deleting game'); }
  };

  if (loading) return <div style={{ color: '#fff' }}>Loading...</div>;

  return (
    <div>
      <h2 style={{ color: '#fff', marginBottom: '2rem', textTransform: 'uppercase' }}>Games Manager</h2>

      <div style={{ backgroundColor: '#1a1a1a', padding: '1.5rem', borderRadius: '8px', border: '1px solid #333', marginBottom: '3rem' }}>
        <h3 style={{ color: '#fff', marginBottom: '1.5rem' }}>Add New Game</h3>
        <form onSubmit={handleAddGame} style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem' }}>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <label style={labelStyle}>Game Title</label>
            <input placeholder="Enter title" value={newGame.title} onChange={e => setNewGame({...newGame, title: e.target.value})} style={inputStyle} required />
          </div>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <label style={labelStyle}>Genre</label>
            <input placeholder="e.g. Action, RPG" value={newGame.genre} onChange={e => setNewGame({...newGame, genre: e.target.value})} style={inputStyle} required />
          </div>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <label style={labelStyle}>Platform</label>
            <input placeholder="e.g. Android, PC" value={newGame.platform} onChange={e => setNewGame({...newGame, platform: e.target.value})} style={inputStyle} required />
          </div>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <label style={labelStyle}>Thumbnail URL</label>
            <input placeholder="https://..." value={newGame.thumbnailUrl} onChange={e => setNewGame({...newGame, thumbnailUrl: e.target.value})} style={inputStyle} />
          </div>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <label style={labelStyle}>Trailer URL (YouTube)</label>
            <input placeholder="https://youtube.com/..." value={newGame.trailerUrl} onChange={e => setNewGame({...newGame, trailerUrl: e.target.value})} style={inputStyle} />
          </div>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <label style={labelStyle}>Play Store URL</label>
            <input placeholder="https://play.google.com/..." value={newGame.playstoreUrl} onChange={e => setNewGame({...newGame, playstoreUrl: e.target.value})} style={inputStyle} />
          </div>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <label style={labelStyle}>Display Order</label>
            <input type="number" value={newGame.order} onChange={e => setNewGame({...newGame, order: parseInt(e.target.value)})} style={inputStyle} />
          </div>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <label style={labelStyle}>Status</label>
            <select value={newGame.status} onChange={e => setNewGame({...newGame, status: e.target.value})} style={inputStyle}>
              <option value="Released">Released</option>
              <option value="Coming Soon">Coming Soon</option>
            </select>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <label style={labelStyle}>Tags (comma separated)</label>
            <input placeholder="Unity, 3 Modes, In Development" value={newGame.tags} onChange={e => setNewGame({...newGame, tags: e.target.value})} style={inputStyle} />
          </div>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <label style={labelStyle}>Modes (Format: Name|Desc, Name|Desc)</label>
            <input placeholder="Last Stand|Survive waves, Challenge|Eliminate 50" value={newGame.modes} onChange={e => setNewGame({...newGame, modes: e.target.value})} style={inputStyle} />
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', cursor: 'pointer' }}>
            <input
              type="checkbox"
              id="featured_new"
              checked={newGame.featured}
              onChange={e => setNewGame({...newGame, featured: e.target.checked})}
              style={{ width: '20px', height: '20px', accentColor: '#cc0000' }}
            />
            <label htmlFor="featured_new" style={{ color: '#fff', fontWeight: 'bold', textTransform: 'uppercase' }}>Featured Game</label>
          </div>
          <div style={{ gridColumn: 'span 2', display: 'flex', flexDirection: 'column' }}>
            <label style={labelStyle}>Game Description</label>
            <textarea placeholder="Describe the game..." value={newGame.description} onChange={e => setNewGame({...newGame, description: e.target.value})} style={{...inputStyle, minHeight: '80px'}} required />
          </div>
          <button type="submit" style={btnStyle}>Add Game</button>
        </form>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        {games.map(game => (
          <div key={game.id} style={{ backgroundColor: '#1a1a1a', padding: '1rem', borderRadius: '8px', border: '1px solid #333', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <div style={{ width: '40px', height: '40px', backgroundColor: '#222', display: 'flex', justifyContent: 'center', alignItems: 'center', borderRadius: '4px', color: '#ccc', fontWeight: 'bold' }}>{game.order}</div>
              <div>
                <span style={{ color: '#fff', fontWeight: 'bold', fontSize: '1.1rem' }}>{game.title}</span>
                {game.featured && <span style={{ marginLeft: '10px', backgroundColor: '#cc0000', color: '#fff', fontSize: '0.7rem', padding: '2px 6px', borderRadius: '4px', textTransform: 'uppercase' }}>Featured</span>}
              </div>
            </div>
            <div style={{ display: 'flex', gap: '0.5rem' }}>
              <button onClick={() => setEditingGame(game)} style={{ padding: '0.4rem 0.8rem', backgroundColor: '#444', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>Edit</button>
              <button onClick={() => handleDeleteGame(game.id)} style={{ padding: '0.4rem 0.8rem', backgroundColor: '#cc0000', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>Delete</button>
            </div>
          </div>
        ))}
      </div>

      {editingGame && (
        <div style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: 'rgba(0,0,0,0.8)', display: 'flex', justifyContent: 'center', alignItems: 'center', zIndex: 2000 }}>
          <form onSubmit={handleUpdateGame} style={{ backgroundColor: '#1a1a1a', padding: '2rem', borderRadius: '8px', border: '1px solid #cc0000', width: '90%', maxWidth: '700px', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem' }}>
            <h3 style={{ color: '#fff', gridColumn: 'span 2', textTransform: 'uppercase', marginBottom: '1rem' }}>Edit Game: {editingGame.title}</h3>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <label style={labelStyle}>Game Title</label>
              <input value={editingGame.title} onChange={e => setEditingGame({...editingGame, title: e.target.value})} style={inputStyle} required />
            </div>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <label style={labelStyle}>Genre</label>
              <input value={editingGame.genre} onChange={e => setEditingGame({...editingGame, genre: e.target.value})} style={inputStyle} required />
            </div>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <label style={labelStyle}>Platform</label>
              <input value={editingGame.platform} onChange={e => setEditingGame({...editingGame, platform: e.target.value})} style={inputStyle} required />
            </div>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <label style={labelStyle}>Thumbnail URL</label>
              <input value={editingGame.thumbnailUrl} onChange={e => setEditingGame({...editingGame, thumbnailUrl: e.target.value})} style={inputStyle} />
            </div>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <label style={labelStyle}>Trailer URL</label>
              <input value={editingGame.trailerUrl} onChange={e => setEditingGame({...editingGame, trailerUrl: e.target.value})} style={inputStyle} />
            </div>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <label style={labelStyle}>Play Store URL</label>
              <input value={editingGame.playstoreUrl} onChange={e => setEditingGame({...editingGame, playstoreUrl: e.target.value})} style={inputStyle} />
            </div>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <label style={labelStyle}>Display Order</label>
              <input type="number" value={editingGame.order} onChange={e => setEditingGame({...editingGame, order: parseInt(e.target.value)})} style={inputStyle} />
            </div>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <label style={labelStyle}>Status</label>
              <select value={editingGame.status} onChange={e => setEditingGame({...editingGame, status: e.target.value})} style={inputStyle}>
                <option value="Released">Released</option>
                <option value="Coming Soon">Coming Soon</option>
              </select>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <label style={labelStyle}>Tags (comma separated)</label>
              <input value={editingGame.tags} onChange={e => setEditingGame({...editingGame, tags: e.target.value})} style={inputStyle} />
            </div>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <label style={labelStyle}>Modes (Name|Desc, ...)</label>
              <input value={editingGame.modes} onChange={e => setEditingGame({...editingGame, modes: e.target.value})} style={inputStyle} />
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', cursor: 'pointer' }}>
              <input
                type="checkbox"
                id="featured_edit"
                checked={editingGame.featured || false}
                onChange={e => setEditingGame({...editingGame, featured: e.target.checked})}
                style={{ width: '20px', height: '20px', accentColor: '#cc0000' }}
              />
              <label htmlFor="featured_edit" style={{ color: '#fff', fontWeight: 'bold', textTransform: 'uppercase' }}>Featured Game</label>
            </div>
            <div style={{ gridColumn: 'span 2', display: 'flex', flexDirection: 'column' }}>
              <label style={labelStyle}>Game Description</label>
              <textarea value={editingGame.description} onChange={e => setEditingGame({...editingGame, description: e.target.value})} style={{...inputStyle, minHeight: '80px'}} required />
            </div>
            <div style={{ gridColumn: 'span 2', display: 'flex', gap: '1rem', justifyContent: 'flex-end' }}>
              <button type="button" onClick={() => setEditingGame(null)} style={{ padding: '0.8rem 1.5rem', backgroundColor: '#444', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>Cancel</button>
              <button type="submit" style={{ padding: '0.8rem 1.5rem', backgroundColor: '#cc0000', color: '#fff', border: 'none', borderRadius: '4px', fontWeight: 'bold', textTransform: 'uppercase', cursor: 'pointer' }}>Save Changes</button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

const labelStyle = { display: 'block', color: '#aaa', marginBottom: '0.5rem', fontSize: '0.9rem', fontWeight: '500' };
const inputStyle = { padding: '0.8rem', backgroundColor: '#0a0a0a', border: '1px solid #333', borderRadius: '4px', color: '#fff' };
const btnStyle = { padding: '0.8rem', backgroundColor: '#cc0000', color: '#fff', border: 'none', borderRadius: '4px', fontWeight: 'bold', textTransform: 'uppercase', cursor: 'pointer' };

export default GamesManager;
