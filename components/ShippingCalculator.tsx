
import React, { useState } from 'react';
import { DollarSign, MapPin, Info, ArrowRight } from 'lucide-react';

const rates = [
  { region: 'East Coast', city: 'Savannah, NY', price: 1100, days: '35-40' },
  { region: 'Gulf Coast', city: 'Houston, TX', price: 1350, days: '42-48' },
  { region: 'West Coast', city: 'Los Angeles, CA', price: 1800, days: '55-65' },
];

const ShippingCalculator: React.FC = () => {
  const [selectedRate, setSelectedRate] = useState(rates[0]);
  const [carPrice, setCarPrice] = useState<number>(10000);

  const auctionFee = carPrice * 0.12 + 450;
  const internalShipping = 350;
  const total = carPrice + auctionFee + internalShipping + selectedRate.price;

  return (
    <div className="max-w-6xl mx-auto px-6">
      <div className="glass rounded-[3rem] overflow-hidden border border-white/10 shadow-3xl flex flex-col lg:flex-row">
        <div className="p-10 lg:p-14 flex-1 border-b lg:border-b-0 lg:border-r border-white/5">
          <div className="flex items-center gap-4 mb-10">
            <div className="w-12 h-12 bg-cyan-600/20 rounded-xl flex items-center justify-center text-cyan-400 border border-cyan-500/20">
              <DollarSign size={24} />
            </div>
            <h3 className="text-2xl font-black text-white tracking-tighter">ხარჯების კალკულატორი</h3>
          </div>
          <div className="space-y-10">
            <div>
              <label className="block text-[11px] font-black text-slate-500 mb-4 uppercase tracking-[0.2em]">ლოტის ღირებულება ($)</label>
              <input
                type="number"
                value={carPrice}
                onChange={(e) => setCarPrice(Number(e.target.value))}
                className="w-full bg-slate-950 border border-slate-800 rounded-2xl px-6 py-5 text-xl font-black text-white focus:outline-none focus:ring-1 focus:ring-cyan-500"
              />
            </div>
            <div>
              <label className="block text-[11px] font-black text-slate-500 mb-4 uppercase tracking-[0.2em]">აშშ-ს პორტი</label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {rates.map((rate) => (
                  <button
                    key={rate.region}
                    onClick={() => setSelectedRate(rate)}
                    className={`p-5 rounded-2xl border text-left transition-all ${selectedRate.region === rate.region ? 'bg-cyan-600 border-cyan-400 text-white' : 'bg-slate-950 border-white/5 text-slate-500'}`}
                  >
                    <p className="font-black text-xs mb-1">{rate.region}</p>
                    <p className="text-[10px] opacity-70">{rate.city}</p>
                  </button>
                ))}
              </div>
            </div>
            <div className="bg-slate-950/50 p-5 rounded-2xl border border-white/5 flex gap-4">
              <Info size={18} className="text-cyan-400 shrink-0" />
              <p className="text-[11px] text-slate-500 leading-relaxed">საორიენტაციო დრო: {selectedRate.days} დღე. მოიცავს საზღვაო გადაზიდვას ფოთამდე.</p>
            </div>
          </div>
        </div>
        <div className="p-10 lg:p-14 w-full lg:w-[400px] bg-cyan-950/10 backdrop-blur-xl flex flex-col">
          <h4 className="text-lg font-bold text-white mb-10">ინვოისი</h4>
          <div className="space-y-5 flex-1 text-sm">
            {[
              { l: 'ლოტის ფასი', v: carPrice },
              { l: 'აუქციონის მოსაკრებელი', v: auctionFee.toFixed(0) },
              { l: 'შიდა ევაკუატორი', v: internalShipping },
              { l: 'საკონტეინერო', v: selectedRate.price },
            ].map((item, i) => (
              <div key={i} className="flex justify-between items-center text-slate-400">
                <span>{item.l}</span>
                <span className="text-white font-bold">${item.v}</span>
              </div>
            ))}
            <div className="pt-10 mt-10 border-t border-white/5">
              <span className="text-[10px] text-cyan-400 font-black uppercase tracking-widest block mb-2">ჯამური ფასი საქართველომდე</span>
              <span className="text-4xl font-black text-white">${total.toLocaleString()}</span>
            </div>
          </div>
          <button className="mt-12 w-full py-5 bg-white text-slate-950 rounded-full font-black text-sm flex items-center justify-center gap-3 hover:bg-cyan-400 transition-colors">
            შეკვეთა <ArrowRight size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ShippingCalculator;
