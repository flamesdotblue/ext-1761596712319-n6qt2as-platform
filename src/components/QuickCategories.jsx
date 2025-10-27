import React from 'react';

const categories = [
  { name: 'Tennis', bg: '#ed7621', icon: 'tennis', iconColor: '#FFFFFF' },
  { name: 'Football', bg: '#cf3527', icon: 'football', iconColor: '#FFFFFF' },
  { name: 'Basketball', bg: '#121629', icon: 'basketball', iconColor: '#ed7621' },
  { name: 'Cricket', bg: 'linear-gradient(180deg,#ed7621,#f08b46)', icon: 'bat', iconColor: '#FFFFFF' },
  { name: 'Badminton', bg: 'linear-gradient(180deg,#cf3527,#f06a5e)', icon: 'shuttle', iconColor: '#FFFFFF' },
  { name: 'Swimming', bg: '#121629', icon: 'swimmer', iconColor: '#ed7621' },
];

function Icon({ type, color }) {
  switch (type) {
    case 'tennis':
      return (
        <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="14" cy="14" r="12" stroke={color} strokeWidth="2" />
          <path d="M4 12c4-2 8-2 12 2s6 4 8 4" stroke={color} strokeWidth="2" fill="none" />
          <path d="M18 5c-2 4-2 8 2 12" stroke={color} strokeWidth="2" fill="none" />
        </svg>
      );
    case 'football':
      return (
        <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="14" cy="14" r="12" stroke={color} strokeWidth="2" />
          <polygon points="14,9 10,12 11,17 17,17 18,12" fill="none" stroke={color} strokeWidth="2" />
          <path d="M2 14h24M14 2v24" stroke={color} strokeWidth="1" opacity="0.3" />
        </svg>
      );
    case 'basketball':
      return (
        <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="14" cy="14" r="12" stroke={color} strokeWidth="2" />
          <path d="M2 14h24M14 2v24" stroke={color} strokeWidth="2" />
          <path d="M6 6c6 6 10 10 16 16M22 6c-6 6-10 10-16 16" stroke={color} strokeWidth="1.5" />
        </svg>
      );
    case 'bat':
      return (
        <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M20 4l4 4-10 10-4 2 2-4 10-10z" fill={color} />
          <path d="M8 20l-3 3" stroke={color} strokeWidth="2" strokeLinecap="round" />
        </svg>
      );
    case 'shuttle':
      return (
        <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M20 6l2 2-8 8-2-2 8-8z" fill={color} />
          <path d="M10 14l-5 5m7-3l-4 4" stroke={color} strokeWidth="2" strokeLinecap="round" />
        </svg>
      );
    case 'swimmer':
      return (
        <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="9" cy="9" r="3" fill={color} />
          <path d="M4 20c3-2 5-2 8 0s5 2 8 0" stroke={color} strokeWidth="2" strokeLinecap="round" />
          <path d="M6 16l5-3 4 2" stroke={color} strokeWidth="2" strokeLinecap="round" />
        </svg>
      );
    default:
      return null;
  }
}

export default function QuickCategories() {
  return (
    <div className="w-full bg-white mt-4 pt-3 pb-2">
      <div className="px-4 flex items-center justify-between">
        <div
          className="text-[18px] text-[#121629] font-bold"
          style={{ fontFamily: '"Logotype Regular", system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial' }}
        >
          Explore Sports
        </div>
        <button
          className="text-[14px]"
          style={{ color: '#ed7621', fontFamily: '"Bingo Regular", system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial' }}
        >
          View All
        </button>
      </div>
      <div className="mt-3 px-4 overflow-x-auto no-scrollbar">
        <div className="flex items-start gap-3" style={{ width: 'max-content' }}>
          {categories.map((c) => (
            <div key={c.name} className="flex flex-col items-center" style={{ width: 75 }}>
              <div
                className="w-[75px] h-[75px] rounded-full flex items-center justify-center"
                style={{ background: c.bg }}
              >
                <Icon type={c.icon} color={c.iconColor} />
              </div>
              <div
                className="mt-2 text-[11px] text-[#121629] text-center"
                style={{ fontFamily: '"Bingo Regular", system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial' }}
              >
                {c.name}
              </div>
            </div>
          ))}
        </div>
        {/* Scroll indicator */}
        <div className="flex items-center justify-center gap-1 mt-3">
          <span className="w-1.5 h-1.5 rounded-full" style={{ background: '#ed7621' }} />
          <span className="w-1.5 h-1.5 rounded-full bg-gray-300" />
          <span className="w-1.5 h-1.5 rounded-full bg-gray-300" />
        </div>
      </div>
    </div>
  );
}
