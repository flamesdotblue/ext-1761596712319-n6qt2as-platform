import React from 'react';
import Spline from '@splinetool/react-spline';

export default function PromoHero() {
  return (
    <div className="mt-4 w-full">
      <div
        className="relative w-full h-[130px] rounded-[14px] overflow-hidden"
        style={{ boxShadow: '0 8px 24px rgba(0,0,0,0.08)' }}
      >
        {/* Spline background as hero cover */}
        <div className="absolute inset-0">
          <Spline scene="https://prod.spline.design/1MH5ijGQRnLRtVUF/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        </div>
        {/* Brand gradient overlay for color direction, pointer-events disabled */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: 'linear-gradient(90deg, rgba(237,118,33,0.85) 0%, rgba(207,53,39,0.85) 100%)' }}
        />
        {/* Content */}
        <div className="relative z-10 h-full w-full flex">
          <div className="w-[60%] h-full flex flex-col justify-center pl-4 pr-2">
            <div
              className="text-white text-[22px] leading-snug"
              style={{ fontFamily: '"Logotype Regular", system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial', fontWeight: 700 }}
            >
              🎾 Book Courts & Win Big!
            </div>
            <div
              className="text-white/95 text-[14px]"
              style={{ fontFamily: '"Bingo Regular", system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial' }}
            >
              Get 20% OFF + Earn Rewards
            </div>
          </div>
          <div className="w-[40%] h-full relative flex items-center justify-center pr-3">
            {/* 3D-like bright sports illustration */}
            <img
              src="https://images.unsplash.com/photo-1543373014-cfe4f4bc1cdf?q=80&w=400&auto=format&fit=crop"
              alt="Sports Equipment"
              className="absolute right-2 top-1/2 -translate-y-1/2 w-[90px] h-[90px] object-cover rounded-xl shadow-xl"
              style={{ boxShadow: '0 10px 24px rgba(0,0,0,0.25)' }}
            />
            <div
              className="absolute top-2 right-2 text-[10px] text-white px-2 py-1 rounded-full"
              style={{ background: 'rgba(255,255,255,0.2)', border: '1px solid rgba(255,255,255,0.6)', backdropFilter: 'blur(6px)' }}
            >
              HOT DEAL
            </div>
          </div>
        </div>
        {/* Outer subtle glow */}
        <div className="absolute inset-0 rounded-[14px] pointer-events-none" style={{ boxShadow: '0 0 0 1px rgba(255,255,255,0.15), 0 10px 28px rgba(237,118,33,0.18)' }} />
      </div>
    </div>
  );
}
