
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ThriftPartners from "@/components/ThriftPartners";
import Features from "@/components/Features";
import HowItWorks from "@/components/HowItWorks";
import OutfitOfTheDay from "@/components/OutfitOfTheDay";
import AppExperience from "@/components/AppExperience";
import SocialProof from "@/components/SocialProof";
import FoundersTeam from "@/components/FoundersTeam";
import Benefits from "@/components/Benefits";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main>
        <Hero />
        <ThriftPartners />
        <Features />
        <HowItWorks />
        <OutfitOfTheDay />
        <AppExperience />
        <Benefits />
        <SocialProof />
        <FoundersTeam />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
