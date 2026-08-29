import React from 'react';
import { Instagram, Linkedin, Youtube, Play } from 'lucide-react';
import { useFirestoreContent } from '../../hooks/useFirestoreContent';

const SocialLinks = () => {
  const { content } = useFirestoreContent();
  const contact = content?.contact;

  if (!contact) return null;

  const links = [
    { name: 'Instagram', icon: <Instagram />, url: contact.instagramUrl },
    { name: 'LinkedIn', icon: <Linkedin />, url: contact.linkedinUrl },
    { name: 'Discord', icon: <div style={{ fontSize: '12px', fontWeight: 'bold' }}>DSC</div>, url: contact.discordUrl },
    { name: 'YouTube', icon: <Youtube />, url: contact.youtubeUrl },
    { name: 'Play Store', icon: <Play />, url: contact.playstoreUrl },
  ].filter(l => l.url);

  return (
    <div style={{
      padding: '3rem 2rem',
      backgroundColor: '#0a0a0a',
      display: 'flex',
      justifyContent: 'center',
      gap: '2rem',
      borderTop: '1px solid #333'
    }}>
      {links.map((link, idx) => (
        <a
          key={idx}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            color: '#ccc',
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            transition: 'color 0.3s'
          }}
          onMouseEnter={(e) => e.target.style.color = '#cc0000'}
          onMouseLeave={(e) => e.target.style.color = '#ccc'}
        >
          {link.icon}
          <span style={{ fontWeight: '500', textTransform: 'uppercase', fontSize: '0.9rem' }}>{link.name}</span>
        </a>
      ))}
    </div>
  );
};

export default SocialLinks;
