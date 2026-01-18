
import React from 'react';
import { Facebook, Instagram, Twitter, Mail, Phone, Ship } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#191c30] pt-24 pb-12 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-16 lg:gap-24 mb-20">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-3 mb-10">
              <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-lg">
                <Ship className="text-[#191c30]" size={24} />
              </div>
              <h1 className="text-2xl font-black text-white tracking-tighter">AUTOPORT<span className="text-sky-500">PRO</span></h1>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed mb-10 font-medium">აშშ-ს ავტო აუქციონების ოფიციალური წარმომადგენელი საქართველოში. ხარისხი და უსაფრთხოება ყველა ეტაპზე.</p>
            <div className="flex gap-4">
              {[Facebook, Instagram, Twitter].map((Icon, i) => (
                <a key={i} href="#" className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-white hover:text-[#191c30] transition-all shadow-sm"><Icon size={20} /></a>
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="text-[12px] font-black text-white uppercase tracking-[0.25em] mb-10">მენიუ</h4>
            <ul className="space-y-5 text-[14px] font-bold text-slate-400">
              <li><a href="#home" className="hover:text-sky-400 transition-colors">მთავარი</a></li>
              <li><a href="#services" className="hover:text-sky-400 transition-colors">სერვისები</a></li>
              <li><a href="#calculator" className="hover:text-sky-400 transition-colors">განბაჟება</a></li>
              <li><a href="#auctions" className="hover:text-sky-400 transition-colors">აუქციონები</a></li>
              <li><a href="#dealers" className="hover:text-sky-400 transition-colors">დილერები</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-[12px] font-black text-white uppercase tracking-[0.25em] mb-10">კონტაქტი</h4>
            <ul className="space-y-6 text-[14px] font-bold text-slate-400">
              <li className="flex items-center gap-4">
                <div className="w-10 h-10 bg-sky-500/10 text-sky-400 rounded-xl flex items-center justify-center border border-sky-500/20">
                  <Phone size={18}/>
                </div>
                <span className="text-white">+995 599 000 000</span>
              </li>
              <li className="flex items-center gap-4">
                <div className="w-10 h-10 bg-sky-500/10 text-sky-400 rounded-xl flex items-center justify-center border border-sky-500/20">
                  <Mail size={18}/>
                </div>
                <span className="text-white">pro@autoport.ge</span>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-[12px] font-black text-white uppercase tracking-[0.25em] mb-10">სიახლეები</h4>
            <p className="text-slate-400 text-xs mb-6 font-medium leading-relaxed">მიიღეთ ინფორმაცია ცხელ ლოტებზე და სპეც შემოთავაზებებზე პირველებმა.</p>
            <div className="relative">
              <input type="email" placeholder="თქვენი ელ-ფოსტა" className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-xs text-white font-bold focus:outline-none focus:ring-2 focus:ring-sky-500/20 placeholder:text-slate-500" />
              <button className="absolute right-2 top-2 bottom-2 bg-white text-[#191c30] px-5 rounded-[1rem] text-[10px] font-black uppercase tracking-widest hover:bg-sky-500 hover:text-white transition-all">OK</button>
            </div>
          </div>
        </div>
        
        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8 text-[11px] font-black text-slate-500 uppercase tracking-[0.2em]">
          <span>&copy; {new Date().getFullYear()} AUTOPORT PRO GEORGIA</span>
          <div className="flex gap-10">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
