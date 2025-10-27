import React from 'react';
import { Bell, Search } from 'lucide-react';

export default function Header() {
  return (
    <div className="relative" style={{ height: 140 }}>
      <div className="absolute inset-0 bg-[#121629]" />
      {/* Bottom accent gradient line 2px */}
      <div className="absolute bottom-0 left-0 right-0 h-[2px]" style={{ background: 'linear-gradient(90deg, #ed7621 0%, #cf3527 100%)' }} />
      <div className="relative z-10 pt-[50px] px-4 h-full flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img
            src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=200&auto=format&fit=crop"
            alt="Profile"
            className="w-[60px] h-[60px] rounded-full object-cover ring-2 ring-white/10"
          />
          <div className="flex flex-col">
            <div
              className="text-white text-[20px] font-bold"
              style={{ fontFamily: '"Logotype Regular", system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial' }}
            >
              Hello, Emily!
            </div>
            <div
              className="text-[13px] text-[#F5F5F5]/80"
              style={{ fontFamily: '"Bingo Regular", system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial' }}
            >
              Shams, Rabat Street, Abu Dhabi, UAE
            </div>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <button
            aria-label="Search"
            className="w-[40px] h-[40px] rounded-full flex items-center justify-center text-white"
            style={{ background: '#ed7621', boxShadow: '0 0 18px rgba(237,118,33,0.6)' }}
          >
            <Search size={26} />
          </button>
          <button
            aria-label="Notifications"
            className="w-[40px] h-[40px] rounded-full flex items-center justify-center text-white"
            style={{ background: '#ed7621', boxShadow: '0 0 18px rgba(237,118,33,0.6)' }}
          >
            <Bell size={26} />
          </button>
        </div>
      </div>
    </div>
  );
}
