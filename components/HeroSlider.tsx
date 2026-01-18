
import React, { useState, useEffect } from 'react';
import { ArrowRight, Play, X } from 'lucide-react';

const slides = [
  {
    image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&q=80&w=1920',
    title: 'ავტო იმპორტი ამერიკიდან',
    subtitle: 'პირდაპირი წვდომა აშშ-ს წამყვან აუქციონებზე და უსაფრთხო გადაზიდვა საქართველომდე.',
    tag: 'PREMIUM AUTO IMPORT',
    // აქ შეგიძლიათ ჩასვათ თქვენი ვიდეოს ლინკი (მაგ: YouTube embed ან პირდაპირი MP4 ლინკი)
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1' 
  },
  {
    image: 'https://images.unsplash.com/photo-1580273916550-e323be2ae537?auto=format&fit=crop&q=80&w=1920',
    title: 'უსაფრთხო გადაზიდვები',
    subtitle: 'ყველაზე ხელმისაწვდომი ტარიფები საკონტეინერო გადაზიდვებზე ნებისმიერი პორტიდან.',
    tag: 'RELIABLE LOGISTICS',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1'
  }
];

const HeroSlider: React.FC = () => {
  const [current, setCurrent] = useState(0);
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  useEffect(() => {
    if (isVideoOpen) return; // ვიდეოს ყურებისას სლაიდერი არ გადავიდეს
    const timer = setInterval(() => setCurrent(prev => (prev === slides.length - 1 ? 0 : prev + 1)), 8000);
    return () => clearInterval(timer);
  }, [isVideoOpen]);

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
                <h2 className="text-4xl md:text-6xl font-black text-white mb-8 leading-[1.1] tracking-tighter uppercase animate-in fade-in slide-in-from-left duration-1000">
                  {slide.title}
                </h2>
                <p className="text-lg md:text-xl text-slate-200 mb-12 max-w-xl font-medium leading-relaxed opacity-90 animate-in fade-in slide-in-from-left duration-1000 delay-200">
                  {slide.subtitle}
                </p>
                <div className="flex flex-wrap gap-6 animate-in fade-in slide-in-from-bottom duration-1000 delay-500">
                  <a href="#auctions" className="px-12 py-5 bg-white text-[#191c30] rounded-full font-black text-sm transition-all shadow-2xl flex items-center gap-3 hover:bg-sky-500 hover:text-white group">
                    დაიწყე ძიება <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                  </a>
                  <button 
                    onClick={() => setIsVideoOpen(true)}
                    className="flex items-center gap-4 text-white font-bold group outline-none"
                  >
                    <div className="w-16 h-16 rounded-full border border-white/20 flex items-center justify-center hover:bg-white/10 transition-colors backdrop-blur-sm shadow-xl">
                      <Play size={24} className="fill-current ml-1" />
                    </div>
                    როგორ მუშაობს?
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-30 flex gap-4">
        {slides.map((_, i) => (
          <button 
            key={i} 
            onClick={() => setCurrent(i)} 
            className={`h-1.5 rounded-full transition-all duration-500 ${i === current ? 'w-16 bg-sky-500' : 'w-6 bg-white/20'}`} 
          />
        ))}
      </div>

      {/* Video Popup Modal */}
      {isVideoOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-10 animate-in fade-in duration-300">
          <div className="absolute inset-0 bg-[#191c30]/95 backdrop-blur-xl" onClick={() => setIsVideoOpen(false)} />
          <div className="relative w-full max-w-5xl aspect-video bg-black rounded-3xl overflow-hidden shadow-2xl border border-white/10 z-[101]">
            <button 
              onClick={() => setIsVideoOpen(false)}
              className="absolute top-6 right-6 w-12 h-12 bg-white/10 hover:bg-white/20 text-white rounded-full flex items-center justify-center transition-all z-[102] backdrop-blur-md"
            >
              <X size={24} />
            </button>
            <iframe 
              src={slides[current].videoUrl}
              className="w-full h-full border-none"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default HeroSlider;
