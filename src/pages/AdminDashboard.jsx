import React from 'react';
import { Outlet, Link, useNavigate } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import { auth } from '../firebase';
import { LayoutDashboard, Gamepad2, Info, Mail, Settings, LogOut } from 'lucide-react';

const AdminDashboard = () => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    await signOut(auth);
    navigate('/admin/login');
  };

  const menuItems = [
    { name: 'Hero Editor', path: '/admin/hero', icon: <LayoutDashboard size={20} /> },
    { name: 'Games Manager', path: '/admin/games', icon: <Gamepad2 size={20} /> },
    { name: 'About Editor', path: '/admin/about', icon: <Info size={20} /> },
    { name: 'Contact Editor', path: '/admin/contact', icon: <Mail size={20} /> },
    { name: 'Site Settings', path: '/admin/settings', icon: <Settings size={20} /> },
  ];

  return (
    <div style={{ display: 'flex', height: '100vh', backgroundColor: '#0a0a0a', color: '#fff' }}>
      {/* Sidebar */}
      <div style={{
        width: '260px',
        backgroundColor: '#111',
        borderRight: '1px solid #333',
        display: 'flex',
        flexDirection: 'column',
        padding: '2rem 0'
      }}>
        <div style={{ padding: '0 2rem', marginBottom: '2rem' }}>
          <h2 style={{ fontSize: '1.2rem', color: '#cc0000', textTransform: 'uppercase', fontWeight: 'bold' }}>Admin Panel</h2>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', padding: '0 1rem' }}>
          {menuItems.map(item => (
            <Link
              key={item.path}
              to={item.path}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                padding: '0.8rem 1rem',
                color: '#ccc',
                textDecoration: 'none',
                borderRadius: '4px',
                transition: 'all 0.3s'
              }}
              onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#222'}
              onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
            >
              {item.icon}
              <span>{item.name}</span>
            </Link>
          ))}
        </div>

        <div style={{ marginTop: 'auto', padding: '0 1rem' }}>
          <button
            onClick={handleLogout}
            style={{
              width: '100%',
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              padding: '0.8rem 1rem',
              backgroundColor: 'transparent',
              color: '#ff4444',
              border: '1px solid #442222',
              borderRadius: '4px',
              cursor: 'pointer',
              fontWeight: 'bold',
              textTransform: 'uppercase',
              transition: 'all 0.3s'
            }}
            onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#221111'}
            onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
          >
            <LogOut size={20} />
            Logout
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div style={{ flex: 1, overflowY: 'auto', padding: '2rem' }}>
        <Outlet />
      </div>
    </div>
  );
};

export default AdminDashboard;
