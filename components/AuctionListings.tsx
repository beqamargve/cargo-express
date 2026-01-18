
import React from 'react';
import { Fuel, Gauge, Calendar, ExternalLink } from 'lucide-react';
import { Car as CarType } from '../types';

const mockCars: CarType[] = [
  { id: '1', title: 'Toyota Camry XSE', year: 2021, engine: '2.5L Hybrid', mileage: '32,450 mi', price: 12500, auction: 'Copart', image: 'https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?auto=format&fit=crop&q=80&w=800', lot: '5421398' },
  { id: '2', title: 'BMW M3 Competition', year: 2022, engine: '3.0L Turbo', mileage: '12,200 mi', price: 45000, auction: 'IAAI', image: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&q=80&w=800', lot: '9923145' },
  { id: '3', title: 'Tesla Model 3 Performance', year: 2023, engine: 'Electric', mileage: '5,100 mi', price: 28900, auction: 'Copart', image: 'https://images.unsplash.com/photo-1536700503339-1e4b06520771?auto=format&fit=crop&q=80&w=800', lot: '1235678' },
];

const AuctionListings: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-6">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16 lg:mb-20">
        <div>
          <span className="text-sky-500 font-black tracking-widest text-[11px] uppercase mb-4 block">პოპულარული არჩევანი</span>
          <h2 className="text-4xl lg:text-5xl font-black text-[#191c30] mb-4 tracking-tighter uppercase">ცხელი ლოტები</h2>
          <p className="text-slate-500 text-base font-medium">პირდაპირი წვდომა ამერიკის წამყვან აუქციონებზე</p>
        </div>
        <div className="flex bg-white p-2 rounded-2xl border border-slate-200 shadow-sm">
          {['ყველა', 'Copart', 'IAAI'].map((tab, i) => (
            <button key={tab} className={`px-8 py-3 rounded-[1rem] text-[13px] font-black transition-all ${i === 0 ? 'bg-[#191c30] text-white shadow-lg' : 'text-slate-400 hover:text-[#191c30]'}`}>{tab}</button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {mockCars.map((car) => (
          <div key={car.id} className="bg-white rounded-[2.5rem] overflow-hidden group border border-slate-100 hover:border-sky-500/40 transition-all duration-500 hover:shadow-2xl hover:shadow-slate-200">
            <div className="relative h-64 overflow-hidden">
              <img src={car.image} alt={car.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
              <div className="absolute top-6 left-6 bg-[#191c30] px-4 py-1.5 rounded-xl text-[10px] text-white font-black uppercase tracking-[0.2em] shadow-xl">
                {car.auction}
              </div>
            </div>
            <div className="p-10">
              <h3 className="text-2xl font-black text-[#191c30] mb-8">{car.title}</h3>
              <div className="grid grid-cols-3 gap-4 mb-10">
                {[
                  { icon: <Calendar size={18} />, label: car.year, n: 'წელი' },
                  { icon: <Fuel size={18} />, label: car.engine.split(' ')[0], n: 'ძრავი' },
                  { icon: <Gauge size={18} />, label: car.mileage.split(' ')[0], n: 'გარბენი' },
                ].map((item, i) => (
                  <div key={i} className="bg-slate-50 p-4 rounded-2xl border border-slate-100 flex flex-col items-center gap-2">
                    <span className="text-sky-600">{item.icon}</span>
                    <span className="text-[12px] font-black text-[#191c30]">{item.label}</span>
                  </div>
                ))}
              </div>
              <div className="flex items-center justify-between pt-8 border-t border-slate-100">
                <div>
                  <span className="text-[11px] text-slate-400 font-black uppercase tracking-widest block mb-2">საორიენტაციო ფასი</span>
                  <span className="text-3xl font-black text-[#191c30] tracking-tighter">${car.price.toLocaleString()}</span>
                </div>
                <button className="w-14 h-14 bg-[#191c30] text-white rounded-2xl flex items-center justify-center transition-all hover:bg-sky-500 shadow-xl shadow-slate-200">
                  <ExternalLink size={24} />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AuctionListings;
