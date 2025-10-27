import React from 'react';

const venues = [
  {
    name: 'Marina Sports Arena',
    rating: '4.8',
    distance: '1.2 km',
    img: 'https://images.unsplash.com/photo-1517649763962-0c623066013b?q=80&w=800&auto=format&fit=crop',
  },
  {
    name: 'Greenfield Courts',
    rating: '4.7',
    distance: '2.0 km',
    img: 'https://images.unsplash.com/photo-1517649763962-0c623066013b?q=80&w=800&auto=format&fit=crop',
  },
  {
    name: "Champion's Hub",
    rating: '4.9',
    distance: '3.3 km',
    img: 'https://images.unsplash.com/photo-1546519638-68e109498ffc?q=80&w=800&auto=format&fit=crop',
  },
];

export default function FeaturedVenues() {
  return (
    <div className="mt-5">
      <div
        className="text-[18px] text-[#121629] font-bold mb-3"
        style={{ fontFamily: '"Logotype Regular", system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial' }}
      >
        Popular Near You
      </div>
      <div className="overflow-x-auto no-scrollbar -mx-1 px-1">
        <div className="flex gap-3">
          {venues.map((v) => (
            <div key={v.name} className="w-[140px] h-[160px] rounded-xl overflow-hidden bg-white" style={{ boxShadow: '0px 4px 14px rgba(237,118,33,0.15)' }}>
              <div className="w-full h-[90px]">
                <img src={v.img} alt={v.name} className="w-full h-full object-cover" />
              </div>
              <div className="p-2">
                <div className="text-[12px] text-[#121629] truncate" style={{ fontFamily: '"Bingo Regular", system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial' }}>{v.name}</div>
                <div className="flex items-center justify-between mt-1">
                  <div className="text-[11px]" style={{ color: '#ed7621', fontFamily: '"Bingo Regular", system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial' }}>{v.rating}⭐</div>
                  <div className="text-[11px] text-gray-500" style={{ fontFamily: '"Bingo Regular", system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial' }}>{v.distance}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
