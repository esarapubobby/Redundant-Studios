import React from 'react';
import { Mail, Instagram, Linkedin, Youtube, Play } from 'lucide-react';
import { useFirestoreContent } from '../hooks/useFirestoreContent';

const Contact = () => {
  const { content, loading } = useFirestoreContent();
  const contact = content?.contact;

  if (loading) return <div style={{ textAlign: 'center', padding: '5rem', color: '#fff' }}>Loading...</div>;
  if (!contact) return <div style={{ textAlign: 'center', padding: '5rem', color: '#fff' }}>Contact content not found.</div>;

  const socials = [
    { name: 'Instagram', icon: <Instagram />, url: contact.instagramUrl },
    { name: 'LinkedIn', icon: <Linkedin />, url: contact.linkedinUrl },
    { name: 'YouTube', icon: <Youtube />, url: contact.youtubeUrl },
    { name: 'Play Store', icon: <Play />, url: contact.playstoreUrl },
  ].filter(s => s.url);

  return (
    <div style={{ padding: '5rem 2rem', backgroundColor: '#0a0a0a', minHeight: '100vh', textAlign: 'center' }}>
      <h1 style={{ fontSize: '3rem', color: '#fff', marginBottom: '2rem', textTransform: 'uppercase' }}>Get In Touch</h1>
      <p style={{ fontSize: '1.2rem', color: '#ccc', marginBottom: '3rem', maxWidth: '600px', margin: '0 auto 3rem' }}>
        Have questions or just want to say hi? Reach out to us through any of the following channels.
      </p>

      <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '2rem',
        maxWidth: '600px',
        margin: '0 auto'
      }}>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '1rem',
          padding: '1.5rem 2rem',
          backgroundColor: '#1a1a1a',
          border: '1px solid #333',
          borderRadius: '8px',
          width: '100%',
          color: '#fff',
          fontSize: '1.2rem'
        }}>
          <Mail color="#cc0000" />
          <span style={{ textDecoration: 'none', color: 'inherit' }}>{contact.email}</span>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))',
          gap: '1rem',
          width: '100%'
        }}>
          {socials.map((social, idx) => (
            <a
              key={idx}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                padding: '1rem',
                backgroundColor: '#1a1a1a',
                border: '1px solid #333',
                borderRadius: '8px',
                color: '#ccc',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '10px',
                transition: 'all 0.3s',
                textDecoration: 'none',
                fontWeight: '500',
                textTransform: 'uppercase'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = '#cc0000';
                e.currentTarget.style.color = '#fff';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = '#333';
                e.currentTarget.style.color = '#ccc';
              }}
            >
              {social.icon}
              <span>{social.name}</span>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Contact;
