
import React from 'react';
import { LayoutDashboard, Users2, Database, Zap, ArrowUpRight, Lock, Percent } from 'lucide-react';

const DealerSection: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-6">
      <div className="relative bg-[#191c30] rounded-[4rem] p-12 lg:p-20 border border-white/5 overflow-hidden flex flex-col lg:flex-row items-center gap-20">
        {/* Abstract Background Decor */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-sky-500/10 blur-[100px] rounded-full -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500/10 blur-[80px] rounded-full translate-y-1/2 -translate-x-1/2" />

        <div className="flex-1 z-10">
          <span className="text-sky-400 font-black tracking-[0.4em] text-[11px] uppercase mb-8 block">PARTNER NETWORK</span>
          <h2 className="text-5xl lg:text-7xl font-black text-white mb-10 leading-[0.9] tracking-tighter uppercase">
            ბიზნესი <br /> <span className="text-sky-500">დილერებისთვის</span>
          </h2>
          <p className="text-slate-300 text-lg font-medium mb-12 leading-relaxed max-w-lg opacity-80">
            მიიღეთ სპეც პირობები, დაბალი ფასები და სრული წვდომა დახურულ აუქციონებზე. ჩვენი პლატფორმა შექმნილია თქვენი ბიზნესის ზრდისთვის.
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-12">
            {[
              { i: <Percent size={20}/>, t: 'სპეც ტარიფები', d: 'დაბალი საკომისიოები' },
              { i: <Lock size={20}/>, t: 'დახურული ლოტები', d: 'ექსკლუზიური წვდომა' },
              { i: <LayoutDashboard size={20}/>, t: 'მართვის პანელი', d: 'პროცესების კონტროლი' },
              { i: <Zap size={20}/>, t: 'სწრაფი ბიდინგი', d: 'ავტომატური ფსონები' },
            ].map((item, idx) => (
              <div key={idx} className="flex gap-4">
                <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center text-sky-400 shrink-0 border border-white/10">
                  {item.i}
                </div>
                <div>
                  <h4 className="text-white font-bold text-sm uppercase tracking-wide">{item.t}</h4>
                  <p className="text-slate-400 text-xs mt-1">{item.d}</p>
                </div>
              </div>
            ))}
          </div>

          <button className="px-12 py-5 bg-sky-500 hover:bg-white hover:text-[#191c30] text-white rounded-2xl font-black text-sm transition-all flex items-center gap-4 shadow-2xl shadow-sky-500/20 active:scale-95">
            გახდი პარტნიორი <ArrowUpRight size={22} />
          </button>
        </div>

        <div className="w-full lg:w-[520px] bg-white rounded-[3rem] p-10 lg:p-12 shadow-2xl relative z-10">
          <div className="flex justify-between items-center mb-10 border-b border-slate-100 pb-6">
            <h5 className="text-[13px] font-black text-[#191c30] uppercase tracking-widest">დილერის კაბინეტი</h5>
            <div className="flex gap-1.5">
              <div className="w-2 h-2 bg-slate-200 rounded-full" />
              <div className="w-2 h-2 bg-slate-200 rounded-full" />
              <div className="w-2 h-2 bg-sky-500 rounded-full animate-pulse" />
            </div>
          </div>
          
          <div className="space-y-6">
            {[
              { c: 'Tesla Model Y', s: 'გზაშია', p: 70, id: 'L-4921' },
              { c: 'Porsche Macan', s: 'პორტშია', p: 100, id: 'L-8832' },
              { c: 'Lexus RX 350', s: 'მუშავდება', p: 25, id: 'L-1104' },
            ].map((lot, i) => (
              <div key={i} className="bg-slate-50 p-6 rounded-[1.75rem] border border-slate-100 hover:border-sky-500/20 transition-all">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h5 className="text-xs font-black text-slate-400 uppercase tracking-widest mb-1">{lot.id}</h5>
                    <h5 className="text-[15px] font-black text-[#191c30]">{lot.c}</h5>
                  </div>
                  <span className={`text-[10px] font-black px-3 py-1 rounded-full ${lot.p === 100 ? 'bg-green-100 text-green-600' : 'bg-sky-100 text-sky-600'}`}>
                    {lot.s}
                  </span>
                </div>
                <div className="h-2 bg-white rounded-full overflow-hidden border border-slate-200">
                  <div className="h-full bg-[#191c30]" style={{ width: `${lot.p}%` }} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DealerSection;
