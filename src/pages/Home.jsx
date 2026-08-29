import React from 'react';
import Hero from '../components/home/Hero';
import FeaturedGames from '../components/home/FeaturedGames';
import FeaturedGameSection from '../components/home/FeaturedGameSection';
import Founders from '../components/home/Founders';
import SocialLinks from '../components/home/SocialLinks';
import { useFirestoreContent } from '../hooks/useFirestoreContent';

const Home = () => {
  const { content, loading } = useFirestoreContent();

  if (loading) return <div style={{ textAlign: 'center', padding: '5rem', color: '#fff' }}>Loading...</div>;
  if (!content) return <div style={{ textAlign: 'center', padding: '5rem', color: '#fff' }}>Content not found.</div>;

  const visibility = content?.visibility || {};

  return (
    <div>
      {visibility.hero !== false && <Hero />}
      {visibility.featuredGame !== false && <FeaturedGameSection />}
      {visibility.featuredGames !== false && <FeaturedGames />}
      {visibility.founders !== false && <Founders />}
      {visibility.socialLinks !== false && <SocialLinks />}
    </div>
  );
};

export default Home;
