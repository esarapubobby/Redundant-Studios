import { useState, useEffect } from 'react';
import { db } from '../firebase';
import { doc, onSnapshot } from 'firebase/firestore';

const DEFAULT_CONTENT = {
  studioName: 'Redundant Studios',
  hero: {
    headline: 'Redundant Studios',
    subheadline: 'Crafting immersive experiences and pushing the boundaries of game development.',
    backgroundImageUrl: 'https://via.placeholder.com/1920x1080'
  },
  about: {
    description: 'Redundant Studios is a passionate team of developers and artists dedicated to creating high-quality, engaging games. We believe in pushing technical boundaries and delivering unique experiences that resonate with players worldwide.',
    values: [
      { title: 'Innovation', description: 'Constantly exploring new ways to enhance gameplay and graphics.' },
      { title: 'Quality', description: 'Ensuring every detail is polished to perfection.' },
      { title: 'Passion', description: 'Creating games that we truly love to play.' }
    ]
  },
  contact: {
    email: 'contact@redundantstudios.com',
    discordUrl: '#',
    instagramUrl: '#',
    linkedinUrl: '#',
    youtubeUrl: '#',
    playstoreUrl: '#'
  },
  navbarLabels: [
    { name: 'Home', path: '/' },
    { name: 'Games', path: '/games' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ],
  visibility: {
    hero: true,
    featuredGames: true,
    founders: true,
    socialLinks: true
  },
  founders: [
    {
      name: 'Srinu',
      role: 'Founder & CEO',
      description: 'Visionary leader with a passion for creating cutting-edge gaming experiences.',
      image: 'https://via.placeholder.com/200',
      socials: { youtube: '#', linkedin: '#', instagram: '#' }
    },
    {
      name: 'Bobby',
      role: 'Co-Founder & Lead Dev',
      description: 'Technical wizard driving the engine and gameplay mechanics of our titles.',
      image: 'https://via.placeholder.com/200',
      socials: { youtube: '#', linkedin: '#', instagram: '#' }
    },
    {
      name: 'Badri',
      role: 'Co-Founder & Art Director',
      description: 'Creative force shaping the visual identity and atmosphere of our games.',
      image: 'https://via.placeholder.com/200',
      socials: { youtube: '#', linkedin: '#', instagram: '#' }
    }
  ],
  teamImages: {
    srinu: 'https://via.placeholder.com/150',
    bobby: 'https://via.placeholder.com/150',
    badri: 'https://via.placeholder.com/150'
  }
};

export const useFirestoreContent = (docId = 'main') => {
  const [content, setContent] = useState(DEFAULT_CONTENT);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const unsubscribe = onSnapshot(doc(db, 'content', docId),
      (snapshot) => {
        if (snapshot.exists()) {
          setContent(snapshot.data());
        }
        setLoading(false);
      },
      (err) => {
        console.error("Firestore error:", err);
        setError(err);
        setLoading(false);
      }
    );

    return () => unsubscribe();
  }, [docId]);

  return { content, loading, error };
};
