
import React, { useState, useEffect } from 'react';
import { Calculator, Info } from 'lucide-react';

const CustomsCalculator: React.FC = () => {
  const currentYear = new Date().getFullYear();
  const [year, setYear] = useState<number>(2020);
  const [engine, setEngine] = useState<number>(2000);
  const [fuelType, setFuelType] = useState<'petrol' | 'diesel' | 'hybrid' | 'electric'>('petrol');

  const [results, setResults] = useState({
    excise: 0,
    serviceFee: 0,
    total: 0
  });

  const calculateCustoms = () => {
    const age = currentYear - year;
    let rate = 0;

    // Standard Rates Table per 1cc
    const rates: Record<number, number> = {
      0: 1.5, 1: 1.5, 2: 1.4, 3: 1.3, 4: 1.2, 5: 1.1,
      6: 1.0, 7: 0.9, 8: 0.8, 9: 0.8, 10: 0.8,
      11: 0.9, 12: 1.1, 13: 1.3, 14: 1.5
    };
    
    rate = rates[age] || 2.0;

    if (fuelType === 'electric') {
      setResults({ excise: 0, serviceFee: 200, total: 200 });
      return;
    }

    let excise = engine * rate;

    if (fuelType === 'hybrid') excise *= 0.5;
    if (fuelType === 'diesel') excise *= 1.1;

    const serviceFee = 200 + (engine > 3000 ? 350 : 150);
    const total = excise + serviceFee;

    setResults({
      excise: Math.round(excise),
      serviceFee,
      total: Math.round(total)
    });
  };

  useEffect(() => {
    calculateCustoms();
  }, [year, engine, fuelType]);

  return (
    <div className="max-w-7xl mx-auto px-6">
      <div className="text-center mb-16">
        <span className="text-sky-500 font-black tracking-widest text-[11px] uppercase mb-4 block">მყისიერი კალკულაცია</span>
        <h2 className="text-4xl lg:text-5xl font-black text-[#191c30] mb-4 tracking-tighter uppercase">განბაჟების კალკულატორი</h2>
        <p className="text-slate-500 font-medium">გაიანგარიშეთ ავტომობილის გაფორმების ხარჯები MyAuto სტანდარტით</p>
      </div>

      <div className="bg-white rounded-[3rem] border border-slate-200 shadow-2xl overflow-hidden flex flex-col lg:flex-row">
        <div className="p-10 lg:p-16 flex-1 bg-slate-50/30">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div>
              <label className="block text-[12px] font-black text-slate-400 mb-5 uppercase tracking-widest">გამოშვების წელი</label>
              <select 
                value={year}
                onChange={(e) => setYear(Number(e.target.value))}
                className="w-full bg-white border border-slate-200 rounded-[1.25rem] px-6 py-5 text-xl font-bold text-[#191c30] focus:ring-4 focus:ring-sky-500/10 outline-none transition-all"
              >
                {Array.from({ length: 30 }, (_, i) => currentYear - i).map(y => (
                  <option key={y} value={y}>{y}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-[12px] font-black text-slate-400 mb-5 uppercase tracking-widest">ძრავის მოცულობა (cc)</label>
              <input 
                type="number"
                value={engine}
                onChange={(e) => setEngine(Number(e.target.value))}
                className="w-full bg-white border border-slate-200 rounded-[1.25rem] px-6 py-5 text-xl font-bold text-[#191c30] focus:ring-4 focus:ring-sky-500/10 outline-none transition-all"
                placeholder="მაგ: 2000"
              />
            </div>

            <div className="md:col-span-2">
              <label className="block text-[12px] font-black text-slate-400 mb-5 uppercase tracking-widest">საწვავის ტიპი</label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {[
                  { id: 'petrol', label: 'ბენზინი' },
                  { id: 'diesel', label: 'დიზელი' },
                  { id: 'hybrid', label: 'ჰიბრიდი' },
                  { id: 'electric', label: 'ელექტრო' },
                ].map((type) => (
                  <button
                    key={type.id}
                    onClick={() => setFuelType(type.id as any)}
                    className={`py-5 rounded-2xl text-[13px] font-black uppercase tracking-tighter transition-all border ${fuelType === type.id ? 'bg-[#191c30] border-[#191c30] text-white shadow-xl scale-[1.02]' : 'bg-white border-slate-200 text-slate-400 hover:border-slate-400'}`}
                  >
                    {type.label}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-12 p-8 bg-sky-50/50 rounded-3xl border border-sky-100/50 flex gap-5 items-center">
            <div className="w-10 h-10 bg-sky-500/10 text-sky-600 rounded-full flex items-center justify-center shrink-0">
              <Info size={24} />
            </div>
            <p className="text-xs text-sky-900/70 leading-relaxed font-semibold">
              ჰიბრიდულ ავტომობილებზე მოქმედებს 50%-იანი აქციზის შეღავათი. ელექტრომობილების განბაჟება სრულიად უფასოა!
            </p>
          </div>
        </div>

        <div className="p-10 lg:p-16 w-full lg:w-[460px] bg-[#191c30] text-white flex flex-col justify-center">
          <div className="flex items-center gap-4 mb-12 pb-8 border-b border-white/10">
            <Calculator className="text-sky-400 w-8 h-8" />
            <h4 className="text-2xl font-black uppercase tracking-tighter">გაანგარიშება</h4>
          </div>

          <div className="space-y-8 flex-1">
            <div className="flex justify-between items-center text-slate-400">
              <span className="text-base font-medium">აქციზის გადასახადი</span>
              <span className="font-bold text-white text-lg">₾ {results.excise.toLocaleString()}</span>
            </div>
            <div className="flex justify-between items-center text-slate-400">
              <span className="text-base font-medium">სერვისის საფასური</span>
              <span className="font-bold text-white text-lg">₾ {results.serviceFee}</span>
            </div>
            
            <div className="pt-12 mt-12 border-t border-white/10">
              <span className="text-[11px] text-sky-400 font-black uppercase tracking-widest block mb-4">ჯამური განბაჟება</span>
              <div className="flex flex-col gap-2">
                <span className="text-6xl font-black leading-none tracking-tighter">₾ {results.total.toLocaleString()}</span>
                <span className="text-xl opacity-40 font-black">≈ ${(results.total / 2.7).toFixed(0)}</span>
              </div>
            </div>
          </div>

          <button className="mt-16 w-full py-6 bg-sky-500 text-white rounded-2xl font-black text-sm uppercase tracking-widest hover:bg-sky-400 transition-all shadow-2xl shadow-sky-500/20 active:scale-95">
            დეტალური ინვოისი
          </button>
        </div>
      </div>
    </div>
  );
};

export default CustomsCalculator;
