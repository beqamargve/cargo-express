
import React from 'react';
import { Ship, Shield, Users, Lock, FileCheck, Headphones, Zap } from 'lucide-react';

const services = [
  { 
    icon: <Ship />, 
    title: 'საკონტეინერო გადაზიდვები', 
    desc: 'სრული ლოჯისტიკური სერვისი ამერიკის ყველა პორტიდან უმოკლეს ვადებში.' 
  },
  { 
    icon: <Zap />, 
    title: 'სპეც პირობები დილერებს', 
    desc: 'ექსკლუზიური ტარიფები და დაბალი საკომისიო ავტო-დილერებისთვის.' 
  },
  { 
    icon: <Lock />, 
    title: 'დახურული აუქციონები', 
    desc: 'წვდომა Copart, IAAI და Manheim-ის სპეციალურ დახურულ გაყიდვებზე.' 
  },
  { 
    icon: <FileCheck />, 
    title: 'Carfax სრულიად უფასოდ', 
    desc: 'ნებისმიერი ლოტის ისტორიის დეტალური შემოწმება ჩვენს მომხმარებელს არაფერი უჯდება.' 
  },
  { 
    icon: <Users />, 
    title: 'პერსონალური მენეჯერი', 
    desc: 'ინდივიდუალური მიდგომა და კონსულტაცია ავტომობილის შერჩევის ეტაპზე.' 
  },
  { 
    icon: <Shield />, 
    title: 'დაზღვეული ტრანსპორტირება', 
    desc: 'თქვენი ტვირთი დაზღვეულია გამომგზავნ პორტამდე და ფოთის პორტამდე.' }
];

const Services: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-6">
      <div className="text-center mb-16 lg:mb-24">
        <span className="text-sky-500 font-black tracking-widest text-[11px] uppercase mb-4 block">რატომ AUTOPORT PRO?</span>
        <h2 className="text-4xl lg:text-5xl font-black text-[#191c30] mb-6 tracking-tighter uppercase">ჩვენი მომსახურება</h2>
        <div className="w-20 h-2 bg-[#191c30] mx-auto rounded-full" />
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((s, i) => (
          <div key={i} className="p-10 bg-white rounded-[2.5rem] border border-slate-100 hover:border-sky-500/30 transition-all group hover:shadow-2xl hover:shadow-slate-100 hover:-translate-y-2">
            <div className="w-14 h-14 bg-slate-50 text-[#191c30] rounded-2xl flex items-center justify-center mb-8 border border-slate-100 group-hover:bg-[#191c30] group-hover:text-white transition-all shadow-sm">
              {/* Cast to React.ReactElement<any> to fix TypeScript error regarding 'size' prop when cloning */}
              {React.cloneElement(s.icon as React.ReactElement<any>, { size: 28 })}
            </div>
            <h3 className="text-xl font-bold text-[#191c30] mb-4">{s.title}</h3>
            <p className="text-slate-500 text-[15px] leading-relaxed font-medium">{s.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
