
import React, { useState } from 'react';
import { Search, Loader2 } from 'lucide-react';

const VinSearch: React.FC = () => {
  const [vin, setVin] = useState('');
  const [isSearching, setIsSearching] = useState(false);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (!vin.trim()) return;
    setIsSearching(true);
    setTimeout(() => {
      setIsSearching(false);
      alert('ძებნა წარმატებით დასრულდა. მონაცემები იტვირთება...');
    }, 1500);
  };

  return (
    <div className="relative z-40 -mt-10 mb-20">
      <div className="max-w-4xl mx-auto px-6">
        <form 
          onSubmit={handleSearch}
          className="glass border border-white/10 p-2 pl-6 rounded-[2.5rem] flex flex-col md:flex-row items-center gap-4 shadow-3xl hover:border-sky-500/30 transition-all focus-within:ring-2 focus-within:ring-sky-500/20"
        >
          <div className="flex-1 w-full flex items-center gap-5">
            <Search className="text-sky-500 shrink-0" size={24} />
            <div className="flex-1">
              <label className="block text-[9px] font-black text-slate-500 uppercase tracking-[0.3em] mb-1">
                ავტომობილის ძებნა ვინ კოდით
              </label>
              <input
                type="text"
                value={vin}
                onChange={(e) => setVin(e.target.value.toUpperCase())}
                placeholder="შეიყვანეთ 17-ნიშნა VIN..."
                className="w-full bg-transparent border-none p-0 text-lg font-black text-white placeholder:text-slate-700 focus:ring-0 outline-none uppercase"
                maxLength={17}
              />
            </div>
          </div>
          
          <button 
            type="submit"
            disabled={isSearching}
            className="w-full md:w-auto px-12 py-5 bg-sky-500 text-white rounded-[1.8rem] font-black text-xs uppercase tracking-widest hover:bg-white hover:text-[#111322] transition-all disabled:opacity-50 shadow-xl shadow-sky-500/20 flex items-center justify-center gap-3"
          >
            {isSearching ? <Loader2 size={18} className="animate-spin" /> : 'ძიება'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default VinSearch;
