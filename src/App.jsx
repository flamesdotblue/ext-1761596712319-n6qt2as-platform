import React from 'react';
import StatusBar from './components/StatusBar';
import Header from './components/Header';
import PromoHero from './components/PromoHero';
import QuickCategories from './components/QuickCategories';
import MainContent from './components/MainContent';
import FeaturedVenues from './components/FeaturedVenues';
import BottomNav from './components/BottomNav';

export default function App() {
  return (
    <div className="w-full min-h-screen bg-[#F5F5F5] flex items-start justify-center py-6">
      {/* iPhone 14 Pro artboard approximate aspect: 1080x2340 (2:~4.33) */}
      <div className="relative w-[360px] h-[780px] bg-white rounded-[24px] shadow-xl overflow-hidden border border-gray-100">
        <StatusBar />
        <Header />
        <div className="px-4">
          <PromoHero />
        </div>
        <QuickCategories />
        <div className="px-4">
          <MainContent />
          <FeaturedVenues />
        </div>
        <BottomNav />
      </div>
    </div>
  );
}
