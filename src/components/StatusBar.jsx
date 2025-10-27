import React from 'react';
import { Signal, Wifi, BatteryFull } from 'lucide-react';

export default function StatusBar() {
  return (
    <div className="absolute top-0 left-0 right-0 h-[50px] flex items-center justify-between px-4 text-white" style={{ zIndex: 30 }}>
      <div className="text-sm font-medium" style={{ fontFamily: '"Bingo Regular", system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial' }}>9:41</div>
      <div className="flex items-center gap-2 text-white/90">
        <Signal size={18} />
        <Wifi size={18} />
        <BatteryFull size={20} />
      </div>
    </div>
  );
}
