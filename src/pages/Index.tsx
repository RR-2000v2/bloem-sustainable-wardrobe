
import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import HowItWorks from '../components/HowItWorks';
import Features from '../components/Features';
import ShoppingRack from '../components/ShoppingRack';
import Benefits from '../components/Benefits';
import ThriftPartners from '../components/ThriftPartners';
import SocialProof from '../components/SocialProof';
import OutfitOfTheDay from '../components/OutfitOfTheDay';
import FAQ from '../components/FAQ';
import FoundersTeam from '../components/FoundersTeam';
import CTA from '../components/CTA';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="flex flex-col min-h-[calc(100vh-4rem)]">
        <Hero />
        <HowItWorks />
        <Features />
        <ShoppingRack />
        <Benefits />
        <ThriftPartners />
        <SocialProof />
        <OutfitOfTheDay />
        <FAQ />
        <FoundersTeam />
        <CTA />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
