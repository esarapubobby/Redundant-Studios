import React from 'react';
import { Youtube, Linkedin, Instagram } from 'lucide-react';
import { useFirestoreContent } from '../../hooks/useFirestoreContent';
import { motion } from 'framer-motion';

const Founders = () => {
  const { content } = useFirestoreContent();
  const founders = content?.founders;

  if (!founders || founders.length === 0) return null;

  return (
    <section style={{ padding: '8rem 2rem', backgroundColor: '#0a0a0a' }}>
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        style={{ textAlign: 'center', fontSize: '2.5rem', color: '#fff', marginBottom: '4rem', textTransform: 'uppercase' }}
      >
        Our Founders
        <div style={{ width: '60px', height: '4px', backgroundColor: '#cc0000', margin: '10px auto 0' }}></div>
      </motion.h2>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
        gap: '4rem',
        maxWidth: '1200px',
        margin: '0 auto'
      }}>
        {founders.map((founder, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: idx * 0.2 }}
            whileHover={{ y: -10 }}
            style={{ textAlign: 'center', position: 'relative' }}
          >
            <div style={{ position: 'relative', width: '200px', height: '200px', margin: '0 auto 1.5rem' }}>
              <motion.img
                whileHover={{ scale: 1.05 }}
                src={founder.image || 'https://via.placeholder.com/200'}
                alt={founder.name}
                style={{
                  width: '100%',
                  height: '100%',
                  borderRadius: '50%',
                  objectFit: 'cover',
                  border: '4px solid #cc0000',
                  boxShadow: '0 0 20px rgba(204, 0, 0, 0.3)'
                }}
              />
            </div>
            <h3 style={{ fontSize: '1.8rem', color: '#fff', marginBottom: '0.5rem' }}>{founder.name}</h3>
            <p style={{ color: '#cc0000', fontWeight: 'bold', textTransform: 'uppercase', marginBottom: '1rem', fontSize: '1.1rem' }}>{founder.role}</p>
            <p style={{ color: '#ccc', marginBottom: '1.5rem', lineHeight: '1.6', fontSize: '1rem' }}>{founder.description}</p>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '1.5rem' }}>
              {founder.socials?.youtube && (
                <motion.a
                  href={founder.socials.youtube}
                  whileHover={{ scale: 1.2, color: '#fff' }}
                  style={{ color: '#ccc', transition: 'color 0.3s' }}
                >
                  <Youtube size={22} />
                </motion.a>
              )}
              {founder.socials?.linkedin && (
                <motion.a
                  href={founder.socials.linkedin}
                  whileHover={{ scale: 1.2, color: '#fff' }}
                  style={{ color: '#ccc', transition: 'color 0.3s' }}
                >
                  <Linkedin size={22} />
                </motion.a>
              )}
              {founder.socials?.instagram && (
                <motion.a
                  href={founder.socials.instagram}
                  whileHover={{ scale: 1.2, color: '#fff' }}
                  style={{ color: '#ccc', transition: 'color 0.3s' }}
                >
                  <Instagram size={22} />
                </motion.a>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Founders;
