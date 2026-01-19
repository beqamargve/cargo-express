
import React, { useState, useEffect } from 'react';
import { ArrowRight, Play, X, Video, Info, Phone, Ship } from 'lucide-react';

const slides = [
  {
    image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&q=80&w=1920',
    title: 'ავტო იმპორტი ამერიკიდან',
    subtitle: 'პირდაპირი წვდომა აშშ-ს წამყვან აუქციონებზე და უსაფრთხო გადაზიდვა საქართველომდე.',
    tag: 'PREMIUM AUTO IMPORT'
  },
  {
    image: 'https://images.unsplash.com/photo-1580273916550-e323be2ae537?auto=format&fit=crop&q=80&w=1920',
    title: 'უსაფრთხო გადაზიდვები',
    subtitle: 'ყველაზე ხელმისაწვდომი ტარიფები საკონტეინერო გადაზიდვებზე ნებისმიერი პორტიდან.',
    tag: 'RELIABLE LOGISTICS'
  }
];

const HeroSlider: React.FC = () => {
  const [current, setCurrent] = useState(0);
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => setCurrent(prev => (prev === slides.length - 1 ? 0 : prev + 1)), 8000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative h-screen overflow-hidden bg-[#191c30]">
      {slides.map((slide, index) => (
        <div key={index} className={`absolute inset-0 transition-all duration-1000 ${index === current ? 'opacity-100 scale-100' : 'opacity-0 scale-105'}`}>
          <div className="absolute inset-0 bg-gradient-to-r from-[#191c30]/90 via-[#191c30]/50 to-transparent z-10" />
          <img src={slide.image} className="w-full h-full object-cover" alt="" />
          <div className="absolute inset-0 z-20 flex flex-col justify-center">
            <div className="max-w-7xl mx-auto px-6 w-full">
              <div className="max-w-3xl">
                <span className="text-sky-400 font-black tracking-[0.4em] text-[11px] uppercase mb-6 block animate-in fade-in slide-in-from-left duration-700">{slide.tag}</span>
                <h2 className="text-5xl md:text-7xl font-black text-white mb-8 leading-[1] tracking-tighter uppercase animate-in fade-in slide-in-from-left duration-1000">
                  {slide.title}
                </h2>
                <p className="text-lg md:text-xl text-slate-200 mb-12 max-w-xl font-medium leading-relaxed opacity-90 animate-in fade-in slide-in-from-left duration-1000 delay-200">
                  {slide.subtitle}
                </p>
                <div className="flex flex-wrap gap-6 items-center animate-in fade-in slide-in-from-bottom duration-1000 delay-500">
                  <a href="#auctions" className="px-12 py-5 bg-sky-500 text-white rounded-full font-black text-xs tracking-widest uppercase transition-all shadow-2xl flex items-center gap-3 hover:bg-white hover:text-slate-900 group">
                    დაიწყე ძიება <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                  </a>
                  
                  {/* ვიდეო ფლეიერის ღილაკი */}
                  <button 
                    onClick={() => setIsVideoOpen(true)}
                    className="flex items-center gap-4 text-white font-bold group cursor-pointer"
                  >
                    <div className="w-16 h-16 rounded-full border border-white/20 flex items-center justify-center bg-white/5 hover:bg-sky-500 hover:border-sky-400 transition-all duration-300 backdrop-blur-sm shadow-xl">
                      <Play size={24} className="fill-current ml-1" />
                    </div>
                    <span className="text-sm uppercase tracking-widest border-b border-transparent group-hover:border-sky-500 transition-all">ვიდეო ტური</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* სლაიდერის ინდიკატორები */}
      <div className="absolute bottom-12 left-6 lg:left-12 z-30 flex gap-4">
        {slides.map((_, i) => (
          <button 
            key={i} 
            onClick={() => setCurrent(i)} 
            className={`h-1.5 rounded-full transition-all duration-500 ${i === current ? 'w-20 bg-sky-500' : 'w-8 bg-white/20'}`} 
          />
        ))}
      </div>

      {/* პოპაპ მენიუ და ვიდეო */}
      {isVideoOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8 modal-overlay">
          <div 
            className="absolute inset-0 bg-[#111322]/95 backdrop-blur-xl"
            onClick={() => setIsVideoOpen(false)}
          />
          
          <div className="relative w-full max-w-6xl glass rounded-[3rem] overflow-hidden shadow-3xl modal-content flex flex-col lg:flex-row h-[90vh] lg:h-auto border border-white/10">
            {/* მარცხენა მხარე: ვიდეო ფლეიერი */}
            <div className="flex-1 bg-black relative flex items-center justify-center aspect-video lg:aspect-auto min-h-[300px] lg:min-h-[500px]">
              <button 
                className="absolute top-6 left-6 z-10 w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-colors"
                onClick={() => setIsVideoOpen(false)}
              >
                <X size={20} />
              </button>
              
              <iframe 
                className="w-full h-full absolute inset-0"
                src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1" 
                title="AutoPort Video Guide" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen
              ></iframe>
            </div>

            {/* მარჯვენა მხარე: სწრაფი მენიუ */}
            <div className="w-full lg:w-[400px] p-10 lg:p-14 bg-[#191c30] flex flex-col border-l border-white/5">
              <div className="flex items-center gap-3 mb-12">
                <Ship className="text-sky-500" size={24} />
                <h4 className="text-lg font-black uppercase tracking-widest text-white text-mont">QUICK MENU</h4>
              </div>

              <div className="space-y-4 flex-1">
                <button className="w-full p-6 rounded-2xl bg-white/5 border border-white/5 hover:border-sky-500/50 hover:bg-sky-500/10 text-left transition-all group">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-xl bg-sky-500/20 flex items-center justify-center text-sky-400">
                        <Info size={20} />
                      </div>
                      <span className="font-bold text-sm uppercase tracking-wide text-slate-200">პირობები</span>
                    </div>
                    <ArrowRight size={16} className="text-slate-600 group-hover:text-sky-400 group-hover:translate-x-1 transition-all" />
                  </div>
                </button>

                <button className="w-full p-6 rounded-2xl bg-white/5 border border-white/5 hover:border-sky-500/50 hover:bg-sky-500/10 text-left transition-all group">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-xl bg-sky-500/20 flex items-center justify-center text-sky-400">
                        <Phone size={20} />
                      </div>
                      <span className="font-bold text-sm uppercase tracking-wide text-slate-200">კონსულტაცია</span>
                    </div>
                    <ArrowRight size={16} className="text-slate-600 group-hover:text-sky-400 group-hover:translate-x-1 transition-all" />
                  </div>
                </button>
              </div>

              <div className="mt-12 pt-12 border-t border-white/5">
                <div className="flex items-center gap-2 mb-6">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest">LIVE STATUS: 24/7</p>
                </div>
                <button 
                  onClick={() => setIsVideoOpen(false)}
                  className="w-full py-5 bg-white text-slate-900 rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-sky-500 hover:text-white transition-all shadow-xl shadow-black/20"
                >
                  დახურვა
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default HeroSlider;
