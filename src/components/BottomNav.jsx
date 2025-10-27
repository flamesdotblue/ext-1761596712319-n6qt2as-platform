import React from 'react';
import { Home, Calendar, User, MoreHorizontal } from 'lucide-react';

export default function BottomNav() {
  return (
    <div className="absolute left-0 right-0 bottom-0 h-[70px] bg-white border-t border-gray-100 flex items-center justify-around" style={{ boxShadow: '0 -6px 20px rgba(0,0,0,0.04)' }}>
      <div className="flex flex-col items-center">
        <Home size={26} color="#ed7621" />
        <div className="h-0.5 w-6 mt-1 rounded-full" style={{ background: '#ed7621' }} />
        <span className="text-[10px] mt-1" style={{ color: '#ed7621', fontFamily: '"Bingo Regular", system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial' }}>Home</span>
      </div>
      <div className="flex flex-col items-center">
        <Calendar size={26} color="#121629" />
        <span className="text-[10px] mt-2" style={{ color: '#121629', fontFamily: '"Bingo Regular", system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial' }}>Bookings</span>
      </div>
      <div className="flex flex-col items-center">
        <User size={26} color="#121629" />
        <span className="text-[10px] mt-2" style={{ color: '#121629', fontFamily: '"Bingo Regular", system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial' }}>Profile</span>
      </div>
      <div className="flex flex-col items-center">
        <MoreHorizontal size={26} color="#121629" />
        <span className="text-[10px] mt-2" style={{ color: '#121629', fontFamily: '"Bingo Regular", system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial' }}>More</span>
      </div>
    </div>
  );
}
