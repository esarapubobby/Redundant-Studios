import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Games from './pages/Games';
import About from './pages/About';
import Contact from './pages/Contact';
import AdminLogin from './pages/AdminLogin';
import AdminDashboard from './pages/AdminDashboard';
import ProtectedRoute from './components/admin/ProtectedRoute';
import HeroEditor from './pages/admin/HeroEditor';
import GamesManager from './pages/admin/GamesManager';
import AboutEditor from './pages/admin/AboutEditor';
import ContactEditor from './pages/admin/ContactEditor';
import SiteSettings from './pages/admin/SiteSettings';
import SeedPage from './pages/SeedPage';

function App() {
  return (
    <Router>
      <div style={{ backgroundColor: '#0a0a0a', minHeight: '100vh' }}>
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={
            <>
              <Navbar />
              <Home />
            </>
          } />
          <Route path="/games" element={
            <>
              <Navbar />
              <Games />
            </>
          } />
          <Route path="/about" element={
            <>
              <Navbar />
              <About />
            </>
          } />
          <Route path="/contact" element={
            <>
              <Navbar />
              <Contact />
            </>
          } />
          <Route path="/seed" element={<SeedPage />} />

          {/* Admin Routes */}
          <Route path="/admin/login" element={<AdminLogin />} />
          <Route path="/admin" element={
            <ProtectedRoute>
              <AdminDashboard />
            </ProtectedRoute>
          }>
            <Route path="hero" element={<HeroEditor />} />
            <Route path="games" element={<GamesManager />} />
            <Route path="about" element={<AboutEditor />} />
            <Route path="contact" element={<ContactEditor />} />
            <Route path="settings" element={<SiteSettings />} />
          </Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
