
import React, { useState } from 'react';
import { Search, Loader2 } from 'lucide-react';

const VinSearch: React.FC = () => {
  const [vin, setVin] = useState('');
  const [isSearching, setIsSearching] = useState(false);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (!vin.trim()) return;
    setIsSearching(true);
    // Simulate search delay
    setTimeout(() => {
      setIsSearching(false);
      alert('VIN კოდით ძებნა დროებით მიუწვდომელია. გთხოვთ დაუკავშირდეთ მენეჯერს.');
    }, 1500);
  };

  return (
    <div className="relative z-30 -mt-10 md:-mt-14 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="bg-white rounded-[2rem] md:rounded-full p-3 shadow-2xl shadow-slate-200 border border-slate-100 flex flex-col md:flex-row items-center gap-4">
          <div className="flex-1 w-full px-6 flex items-center gap-4">
            <Search className="text-slate-400 shrink-0" size={24} />
            <div className="flex-1">
              <label className="block text-[10px] font-black text-sky-600 uppercase tracking-widest mb-0.5">ავტომობილის ძებნა ვინ კოდით</label>
              <form onSubmit={handleSearch}>
                <input
                  type="text"
                  value={vin}
                  onChange={(e) => setVin(e.target.value.toUpperCase())}
                  placeholder="შეიყვანეთ 17-ნიშნა VIN კოდი..."
                  className="w-full bg-transparent border-none p-0 text-lg font-bold text-[#191c30] placeholder:text-slate-300 focus:ring-0 outline-none"
                  maxLength={17}
                />
              </form>
            </div>
          </div>
          <button 
            onClick={handleSearch}
            disabled={isSearching}
            className="w-full md:w-auto px-12 py-5 bg-[#191c30] text-white rounded-[1.5rem] md:rounded-full font-black text-sm uppercase tracking-widest hover:bg-sky-600 transition-all flex items-center justify-center gap-3 disabled:opacity-70"
          >
            {isSearching ? <Loader2 size={20} className="animate-spin" /> : 'ძიება'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default VinSearch;
