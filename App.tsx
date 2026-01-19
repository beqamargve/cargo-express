
import React from 'react';
import Navbar from './components/Navbar';
import HeroSlider from './components/HeroSlider';
import VinSearch from './components/VinSearch';
import CustomsCalculator from './components/CustomsCalculator';
import AuctionListings from './components/AuctionListings';
import Services from './components/Services';
import DealerSection from './components/DealerSection';
import AboutUs from './components/AboutUs';
import Footer from './components/Footer';
import ChatBot from './components/ChatBot';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#111322] text-white">
      <Navbar />
      
      <main>
        <section id="home">
          <HeroSlider />
          <VinSearch />
        </section>

        <section id="about" className="py-32 bg-[#111322]">
          <AboutUs />
        </section>

        <section id="services" className="py-24 bg-[#191c30]/20">
          <Services />
        </section>

        <section id="calculator" className="py-24 bg-[#111322]">
          <CustomsCalculator />
        </section>

        <section id="auctions" className="py-24 bg-[#191c30]/20">
          <AuctionListings />
        </section>

        <section id="dealers" className="py-24 bg-[#111322]">
          <DealerSection />
        </section>
      </main>

      <Footer />
      <ChatBot />
    </div>
  );
};

export default App;
