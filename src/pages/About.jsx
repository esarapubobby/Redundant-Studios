import React from 'react';
import { useFirestoreContent } from '../hooks/useFirestoreContent';

const About = () => {
  const { content, loading } = useFirestoreContent();
  const about = content?.about;

  if (loading) return <div style={{ textAlign: 'center', padding: '5rem', color: '#fff' }}>Loading...</div>;
  if (!about) return <div style={{ textAlign: 'center', padding: '5rem', color: '#fff' }}>About content not found.</div>;

  const team = [
    { name: 'Srinu', role: 'Founder & CEO', image: content?.teamImages?.srinu || 'https://via.placeholder.com/150' },
    { name: 'Bobby', role: 'Co-Founder & Lead Dev', image: content?.teamImages?.bobby || 'https://via.placeholder.com/150' },
    { name: 'Badri', role: 'Co-Founder & Art Director', image: content?.teamImages?.badri || 'https://via.placeholder.com/150' },
  ];

  return (
    <div style={{ padding: '5rem 2rem', backgroundColor: '#0a0a0a', minHeight: '100vh' }}>
      <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
        <h1 style={{ fontSize: '3rem', color: '#fff', marginBottom: '2rem', textTransform: 'uppercase' }}>About Us</h1>
        <p style={{ fontSize: '1.2rem', color: '#ccc', lineHeight: '1.8', marginBottom: '4rem' }}>
          {about.description}
        </p>

        <h2 style={{ fontSize: '2rem', color: '#fff', marginBottom: '3rem', textTransform: 'uppercase' }}>Our Team</h2>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '2rem',
          marginBottom: '4rem'
        }}>
          {team.map((member, idx) => (
            <div key={idx} style={{ textAlign: 'center' }}>
              <img src={member.image} alt={member.name} style={{ width: '120px', height: '120px', borderRadius: '50%', objectFit: 'cover', border: '3px solid #cc0000', marginBottom: '1rem' }} />
              <h3 style={{ fontSize: '1.4rem', color: '#fff', margin: '0.5rem 0' }}>{member.name}</h3>
              <p style={{ color: '#cc0000', fontWeight: 'bold', fontSize: '0.9rem', textTransform: 'uppercase' }}>{member.role}</p>
            </div>
          ))}
        </div>

        {about.values && (
          <>
            <h2 style={{ fontSize: '2rem', color: '#fff', marginBottom: '2rem', textTransform: 'uppercase' }}>Our Values</h2>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
              gap: '2rem',
              textAlign: 'left'
            }}>
              {about.values.map((val, idx) => (
                <div key={idx} style={{ padding: '1.5rem', backgroundColor: '#1a1a1a', borderLeft: '4px solid #cc0000' }}>
                  <h3 style={{ color: '#fff', marginBottom: '0.5rem' }}>{val.title}</h3>
                  <p style={{ color: '#ccc' }}>{val.description}</p>
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default About;
