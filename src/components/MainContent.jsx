import React from 'react';
import { Play, ShoppingCart, MapPin, GraduationCap } from 'lucide-react';

const cardShadow = '0px 4px 14px rgba(237,118,33,0.15)';

function FeatureCard({ title, subtitle, bgImage, overlay, darkTitle, buttonColor, icon }) {
  return (
    <div
      className="relative rounded-[16px] overflow-hidden"
      style={{ width: 170, height: 200, boxShadow: cardShadow }}
    >
      <img src={bgImage} alt={title} className="absolute inset-0 w-full h-full object-cover" />
      {overlay && (
        <div className="absolute inset-0" style={{ background: overlay }} />
      )}
      <div className="relative z-10 p-3">
        <div
          className={"text-[20px] font-bold " + (darkTitle ? 'text-[#121629]' : 'text-white')}
          style={{ fontFamily: '"Logotype Regular", system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial' }}
        >
          {title}
        </div>
        <div
          className={"text-[11px] mt-0.5 " + (darkTitle ? 'text-[#121629]' : 'text-white')}
          style={{ fontFamily: '"Bingo Regular", system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial' }}
        >
          {subtitle}
        </div>
      </div>
      <button
        className="absolute bottom-3 right-3 w-[42px] h-[42px] rounded-full flex items-center justify-center text-white"
        style={{ background: buttonColor, boxShadow: '0 0 18px rgba(237,118,33,0.5)' }}
      >
        {icon}
      </button>
    </div>
  );
}

export default function MainContent() {
  return (
    <div className="pt-4">
      <div
        className="text-[20px] text-[#121629] font-bold mb-3"
        style={{ fontFamily: '"Logotype Regular", system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial' }}
      >
        What Do You Want to Do?
      </div>
      <div className="grid grid-cols-2 gap-[10px]">
        <FeatureCard
          title="Let's Play"
          subtitle="Book Courts Easily"
          bgImage="https://images.unsplash.com/photo-1520975916090-3105956dac38?q=80&w=800&auto=format&fit=crop"
          overlay="linear-gradient(180deg, rgba(237,118,33,0.25) 0%, rgba(237,118,33,0.25) 100%)"
          darkTitle={false}
          buttonColor="#ed7621"
          icon={<Play size={20} />}
        />
        <FeatureCard
          title="Let's Shop"
          subtitle="Top Brands, Best Deals"
          bgImage="https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=800&auto=format&fit=crop"
          overlay="linear-gradient(180deg, rgba(207,53,39,0.20) 0%, rgba(207,53,39,0.20) 100%)"
          darkTitle={false}
          buttonColor="#cf3527"
          icon={<ShoppingCart size={20} />}
        />
        <FeatureCard
          title="Let's Visit"
          subtitle="Trusted Sports Clinics"
          bgImage="https://images.unsplash.com/photo-1560448075-bb4caa6c9e96?q=80&w=800&auto=format&fit=crop"
          overlay="linear-gradient(180deg, rgba(255,255,255,0.15) 0%, rgba(255,255,255,0.00) 60%)"
          darkTitle
          buttonColor="#ed7621"
          icon={<MapPin size={20} />}
        />
        <FeatureCard
          title="Let's Learn"
          subtitle="Expert Coaching"
          bgImage="https://images.unsplash.com/photo-1543340713-8a9f7fb24b6c?q=80&w=800&auto=format&fit=crop"
          overlay="linear-gradient(180deg, rgba(237,118,33,0.20) 0%, rgba(237,118,33,0.20) 100%)"
          darkTitle={false}
          buttonColor="#cf3527"
          icon={<GraduationCap size={20} />}
        />
      </div>

      {/* Suggest Banner */}
      <div className="mt-4 w-full">
        <div
          className="relative w-full h-[120px] rounded-[14px] overflow-hidden flex"
          style={{ background: 'linear-gradient(90deg, #ed76211A 0%, #cf35271A 100%)', boxShadow: '0 4px 14px rgba(237,118,33,0.15)' }}
        >
          <div className="absolute left-0 top-0 bottom-0 w-[4px]" style={{ background: '#ed7621' }} />
          <div className="flex-1 pl-4 pr-2 py-3">
            <div
              className="text-[22px]"
              style={{ color: '#ed7621', fontFamily: '"Logotype Regular", system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial', fontWeight: 700 }}
            >
              Let's Suggest
            </div>
            <div
              className="text-[14px] text-[#121629]"
              style={{ fontFamily: '"Bingo Regular", system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial' }}
            >
              Recommend & Get Rewarded
            </div>
            <div
              className="text-[10px] text-gray-500 mt-1"
              style={{ fontFamily: '"Bingo Regular", system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial' }}
            >
              Know a great venue? Share it with us!
            </div>
          </div>
          <div className="w-[35%] relative flex items-center justify-center pr-3">
            {/* Isometric 3D football field illustration */}
            <img
              src="https://images.unsplash.com/photo-1498408040764-ab6eb772a145?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxGaWVsZHxlbnwwfDB8fHwxNzYxNTk3Mjg1fDA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80"
              alt="Field"
              className="w-[110px] h-[90px] object-cover rounded-[10px] border"
              style={{ borderColor: 'rgba(237,118,33,0.4)', boxShadow: '0 0 0 1px rgba(237,118,33,0.2), 0 6px 16px rgba(237,118,33,0.18)' }}
            />
          </div>
          <div className="absolute inset-0 rounded-[14px] pointer-events-none" style={{ boxShadow: '0 0 0 1px rgba(237,118,33,0.20)' }} />
        </div>
      </div>
    </div>
  );
}
