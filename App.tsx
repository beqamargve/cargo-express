
import React from 'react';
import Navbar from './components/Navbar';
import HeroSlider from './components/HeroSlider';
import VinSearch from './components/VinSearch';
import CustomsCalculator from './components/CustomsCalculator';
import AuctionListings from './components/AuctionListings';
import Services from './components/Services';
import DealerSection from './components/DealerSection';
import Footer from './components/Footer';
import ChatBot from './components/ChatBot';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-white text-[#191c30]">
      <Navbar />
      
      <main>
        <section id="home">
          <HeroSlider />
          <VinSearch />
        </section>

        <section id="services" className="py-24 md:pt-32 bg-slate-50">
          <Services />
        </section>

        <section id="calculator" className="py-24 bg-white">
          <CustomsCalculator />
        </section>

        <section id="auctions" className="py-24 bg-slate-50">
          <AuctionListings />
        </section>

        <section id="dealers" className="py-24 bg-white">
          <DealerSection />
        </section>
      </main>

      <Footer />
      <ChatBot />
    </div>
  );
};

export default App;
