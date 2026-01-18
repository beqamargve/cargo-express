
import React, { useState, useEffect } from 'react';
import { Menu, X, Ship } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'მთავარი', href: '#home' },
    { name: 'სერვისები', href: '#services' },
    { name: 'განბაჟება', href: '#calculator' },
    { name: 'აუქციონები', href: '#auctions' },
    { name: 'დილერები', href: '#dealers' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 ${isScrolled ? 'bg-white/95 backdrop-blur-md py-4 border-b border-slate-200 shadow-sm' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <a href="#home" className="flex items-center gap-3 group cursor-pointer">
          <div className="w-10 h-10 bg-[#191c30] rounded-xl flex items-center justify-center shadow-lg transition-transform group-hover:scale-105">
            <Ship className="text-white w-6 h-6" />
          </div>
          <div>
            <h1 className="text-xl font-black tracking-tighter text-[#191c30]">AUTOPORT<span className="text-sky-500">PRO</span></h1>
          </div>
        </a>

        <div className="hidden md:flex items-center gap-8 lg:gap-12">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`text-[13px] font-bold uppercase tracking-widest transition-colors ${isScrolled ? 'text-slate-600 hover:text-[#191c30]' : 'text-white hover:text-sky-400'}`}
            >
              {link.name}
            </a>
          ))}
          <button className={`px-7 py-2.5 rounded-full text-[13px] font-black transition-all ${isScrolled ? 'bg-[#191c30] text-white hover:bg-sky-600' : 'bg-white text-[#191c30] hover:bg-sky-500 hover:text-white shadow-xl'}`}>
            კაბინეტი
          </button>
        </div>

        <button className={`md:hidden ${isScrolled ? 'text-[#191c30]' : 'text-white'}`} onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      
      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-slate-100 absolute w-full left-0 p-8 flex flex-col gap-6 shadow-2xl animate-in slide-in-from-top duration-300">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-base font-black text-[#191c30] uppercase tracking-widest border-b border-slate-50 pb-2"
            >
              {link.name}
            </a>
          ))}
          <button className="bg-[#191c30] text-white py-4 rounded-2xl font-black text-sm uppercase tracking-widest shadow-xl">კაბინეტი</button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
